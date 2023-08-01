import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',

});


export function AllPokemons() {
    let pokemons = instance.get("pokemon").then(
        async function (response){
            let result = await response;
            console.log(result)
            return result.data.results;       
        }
    )
    return pokemons
}

