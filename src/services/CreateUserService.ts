import { NewUserInput } from "../inputs/user/createUser";
import { UserModel } from "../schemas/UserSchema";

export async function CreateUserService(newUserData: NewUserInput) {
  const newUser = new UserModel();
  newUser.name = newUserData.name;
  newUser.email = newUserData.email;
  await newUser.save();
  return newUser;
}
