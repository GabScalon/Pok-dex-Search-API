import "./App.css";
import "./FilterOptions";
import FilterOptions from "./FilterOptions";
import PokemonList from "./PokemonList";
import Footer from "./Footer";
import type { FilterState } from "./types";

function App() {
    const [currentFilter, setCurrentFilter] = useState<FilterState>({
        type: "none",
        value: "",
    });

    const handleFilterChange = (type: FilterState, value: string) => {
        setCurrentFilter({ type, value });
    };

    return (
        <>
            <div className="main-title">
                <h1>Pokédex search</h1>
            </div>
            <div className="main-body">
                <FilterOptions
                    onFilterChange={handleFilterChange}
                ></FilterOptions>
                <PokemonList activeFilter={currentFilter}></PokemonList>
            </div>
            <div className="main-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default App;
