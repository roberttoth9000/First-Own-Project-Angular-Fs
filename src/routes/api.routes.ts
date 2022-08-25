import express from "express";
import requestBodyValidator from "../middlewares/requestBodyValidator";
import { registerUserRequestKeys } from "../helpers/requestKeys";
import { userController } from "../controllers/userController";

const apiRouter = express.Router();
apiRouter.use(express.json());

//Auth
apiRouter
  .route("/register")
  .post(requestBodyValidator(registerUserRequestKeys, 400));
apiRouter.post("/register", userController.registerUser);

export default apiRouter;
