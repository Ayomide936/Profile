async function  fetchData() {
    try {
      const pokemonName = document.getElementById("pokemonName");
       console.log(pokemonName.value.toLowerCase())

       const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`)
        if(!pokemon.ok) {
            throw new Error("can't load")
        }
        
        const data = await pokemon.json();
        console.log(data)
        const pokemonSprite = data.sprites.front_default;
       // alert(pokemonSprite)
         const pokemonImg = document.getElementById("pokemonimage");
         pokemonImg.src = pokemonSprite
    } catch (error) {
        console.error(error);
    }
}
