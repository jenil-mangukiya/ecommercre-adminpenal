import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Index from './com/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import General from './com/General';
import Data from './com/Data';
import Add from './com/Add';
import Manage from './com/Manage';
import Log from './com/Log';
import Add_user from './com/Add_user';
import Manage_user from './com/Manage_user';
import Edit from './com/Edit';
import Delet from './com/Delet';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Log />} />
            <Route path="log" element={<Log />} />
            <Route path="index" element={<Index />} />
            <Route path="general" element={<General />} />
            <Route path="data" element={<Data />} />
            <Route path="add" element={<Add />} />
            <Route path="manage" element={<Manage />} />
            <Route path="add_user" element={<Add_user />} />
            <Route path="manage_user" element={<Manage_user />} />
            <Route path="edit/:id" element={<Edit />} />
            <Route path="delet/:id" element={<Delet />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
