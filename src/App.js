import "./styles.css";

export default function App() {
  const [serachParams, setSearchParams] = useSeaechparams();

  return (
    <div className="App">
      <h1>Electronic shop</h1>

      <div>
        <span> Search: </span>
        <input className="search-box" type="text" placeholder="Search..." />
      </div>
      <div>
        <input type="checkbox" />
        <span> Mobile Item </span>
      </div>

      <ul>
        <li>Mobile</li>
        <li>Headephone</li>
        <li>Charger</li>
        <li>Watch </li>
        <li>Table Lamp </li>
        <li> Fan </li>
      </ul>
    </div>
  );
}
