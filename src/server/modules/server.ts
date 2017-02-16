import * as express from 'express';
import * as session from 'express-session';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { DBconnection } from "./db/connection";
import { authRouter } from './routes/auth';
import { apiRouter } from './routes/api';
import { mainRouter } from "./routes/main";

export class Server {
  private App: express.Application;

  constructor() {
    this.App = express();
  }

  public setRoutes() {
    this.App.use('/auth', authRouter);
    this.App.use('/api', apiRouter);

    this.App.use('/static', express.static(path.join(__dirname, '../../../dist')));
    this.App.use('/client', express.static(path.join(__dirname, '../../client')));

    this.App.use(mainRouter);
  }

  public setup() {
    this.App.set('views', 'views');
    this.App.set('x-powered-by', false);
    this.setMiddleWares();
    DBconnection.connect()
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
      cookie: {secure: false} // TODO: secure true on https
    };
    this.App.use(session(sess));
    this.App.use(bodyParser.json());
  }

  private exceptionHandler(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.status(404);
    res.send('Not Found');
  }
}
