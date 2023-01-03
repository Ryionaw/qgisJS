import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
// import MapGenerated from "./pages/MapGenerated";
import MapGenerated2 from "./pages/MapGenerated2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/map">Map</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/map" element={<MapGenerated />} /> */}
          <Route path="/map2" element={<MapGenerated2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
