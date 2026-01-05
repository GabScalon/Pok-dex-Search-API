import "./App.css";
import "./FilterOptions";
import FilterOptions from "./FilterOptions";
import PokemonList from "./PokemonList";

function App() {
    return (
        <>
            <div className="main-title">
                <h1>Pokédex search</h1>
            </div>
            <div className="main-body">
                <FilterOptions></FilterOptions>
                <PokemonList></PokemonList>
            </div>
        </>
    );
}

export default App;
