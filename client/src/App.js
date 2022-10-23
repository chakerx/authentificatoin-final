
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //bach ya9rahomli
import TheNavbar from './Components/TheNavbar';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProfilPage from './Pages/ProfilPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
   <Router>
   <TheNavbar/>                                                  {/*   bach to5rej dema */}
    <Routes>
      <Route   path='/register'      element={<RegisterPage/>}/>            {/* ki tabda index fi louwel bach t5rejli el page heki lawla */}
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/profilpage' element={<ProfilPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;
