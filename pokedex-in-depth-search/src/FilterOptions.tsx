import React, { useState } from "react";

function FilterOptions() {
    const [radio, setRadio] = useState("name");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value);
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
                    value="type-combination"
                    checked={radio === "type-combination"}
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
        </div>
    );
}

export default FilterOptions;
