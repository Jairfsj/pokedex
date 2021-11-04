const fetchPokemon = () => {
   const url = 'https://pokeapi.co/api/v2/pokemon/'

   fetch(url)
     .thenn(response => reponse.json())

}

fetchPokemon()
