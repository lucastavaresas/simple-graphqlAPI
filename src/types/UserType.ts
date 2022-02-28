import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((type) => ID)
  _id: string;
  
  @Field({ nullable: true })
  name: string;

  @Field()
  email: string;
}
