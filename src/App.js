import './App.css';
import './App.css';
import legends from "./Drivers.json"


function App() {
    return (
        <div className="container">
            <h1>F1 Legende</h1>
            <div className="grid">
                {legends.map((driver) => (
                    <div className="card" key={driver.name}>
                        <img src={driver.image} alt={driver.name} />
                        <h2>{driver.name}</h2>
                        <p>Broj titula: {driver.titles}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;

