import { character,location} from '../types.ts';
import axios from "npm:axios"
import { GraphQLError } from "graphql";




export const Location={
    residents: async(loca:location):Promise<character[]>=>{
        const arraymostrar:character[]=[]

        for (let index = 0; index < loca.residents.length; index++) {
            console.log(index)
            const response= await axios.get(`${loca.residents[index]}`)
            if(!response) throw new GraphQLError("Episodio no existe")
            arraymostrar.push(response.data)
        }
        return (arraymostrar)
    }
    
}
