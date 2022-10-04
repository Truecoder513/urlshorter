import UrlShortener from "./pages/UrlShortener";
import "./styles/default.css";
import "./styles/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Redirec from "./pages/Redirec";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UrlShortener />} />
          <Route path="/:urlId" element={<Redirec />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
