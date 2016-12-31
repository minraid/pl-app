import { Router, Response } from 'express';
import { Category } from '../categories/categories';
import { Order } from '../orders/orders';
import { Product } from '../products/products';
import { User } from '../users/users';
import { AppRequest } from './auth';
export const apiRouter = Router();

const map = {
  categories: Category,
  orders: Order,
  products: Product,
  users: User
};

apiRouter.get('/:entity', (req: AppRequest, res: Response) => {
  const model = map[req.params['entity']];
  model.get().then(data => res.json(data));
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
