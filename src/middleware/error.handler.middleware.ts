import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json(err.message)
  }