import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class NewUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  name: string;

}


