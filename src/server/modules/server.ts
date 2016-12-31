/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import { DBconnection } from "./db/connection";
import { authRouter } from './routes/auth';
import { apiRouter } from './routes/api';

export class Server {
  private App: express.Application;

  constructor() {
    this.App = express();
  }

  public setRoutes() {
    this.App.use('/auth', authRouter);
    this.App.use('/api', apiRouter);
    // this.App.get('*', (req: express.Request, res: express.Response) => {
    //   res.send('Hello world');
    //   // const category = new categoriesModel({name: 'Test'});
    //   // category.save((err, data) => {
    //   //   console.log(err, data);
    //   // });
    // });
  }

  public setup() {
    this.App.set('view engine', 'pug');
    this.App.set('views', 'views');
    this.App.set('x-powered-by', false);
    this.setMiddleWares();
    DBconnection.connect();
  }

  public startServer() {
    this.App.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  }

  private setMiddleWares() {
    const sess = {
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {secure: true}
    };
    this.App.use(session(sess));
    this.App.use(bodyParser.json());
    this.App.use('/node_modules', express.static('../../node_modules'));
    this.App.use('/app', express.static('../app'));
    this.App.use(express.static('../app'));
  }

  private exceptionHandler(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(404);
    res.send('Not Found');
  }
}
