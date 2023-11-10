import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
  userId: number;
}

export const authenticate = (_req: Request, _res: Response, _next: NextFunction) => {
  // const authHeader = `Bearer ${req?.headers['authorization']}`;
  // const token = authHeader && authHeader.split(' ')[1];

  // if (!token) {
  //   return res.status(401).json({ message: 'Missing authorization token' });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.TOKEN_SECRET as jwt.Secret) as TokenPayload;
  //   req.user = { id: decoded.userId };

  //   return next();
  // } catch (err) {
  //   return res.status(401).json({ message: 'Invalid authorization token' });
  // }

};

