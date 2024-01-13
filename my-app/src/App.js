import Navbar from './Components/Navbar';
import Allroutes from './Routes/Allroutes';
import { useState } from 'react';
import Signin from './Pages/Signin';

function App() {

  const [login,setLogin] = useState(false);


  return (
    <div className="App">
      {
        login ?  <div>
        <Navbar login={login}/><Allroutes />
      </div> :<Signin login={login} setLogin={setLogin}/>
      }
    </div>
  );
}

export default App;
