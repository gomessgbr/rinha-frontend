import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
   <div class="container">
        <h1>JSON Tree Viewer</h1>
        <span
          >Simple JSON Viewer that runs completely on-client. No data exchange
        </span>
        <form id="inputJson">
          <label class="fileLabel">
            Load JSON
            <input
              type="file"
              name="inputJson"
              id="inputJson"
              accept="application/json"
            />
          </label>
        </form>
        <span class="errorJson" id="errorJson"
          >Invalid file. Please load a valid JSON file.</span
        >
      </div>
`;

setupCounter(document.querySelector("#counter"));
