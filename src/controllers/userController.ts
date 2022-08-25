import { NextFunction, Request, Response } from "express";
import IRegisterUserRequest from "../models/IRegisterUserRequest";
import { emailService } from "../services/emailService";
import { passwordService } from "../services/passwordService";

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
    if (req.body.length === 0) {
      return next({
        message: "Username, email and password are required.",
        status: 422,
      });
    }

    const isValidEmail: boolean = emailService.emailCheck(
      newRegistration.email
    );

    if (!isValidEmail) {
      return next({
        message: "Email is invalid.",
        status: 422,
      });
    }

    const isValidPassword: boolean = passwordService.checkPassword(
      newRegistration.password
    );

    if (!isValidPassword) {
      return next({
        message:
          "Password must be at least 8 characters and contain letter and number.",
        status: 422,
      });
    }
  },
};
