import "./App.css";
import "./FilterOptions";
import FilterOptions from "./FilterOptions";

function App() {
    return (
        <>
            <div className="main-title">
                <h1>Pokédex search</h1>
            </div>
            <div className="main-body">
                <FilterOptions></FilterOptions>
            </div>
        </>
    );
}

export default App;
