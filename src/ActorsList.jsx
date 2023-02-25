import { useState, useEffect } from 'react';
import { Profile } from './Profile';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export function ActorsList() {

  const [actorsList, setActorsList] = useState([]);

  const getLists = () => {
    fetch("https://63f733afe40e087c9589672b.mockapi.io/dashboard", { method: "GET" })
      .then((data) => data.json())
      .then((act) => setActorsList(act));
  };

  useEffect(() => getLists(), []);

  const deleteProfile = (id) => {
    console.log("Deleting Actor", id)
    fetch(`https://63f733afe40e087c9589672b.mockapi.io/dashboard/${id}`, {method: "DELETE"})
      .then(() => getLists())
  };

  const navigate = useNavigate();

  return (
    <div className='actors'>
      {actorsList.map((act) => (
        <Profile 
          key={act.id} 
          actor={act} 
          id={act.id} 
          deleteButton={
            <IconButton 
              sx={{ marginLeft:"auto" }}
              color="error"
              onClick={() => {deleteProfile(act.id)}}>
              <DeleteIcon />
            </IconButton>}
          editButton = {
          <IconButton
            sx={{ marginLeft:"auto" }}
            color="secondary"
            onClick={() => {navigate(`/edit/${act.id}`)}}
            >
            <EditIcon/>
          </IconButton>
          }
          />))}
    </div>
  );
}
