import { UserModel } from "../schemas/UserSchema";

export async function FindUserService(){
    return await UserModel.find()
  }