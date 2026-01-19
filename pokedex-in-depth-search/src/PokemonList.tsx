import "./PokemonList.css";
import React, { useState, useEffect } from "react";
import type { FilterState, PokemonSlot, PokemonApiResponse } from "./types";

interface PokemonData {
    name: string;
    types: string[];
    abilities: string[];
}

interface Props {
    activeFilter: FilterState;
}

function PokemonList({ activeFilter }: Props) {
    const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Se não tiver filtro selecionado ou valor vazio, não busca nada (ou busca todos)
        if (activeFilter.type === "none" || !activeFilter.value) {
            return;
        }

        const fetchPokemon = async () => {
            setIsLoading(true);
            setPokemonList([]); // Limpa a lista anterior

            try {
                let urlsToFetch: string[] = [];

                if (activeFilter.type === "name") {
                    urlsToFetch = [
                        `https://pokeapi.co/api/v2/pokemon/${activeFilter.value.toLowerCase()}`,
                    ];
                }

                // ESTRATÉGIA 2: Buscar por Tipo (Retorna lista de referências)
                else if (activeFilter.type === "has-type") {
                    // Nota: no seu types.tsx está "type", no FilterOptions verifique se bate o value
                    const res = await fetch(
                        `https://pokeapi.co/api/v2/type/${activeFilter.value}`
                    );
                    const data = await res.json();
                    // A API retorna objetos { pokemon: { name, url } }
                    // Vamos pegar apenas os primeiros 20 para não travar o navegador fazendo 100 requests de uma vez
                    urlsToFetch = data.pokemon
                        .slice(0, 20)
                        .map((p: PokemonSlot) => p.pokemon.url);
                }

                // ESTRATÉGIA 3: Buscar por Habilidade
                else if (activeFilter.type === "has-ability") {
                    const res = await fetch(
                        `https://pokeapi.co/api/v2/ability/${activeFilter.value}`
                    );
                    const data = await res.json();
                    urlsToFetch = data.pokemon
                        .slice(0, 20)
                        .map((p: PokemonSlot) => p.pokemon.url);
                }

                // AGORA: Fazemos o fetch dos DETALHES de cada URL encontrada
                // Isso é necessário porque a busca por tipo/habilidade não retorna os stats, só o nome.
                const detailsPromises = urlsToFetch.map((url) =>
                    fetch(url).then((r) => r.json())
                );
                const detailsRaw = await Promise.all(detailsPromises);

                // Formatamos para o nosso Estado
                const formattedData: PokemonData[] = detailsRaw.map(
                    (data: PokemonApiResponse) => ({
                        name: data.name,
                        types: data.types.map((t) => t.type.name),
                        abilities: data.abilities.map(
                            (a) => a.ability.name
                        ),
                    })
                );

                setPokemonList(formattedData);
            } catch (error) {
                console.error("Erro ao buscar pokémon:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemon();
    }, [activeFilter]); // Roda sempre que o filtro mudar

    return (
        <div className="pokemon-table">
            {isLoading && <p>Carregando Pokémons...</p>}

            {!isLoading && pokemonList.length === 0 && activeFilter.value && (
                <p>Nenhum Pokémon encontrado.</p>
            )}

            {!isLoading && pokemonList.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Types</th>
                            <th>Abilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemonList.map((poke) => (
                            <tr key={poke.name}>
                                <td style={{ textTransform: "capitalize" }}>
                                    {poke.name}
                                </td>
                                <td>{poke.types.join(", ")}</td>
                                <td>{poke.abilities.join(", ")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default PokemonList;
