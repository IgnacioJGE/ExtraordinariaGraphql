import mongoose from "mongoose"
import { GraphQLError } from "graphql";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./gql/schema.ts";
import { Character } from "./resolvers/character.ts";
import { Query } from "./resolvers/query.ts";
import { Episode } from "./resolvers/episode.ts";
import {Location} from "./resolvers/location.ts"


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Character,
    Episode,
    Location
    
  },
});
const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);
