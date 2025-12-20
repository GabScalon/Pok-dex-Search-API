import React, { useState } from "react";

function FilterOptions() {
    const [radio, setRadio] = useState("name");
    const [types, setTypes] = useState<string[]>([]);
    const [isLoadingTypes, setIsLoadingTypes] = useState(false);
    const [abilities, setAbilities] = useState<string[]>([]);
    const [isLoadingAbilities, setIsLoadingAbilities] = useState(false);
    interface PokemonResource {
        name: string;
        url: string;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);

        if (e.target.value === "has-type") {
            handleHasTypeSelect();
        }

        if (e.target.value === "has-ability") {
            handleAbilitySelect();
        }
    };

    const handleHasTypeSelect = () => {
        setIsLoadingTypes(true);
        const types: string[] = [
            "bug",
            "dark",
            "dragon",
            "electric",
            "fairy",
            "fighting",
            "fire",
            "flying",
            "ghost",
            "grass",
            "ground",
            "ice",
            "normal",
            "poison",
            "psychic",
            "rock",
            "steel",
            "water",
        ]; // Stellar not included since no pokémon has that typing naturally
        setTypes(types);
        setIsLoadingTypes(false);
    };

    const handleAbilitySelect = () => {
        if (abilities.length > 0) return;

        setIsLoadingAbilities(true);
        fetch("https://pokeapi.co/api/v2/ability?limit=1000")
            .then((res) => res.json())
            .then((data) => {
                const names = data.results.map((a: PokemonResource) => a.name);
                names.sort((a: string, b: string) => a.localeCompare(b));
                setAbilities(names);
            })
            .finally(() => setIsLoadingAbilities(false));
    };

    return (
        <div className="filter-option-root">
            <h2>Choose your filter option</h2>
            <div className="filter-options">
                <h3>Filter by:</h3>

                <input
                    type="radio"
                    id="filter-name"
                    name="filter"
                    value="name"
                    checked={radio === "name"}
                    onChange={handleChange}
                />
                <label htmlFor="filter-name">Name</label>

                <input
                    type="radio"
                    id="filter-has-type"
                    name="filter"
                    value="has-type"
                    checked={radio === "has-type"}
                    onChange={handleChange}
                />
                <label htmlFor="filter-has-type">Has a certain type</label>

                <input
                    type="radio"
                    id="filter-type-combination"
                    name="filter"
                    value="has-type-combination"
                    checked={radio === "has-type-combination"}
                    onChange={handleChange}
                />
                <label htmlFor="filter-type-combination">
                    Exact type combination
                </label>

                <input
                    type="radio"
                    id="filter-has-ability"
                    name="filter"
                    value="has-ability"
                    checked={radio === "has-ability"}
                    onChange={handleChange}
                />
                <label htmlFor="filter-has-ability">
                    Has a certain ability
                </label>
            </div>
            <div className="filterInput">
                {radio === "name" && (
                    <input
                        type="text"
                        placeholder="Type the pokémon's name..."
                        id="enter-pokemon-name"
                    ></input>
                )}

                {radio === "has-type" &&
                    (isLoadingTypes ? (
                        <p>Loading types...</p>
                    ) : (
                        <select>
                            {types.map((type) => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    ))}

                {radio === "has-type-combination" &&
                    (isLoadingTypes ? (
                        <p>Loading types...</p>
                    ) : (
                        <>
                            <select>
                                {types.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            <select>
                                <option key="none" value="none">
                                    none
                                </option>
                                {types.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </>
                    ))}

                {radio === "has-ability" &&
                    (isLoadingAbilities ? (
                        <p>Loading abilities...</p>
                    ) : (
                        <select>
                            {abilities.map((ability) => (
                                <option key={ability} value={ability}>
                                    {ability}
                                </option>
                            ))}
                        </select>
                    ))}
            </div>
        </div>
    );
}

// TODO: Add filters for generations, games, having certain moves and more things I'm probably forgetting now

export default FilterOptions;
