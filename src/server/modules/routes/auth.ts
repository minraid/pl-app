import { Router, Request, Response, NextFunction } from 'express';
import {Auth, IAuth} from '../auth/auth';
import Session = Express.Session;
import { Mailer } from "../module/mailer";

export const authRouter = Router();

export interface AppRequest extends Request {
  body: {
    [key: string]: any;
  };
  session: Session;
}

interface ParamsMap {
  login: Array<string>;
  signup: Array<Object>;
  checknick: Array<string>;
  logout: Array<Session>;
  forgot: Array<string>;
  admin: Array<Object>;
  [key: string]: any;
}

const map: IAuth = {
  login: Auth.login,
  signup: Auth.signUp,
  checknick: Auth.checkNick,
  logout: Auth.logout,
  forgot: Auth.forgot,
  admin: Auth.adminSignUp,
};

authRouter.post('/:action', (req: AppRequest, res: Response) => {
  const key = req.params['action'];
  const action = map[key];
  const params = getParams(req);
  const sendMailActions = ['signup', 'forgot', 'admin'];

  action(...params).then((data: any) => { // TODO: refactor
    if (key === 'login') {
      const {_id: uid, role: {type: role}} = data;
      Object.assign(req.session, {uid, role});
      res.json(true);
    } else if (sendMailActions.find(action => action === key)) {
      Mailer.send(req.body['email'], data).then(() => {
        res.end();
      }, () => {
        res.status(500);
        res.end();
      })
    } else {
      res.json(data);
    }
  }, (err: any) => {
    res.status(400);
    res.send(err);
  });
});

export function getParams({body, session, params}: AppRequest) {
  const map: ParamsMap = {
    login: [body['email'], body['password']],
    signup: [body],
    checknick: [body['nickname']],
    logout: [session],
    forgot: [body['email']],
    admin: [body]
  };
  return map[params['action']];
}
