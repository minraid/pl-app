import { Router, Response } from 'express';
import { AppRequest } from './auth';
import * as path from 'path';

export const mainRouter = Router();

mainRouter.get('*', (req: AppRequest, res: Response) => {
  if (req.session['uid']) {

    if (req.session['role'] === 'ADMIN') {
      res.sendFile(path.join(__dirname, '../../../../dist/admin/index.html'));
    } else {
      res.sendFile(path.join(__dirname, '../../../../dist/app/index.html'));
    }

  } else {
    res.sendFile(path.join(__dirname, '../../../../dist/auth/index.html'));
  }
});
