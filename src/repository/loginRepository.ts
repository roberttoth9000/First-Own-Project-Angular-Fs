import { db } from "../data/connection";
import IUserDomainModel from "../models/domainModels/IUserDomainModel";

export const loginRepository = {
  async getUserByUsername(user: string): Promise<IUserDomainModel> {
    const userByUsername = await db.query<IUserDomainModel[]>(
      "SELECT * FROM user WHERE username = ?",
      [user]
    );
    return userByUsername[0];
  },
};
