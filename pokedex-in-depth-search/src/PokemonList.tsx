import "./PokemonList.css";
import React, { useState } from "react";

function PokemonList(/*filterRequest: string */) {
    const [pokemonList, setPokemonList] = useState();
    const [activeFilter, setActiveFilter] = useState("");

    return (
        <div className="pokemon-table">
            <table>
                <tr>
                    <th>Name</th>
                    <th>Type 1</th>
                    <th>Type 2</th>
                    <th>Ability 1</th>
                    <th>Ability 2</th>
                    <th>Hidden Ability</th>
                    <th>Generation</th>
                </tr>
                <tr>
                    <td>Bulbasaur</td>
                    <td>Grass</td>
                    <td>Poison</td>
                    <td>Overgrow</td>
                    <td></td>
                    <td>Chlorophyll</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Charmander</td>
                    <td>Fire</td>
                    <td></td>
                    <td>Blaze</td>
                    <td></td>
                    <td>Solar Power</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Squirtle</td>
                    <td>Water</td>
                    <td></td>
                    <td>Torrent</td>
                    <td></td>
                    <td>Rain Dish</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Pikachu</td>
                    <td>Electric</td>
                    <td></td>
                    <td>Static</td>
                    <td></td>
                    <td>Lightning Rod</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Jigglypuff</td>
                    <td>Normal</td>
                    <td>Fairy</td>
                    <td>Cute Charm</td>
                    <td>Competitive</td>
                    <td>Friend Guard</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Gengar</td>
                    <td>Ghost</td>
                    <td>Poison</td>
                    <td>Cursed Body</td>
                    <td></td>
                    <td></td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Onix</td>
                    <td>Rock</td>
                    <td>Ground</td>
                    <td>Rock Head</td>
                    <td>Sturdy</td>
                    <td>Weak Armor</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Alakazam</td>
                    <td>Psychic</td>
                    <td></td>
                    <td>Synchronize</td>
                    <td>Inner Focus</td>
                    <td>Magic Guard</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Machamp</td>
                    <td>Fighting</td>
                    <td></td>
                    <td>Guts</td>
                    <td>No Guard</td>
                    <td>Steadfast</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Snorlax</td>
                    <td>Normal</td>
                    <td></td>
                    <td>Immunity</td>
                    <td>Thick Fat</td>
                    <td>Gluttony</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Bulbasaur</td>
                    <td>Grass</td>
                    <td>Poison</td>
                    <td>Overgrow</td>
                    <td></td>
                    <td>Chlorophyll</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Charmander</td>
                    <td>Fire</td>
                    <td></td>
                    <td>Blaze</td>
                    <td></td>
                    <td>Solar Power</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Squirtle</td>
                    <td>Water</td>
                    <td></td>
                    <td>Torrent</td>
                    <td></td>
                    <td>Rain Dish</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Pikachu</td>
                    <td>Electric</td>
                    <td></td>
                    <td>Static</td>
                    <td></td>
                    <td>Lightning Rod</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Jigglypuff</td>
                    <td>Normal</td>
                    <td>Fairy</td>
                    <td>Cute Charm</td>
                    <td>Competitive</td>
                    <td>Friend Guard</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Gengar</td>
                    <td>Ghost</td>
                    <td>Poison</td>
                    <td>Cursed Body</td>
                    <td></td>
                    <td></td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Onix</td>
                    <td>Rock</td>
                    <td>Ground</td>
                    <td>Rock Head</td>
                    <td>Sturdy</td>
                    <td>Weak Armor</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Alakazam</td>
                    <td>Psychic</td>
                    <td></td>
                    <td>Synchronize</td>
                    <td>Inner Focus</td>
                    <td>Magic Guard</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Machamp</td>
                    <td>Fighting</td>
                    <td></td>
                    <td>Guts</td>
                    <td>No Guard</td>
                    <td>Steadfast</td>
                    <td>Generation I</td>
                </tr>
                <tr>
                    <td>Snorlax</td>
                    <td>Normal</td>
                    <td></td>
                    <td>Immunity</td>
                    <td>Thick Fat</td>
                    <td>Gluttony</td>
                    <td>Generation I</td>
                </tr>
                # Stand-in for now, will be replaced with dynamic data from the
                API later
            </table>
        </div>
    );
}

export default PokemonList;
