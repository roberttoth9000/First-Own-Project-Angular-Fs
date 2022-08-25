import IDbResultDataModel from "../models/IDbResultDataModel";
import IRegisterUserRequest from "../models/IRegisterUserRequest";
import IUserDomainModel from "../models/domainModels/IUserDomainModel";

export const userService = {
    async registerUser(register: IRegisterUserRequest): Promise<IDbResultDataModel>{
        const userFromDb: IUserDomainModel = await 
    }
}