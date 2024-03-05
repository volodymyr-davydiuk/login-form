import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import LoginPage from './components/pages/loginPage';
import ForgotPassPage from './components/pages/forgotPassPage';
import CreateNewPassPage from './components/pages/createNewPassPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route path={'/login/'} element={<LoginPage/>}/>
        <Route path={'/forgot-pass/'} element={<ForgotPassPage/>}/>
        <Route path={'/create-new-pass/'} element={<CreateNewPassPage/>}/>
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
