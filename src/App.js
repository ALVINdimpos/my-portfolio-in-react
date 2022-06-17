import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./component/NavBar";
import About from "./components/About";
import Service from './components/Services';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Resume from "./components/Resume";
import TodoAPP from "./components/TodoApp"




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
          <Route path='home' element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="resume" element ={<Resume/>}/>
            <Route path="contact" element={<Contact />} />
            <Route path="TodoApp" element={<TodoAPP />} />

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);