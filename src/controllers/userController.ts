import { NextFunction, Request, Response } from "express";
import IRegisterUserRequest from "../models/IRegisterUserRequest";
import IRegisterUserViewModel from "../models/viewModels/IRegisterUserViewModel";
import { emailService } from "../services/emailService";
import { passwordService } from "../services/passwordService";
import { userService } from "../services/userService";

export const userController = {
  async registerUser(
    req: Request<IRegisterUserRequest>,
    res: Response<IRegisterUserViewModel>,
    next: NextFunction
  ) {
    console.log("Helo");
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

    await userService
      .registerUser(newRegistration)
      .then(() => {
        return res.json({
          status: 202,
          message: "Registration was successful",
        });
      })
      .catch((err) => {
        console.log(err);
        next(err);
        return;
      });
  },
};
