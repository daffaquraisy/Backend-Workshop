import * as express from 'express';
import { Request, Response, Router, NextFunction } from 'express';
import {
  myFunction
} from '../controllers/DataController';
import { authenticate } from '../middlewares/auth';

module.exports = (app: any) => {

  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  const router: Router = express.Router();

  router.post('/func/', myFunction);

  app.use("/api/v1", router);
};

