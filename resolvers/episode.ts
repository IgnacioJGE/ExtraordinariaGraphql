import { character,episode,location} from '../types.ts';
import axios from "npm:axios"
import { GraphQLError } from "graphql";




export const Episode={
    characters: async(episodio:episode):Promise<character[]>=>{
        const arraymostrar:character[]=[]

        for (let index = 0; index < episodio.characters.length; index++) {
            console.log(index)
            const response= await axios.get(`${episodio.characters[index]}`)
            if(!response) throw new GraphQLError("Episodio no existe")
            arraymostrar.push(response.data)
        }
        return (arraymostrar)
    }
}