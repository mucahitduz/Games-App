import {BrowserRouter, Routes, Route} from "react-router-dom"
import Detail from './pages/GameDetail/Detail';
import Home from './pages/Home/Home';
import "./styles/GlobalStyles.css"

const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/game/:id' element={<Detail  />} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
