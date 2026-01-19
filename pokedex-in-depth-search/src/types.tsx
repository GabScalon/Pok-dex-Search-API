export interface FilterState {
    type: "name" | "has-type" | "has-ability" | "has-type-combination" | "none";
    value: string;
}

export type FilterType = FilterState["type"];

export interface FilterRequest {
    type: FilterState["type"];
    value: string;
}

export interface PokemonResource {
    name: string;
    url: string;
}

export interface PokemonSlot {
    pokemon: PokemonResource;
    slot: number;
    is_hidden?: boolean;
}

export interface PokemonApiResponse {
    name: string;
    types: {
        slot: number;
        type: {
            name: string;
            url: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;
    }[];
}
