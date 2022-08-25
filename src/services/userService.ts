import IDbResultDataModel from "../models/IDbResultDataModel";
import IRegisterUserRequest from "../models/IRegisterUserRequest";
import IUserDomainModel from "../models/domainModels/IUserDomainModel";
import { loginRepository } from "../repository/loginRepository";
import { userRepository } from "../repository/userRepository";

export const userService = {
  async registerUser(
    register: IRegisterUserRequest
  ): Promise<IDbResultDataModel> {
    const userFromDb: IUserDomainModel =
      await loginRepository.getUserByUsername(register.username);
    if (userFromDb) {
      return Promise.reject({
        message: "Username already taken",
        status: 307,
      });
    }
    return userRepository.getUserByEmail(register.email).then(async (user) => {
      if (user) {
        return Promise.reject({
          message: "Email already taken",
          status: 307,
        });
      }
      return await userRepository.registerUser(register);
    });
  },
};
