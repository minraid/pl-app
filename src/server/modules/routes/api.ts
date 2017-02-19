import { Router, Response } from 'express';
import { Category } from '../categories/categories';
import { Order } from '../orders/orders';
import { Product } from '../products/products';
import { User } from '../users/users';
import { AppRequest } from './auth';
import { IUserDocument } from "../users/interfaces";
import * as multer from 'multer';
import * as path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '../../uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname.replace(/ /g, '-'))
  }
});
const upload = multer({storage});

export const apiRouter = Router();

const map = {
  categories: Category,
  orders: Order,
  products: Product,
  users: User
};

apiRouter.get('/user', (req: AppRequest, res: Response) => {
  if (req.session['uid']) {
    Promise.all([
      User.get(req.session['uid'])
        .then(user => user._doc),
      Order.search({user: req.session['uid']})
        .then(orders => {
          return {orders}
        })
    ]).then(data => {
      const user = data.reduce((user, item) => {
        return Object.assign(user, item);
      }, {});
      res.json(user);
    })

      .then(data => res.json(data));
  } else {
    res.status(401);
    res.end();
  }
});

apiRouter.post('/upload', upload.single('img'), (req, res) => {
  res.end(`/uploads/${req.file.filename}`);
});

apiRouter.post('/user', (req: AppRequest, res: Response) => {
  if (req.session['uid']) {
    User.update(req.session['uid'], <IUserDocument>req.body)
      .then(data => res.json(data));
  } else {
    res.status(401);
    res.end();
  }
});

apiRouter.get('/:entity', (req: AppRequest, res: Response) => {
  const model = map[req.params['entity']];
  if (req.query) {
    model.search(req.query).then(data => res.json(data));
  } else {
    model.get().then(data => res.json(data));
  }
});

apiRouter.get('/:entity/:id', (req: AppRequest, res: Response) => {
  const {entity, id} = req.params;
  const model = map[entity];
  model.get(id).then(data => res.json(data));
});

apiRouter.post('/:entity', (req: AppRequest, res: Response) => {
  const model = map[req.params['entity']];
  model.create(req.body).then(data => res.json(data));
});

apiRouter.put('/:entity/:id', (req: AppRequest, res: Response) => {
  const {entity, id} = req.params;
  const model = map[entity];
  model.update(id, req.body).then(data => res.json(data));
});

apiRouter.delete('/:entity/:id', (req: AppRequest, res: Response) => {
  const {entity, id} = req.params;
  const model = map[entity];
  model.delete(id).then(data => res.json(data));
});
