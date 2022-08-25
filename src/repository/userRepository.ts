import { db } from "../data/connection";
import IUserDomainModel from "../models/domainModels/IUserDomainModel";
import IDbResultDataModel from "../models/IDbResultDataModel";
import IRegisterUserRequest from "../models/IRegisterUserRequest";

export const userRepository = {
  async getUserByEmail(email: string): Promise<IUserDomainModel> {
    const userByEmail = await db.query<IUserDomainModel[]>(
      "SELECT * FROM user WHERE email = ?",
      [email]
    );
    return userByEmail[0];
  },

  async registerUser(
    register: IRegisterUserRequest
  ): Promise<IDbResultDataModel> {
    const newUser = await db.query<IDbResultDataModel>(
      `INSERT INTO user (username, email, password)
      VALUES (?, ?, ?)`,
      [register.username, register.email, register.password]
    );
    return newUser;
  },
};
