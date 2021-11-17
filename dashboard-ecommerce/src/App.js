import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/TopBar";
import './app.css'
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='container'>
        <SideBar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
