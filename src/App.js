import './App.css';
import Login from './components/login/login';
import Layout from './components/layout/layout';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
         <BrowserRouter>
                <Routes>
                  <Route path="/" exact element={<Login />}></Route>
                  <Route path="/layout/*" exact element={<Layout />}></Route>
                </Routes>
          </BrowserRouter> 
      </div>
  );
}

export default App;
