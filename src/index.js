

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './components/App';
import Login from "./components/Que/login";
import Home from "./components/Que/home";
import Chapter from './components/Que/chapters'
import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="home/:quesId" element={<Home />} />
      <Route path="chapters" element={<Chapter />} />
    </Routes>
  </BrowserRouter>
);