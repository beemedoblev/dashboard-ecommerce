import SideBar from "./components/sidebar/SideBar";
import Topbar from "./components/topbar/TopBar";
import './app.css'

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className='container'>
        <SideBar/>
        <div className="others">otra pagina</div>
      </div>
    </div>
  );
}

export default App;
