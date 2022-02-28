import "reflect-metadata"
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import "./connection";


async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
  });
  const server = new ApolloServer({ schema });
  server.listen({ port: 4100 }, console.log("Server is running on 4100"));
}

bootstrap();
