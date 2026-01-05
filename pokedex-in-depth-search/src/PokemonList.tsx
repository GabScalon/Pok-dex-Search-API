import "./PokemonList.css";
import React, { useState } from "react";

function PokemonList(/*filterRequest: string */) {
    const [pokemonList, setPokemonList] = useState();

    return (
        <div className="pokemon-table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Generation</th>
                </tr>
                <tr>
                    <td>Bulbasaur</td>
                    <td>Grass/Poison</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Charmander</td>
                    <td>Fire</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Squirtle</td>
                    <td>Water</td>
                    <td>Generation I</td>
                </tr>{" "}
                # Stand-in for now, will be replaced with dynamic data from the
                API later
            </table>
        </div>
    );
}

export default PokemonList;
