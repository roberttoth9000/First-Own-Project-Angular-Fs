import express from "express";
import requestBodyValidator from "../middlewares/requestBodyValidator";
import { registerUserRequestKeys } from "../helpers/requestKeys";
import { userController } from "../controllers/userController";
import cors from "cors";

const apiRouter = express.Router();
apiRouter.use(express.json());
apiRouter.use(cors());

//Auth
apiRouter
  .route("/register")
  .post(requestBodyValidator(registerUserRequestKeys, 400));
apiRouter.post("/register", userController.registerUser);

export default apiRouter;
