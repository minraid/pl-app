import { Router, Request, Response, NextFunction } from 'express';
import {Auth, IAuth} from '../auth/auth';
import Session = Express.Session;

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
  [key: string]: any;
}

const map: IAuth = {
  login: Auth.login,
  signup: Auth.signUp,
  checknick: Auth.checkNick,
  logout: Auth.logout,
  forgot: Auth.forgot
};

authRouter.post('/:action', (req: AppRequest, res: Response, next: NextFunction) => {
  const action = map[req.params['action']];
  const params = getParams(req);
  action(...params).then((data: any) => {
    res.json(data);
  }, (err: any) => {
    console.log(err);
    res.end();
  })
});

export function getParams({body, session, params}: AppRequest) {
  const map: ParamsMap = {
    login: [body['email'], body['pass']],
    signup: [body],
    checknick: [body['nickname']],
    logout: [session],
    forgot: [body['email']]
  };
  return map[params['action']];
}