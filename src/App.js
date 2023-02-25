import "./App.css";
import pokemon from "./data/pokemon.json";

function App() {
  return (
    <div
      style={{
        margin: "3vh auto",
        width: "88vw",
        background: "#e8e8e8",
        padding: 16,
      }}
    >
      <h1 className="title">
        pokemon <span style={{ color: "rebeccapurple" }}>search</span>
      </h1>

      <table width={500}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemon.slice(0, 20).map((pokemon) => (
            <tr key={pokemon.id}>
              <td>{pokemon.id}</td>
              <td>
                {pokemon.name.english}
                <br />
                {pokemon.name.french}
                <br />
                {pokemon.name.chinese}
                <br />
                {pokemon.name.japanese}
              </td>
              <td>{pokemon.type.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
