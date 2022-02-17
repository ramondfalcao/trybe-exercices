import React from "react";
import pokemons from "../data";
import Pokemon from "./Pokemon";


class PokemonsList extends React.Component {
    render() {
        return (
            <>
                {
                    pokemons.map((pokemon) => {
                        return <Pokemon pokemonData={pokemon} key={pokemon.id}/>
                    })
                }
            </>
        );
    }
}

export default PokemonsList;