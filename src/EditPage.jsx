import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";

export function EditPage() {
  const {id} = useParams();

  const [actor, setActor] = useState(null)

  useEffect(() => {
    fetch(`https://63f733afe40e087c9589672b.mockapi.io/dashboard/${id}`, {method: "GET"})
      .then((data) => data.json())
      .then((act) => setActor(act));
  }, [id]);


  return actor ? <EditPageForm actor={actor} id={id} /> : <h2>Loading....</h2>
}


function EditPageForm({ actor, id }) {
  const [name, setName] = useState(`${actor.name}`);

  const [email, setEmail] = useState(`${actor.email}`);
  const [profession, setProfession] = useState(`${actor.profession}`);
  const [salary, setSalary] = useState(`${actor.salary}`);
  const [profile_pic, setProfile_pic] = useState(`${actor.profile_pic}`);

  const addData = () => {
    const updatedData = {
      name: name,
      email: email,
      profession: profession,
      salary: salary,
      profile_pic: profile_pic
    };

    fetch(`https://63f733afe40e087c9589672b.mockapi.io/dashboard/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers:{
        "Content-Type": "application/json",
      }
    })
  };

  return (
    <div className="add-data">
      <TextField 
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
        value={name}
      />
      <TextField
        onChange={(event) => setEmail(event.target.value)}
        label="Email"
        variant="outlined"
        value={email}
      />
      <TextField 
        onChange={(event) => setProfession(event.target.value)}
        label="Profession"
        variant="outlined"
        value={profession}
      />
      <TextField 
        onChange={(event) => setSalary(event.target.value)}
        label="Salary"
        variant="outlined"
        value={salary}
      />
      <TextField 
        onChange={(event) => setProfile_pic(event.target.value)}
        label="Poster"
        variant="outlined"
        value={profile_pic}
      />

      <Button 
        variant="contained"
        color="success"
        onClick={() => {addData()}}
        >
          Submit
      </Button>
    </div>
  );
}


