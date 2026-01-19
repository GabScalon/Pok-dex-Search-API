export interface FilterState {
    type: "name" | "type" | "ability" | "type-combination" | "none";
    value: string;
}

export interface FilterRequest {
    type: FilterState["type"];
    value: string;
}
