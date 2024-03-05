import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        {/*<Route path={'/tabs/:id/'} element={<Table/>}/>*/}
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
