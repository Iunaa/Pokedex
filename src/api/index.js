export const fetchPokemon = async (id) => {
    let word = isNaN(id)
    let name = '';

    if (word) {
        name = id.toLowerCase()
    }

    try {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${word ? name : id}`);

        if (APIResponse.status === 404) {
            return {}
        } else {
            const data = await APIResponse.json();
            if (data !== undefined) {
                return data;
            }
        }
    } catch (error) {
        //algum erro que não seja o 404 será exibido no console
    }

}