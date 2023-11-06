import { useSearchParams } from "react-router-dom";
import "./styles.css";

const Laptops = [
  { name: "HP ProBook", inStock: true },
  { name: "ASUS VivoBook", inStock: false },
  { name: "Dell Vostro", inStock: true },
  { name: "Lenovo ThinkPad", inStock: false },
  { name: "Acer TravelMate", inStock: true },
  { name: "Walton Passion", inStock: false },
];

export default function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    query: "",
    inStock: "",
  });

  const query = searchParams.get("query") || "";
  const inStock = searchParams.get("inStock") === "true";

  const filteredLaptops = Laptops.filter((item) => {
    const itemMatchesSearch = item.name
      .toLowerCase()
      .includes(query.toLowerCase());

    return inStock ? itemMatchesSearch && item.inStock : itemMatchesSearch;
  });

  const handleSearchInputChange = (e) => {
    setSearchParams((prev) => {
      prev.set("query", e.target.value);
      return prev;
    });
  };

  const handleInStockCheckboxChange = (e) => {
    setSearchParams((prev) => {
      prev.set("inStock", e.target.checked);
      return prev;
    });
  };

  return (
    <div className="App">
      <h1>Laptop Shop</h1>

      <div>
        <span>Search: </span>
        <input
          className="search-box"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleSearchInputChange}
        />
      </div>
      <div>
        <input
          type="checkbox"
          checked={inStock}
          onChange={handleInStockCheckboxChange}
        />
        <span>In Stock</span>
      </div>

      <ul>
        {filteredLaptops.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
