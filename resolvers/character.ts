import { character,episode,location} from '../types.ts';
import axios from "npm:axios"
import { GraphQLError } from "graphql";


export const Character={
    episode: async(personaje:character):Promise<episode[]>=>{
        const arraymostrar:episode[]=[]
        for (let index = 0; index < personaje.episode.length; index++) {
            const response= await axios.get(`${personaje.episode[index]}`)
            if(!response) throw new GraphQLError("Perosnaje no existe")
            arraymostrar.push(response.data)
        }
        return (arraymostrar)
    },
    location: async(personaje:character):Promise<location>=>{
        const respuesta= await axios.get(`${personaje.location.url}`)
        if(!respuesta) throw new GraphQLError("Perosnaje no existe")

        return respuesta.data
    },
    origin: async(personaje:character):Promise<location>=>{
        const respuesta= await axios.get(`${personaje.origin.url}`)
        if(!respuesta) throw new GraphQLError("Perosnaje no existe")
        return respuesta.data
    }
}