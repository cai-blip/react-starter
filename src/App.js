import "./App.css";

function App() {
  return (
    <div
      style={{
        margin: "3vh auto",
        width: "88vw",
        height: "88vh",
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
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>yo</td>
            <td>yo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
