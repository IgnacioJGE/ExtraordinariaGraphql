import { character } from "../types.ts"
import axios from "npm:axios"
import { GraphQLError } from 'graphql';
export const Query={
    character: async(_:unknown,
        args:{id:number}
    ):Promise<character>=>{
        const response= await axios.get(`https://rickandmortyapi.com/api/character/${args.id}`)
        if(!response) throw new GraphQLError("ID incorrecto")
            return response.data
    },
    charactersByIds: async(_:unknown,
        args:{ids:number[]}
    ):Promise<character[]>=>{
    const response= await axios.get(`https://rickandmortyapi.com/api/character/${args.ids}`)
    if(!response) throw new GraphQLError("ID incorrecto")
        return response.data
}
}