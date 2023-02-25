import './App.css'
import { AddData } from './AddData'
import { ActorsList } from './ActorsList'
import { Routes, Route } from "react-router-dom";
import { NotFound } from './NotFound';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { DetailsPage } from './detailsPage';
import { EditPage } from './EditPage';


// https://63f733afe40e087c9589672b.mockapi.io/dashboard

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button onClick={() => navigate("/")} color="inherit" >Home</Button>
          <Button onClick={() => navigate("/add")} color="inherit" >Add Profile</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={ <ActorsList /> } />
        <Route path="/add" element={ <AddData /> }/>
        <Route path="/:id" element={ <DetailsPage /> } />
        <Route path="/edit/:id" element={ <EditPage /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

export default App


