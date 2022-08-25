import { NextFunction, Request, Response } from "express";
import IRegisterUserRequest from "../models/IRegisterUserRequest";

export const userController = {
  async registerUser(
    req: Request<IRegisterUserRequest>,
    res: Response<IRegisterUserRequest>,
    next: NextFunction
  ) {
    const newRegistration: IRegisterUserRequest = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
  },
};
