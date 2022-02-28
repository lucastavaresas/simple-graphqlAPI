import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../types/UserType";
import { NewUserInput } from "../inputs/user/createUser";
import { CreateUserService } from "../services/CreateUserService";
import { FindUserService } from "../services/FindUserService";

@Resolver(User)
export class UserResolver {
  @Query((returns) => [User])
  async findAllUsers() {
    return await FindUserService()
  }
  @Mutation(() => User)
  async addUser(@Arg("newUserData") newUserData: NewUserInput) {
    return  await CreateUserService(newUserData)
  }
}
