import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import History from "./pages/History";
import Materials from "./pages/Materials";
import Vocab from "./pages/Vocab";


import './styles.css';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<History/>} />
          <Route path="History" element={<History/>} />
          <Route path="Materials" element={<Materials/>} />
          <Route path="Vocab" element={<Vocab/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));