import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";

export function AddData() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [salary, setSalary] = useState("");
  const [profile_pic, setProfile_pic] = useState("");

  const addData = () => {
    const newData = {
      name: name,
      email: email,
      profession: profession,
      salary: salary,
      profile_pic: profile_pic
    };
    // console.log(newData)

    fetch("https://63f733afe40e087c9589672b.mockapi.io/dashboard", {
      method: "POST",
      body: JSON.stringify(newData),
      headers:{
        "Content-Type": "application/json",
      }
    })
  };

  return (
    <div className="add-data">
      <TextField 
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField 
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField 
        id="outlined-basic"
        label="Profession"
        variant="outlined"
        onChange={(event) => setProfession(event.target.value)}
      />
      <TextField 
        id="outlined-basic"
        label="Salary"
        variant="outlined"
        onChange={(event) => setSalary(event.target.value)}
      />
      <TextField 
        id="outlined-basic"
        label="Poster"
        variant="outlined"
        onChange={(event) => setProfile_pic(event.target.value)}
      />
        <Button 
          variant="contained"
          onClick={addData}
          >
            Add Profile
        </Button>
    </div>
  );
}
