import { useState } from "react";
import "./App.css";
import { desktopApi } from "@octostar/platform-api";
import { Entity } from "@octostar/platform-types";

function App() {
  const [entities, setEntities] = useState<Entity[]>([]);

  return (
    <>
      <h1>WELCOME TO THE OCTOSTAR</h1>
      <div className="card">
        <button
          onClick={() => desktopApi().searchXperience().then(setEntities)}
        >
          searchXperience
        </button>
        <ul>
          {entities.map((e) => (
            <li key={e.entity_id}>{e.entity_label}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
