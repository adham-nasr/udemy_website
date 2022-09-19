//import './App.css';
import Sectioncard from './Components/Sectioncard';
import Req from './Components/Req';
import {Route,Routes,Link} from 'react-router-dom';
import Home from './Components/Home'
import Coursepage from './Components/Coursepage';

function App() {
  return (
    <div className="App">
        <Link to="/page"> JI</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page" element={<Coursepage />} />
        </Routes>

    </div>
  );
}

export default App;