import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function DetailsPage() {

  const {id} = useParams();

  const [actor, setActor] = useState([])

  useEffect(() => {
    fetch(`https://63f733afe40e087c9589672b.mockapi.io/dashboard/${id}`)
      .then((data) => data.json())
      .then((act) => setActor(act));
  }, [id]);

  console.log(actor)

  return (
    <div>
      <div className="details-container">
        <img src={actor.profile_pic} alt={actor.name}/>
        <h2 className='actor-name'>
          {actor.name}
        </h2>
        <p>{actor.profession}</p>
        <p>{actor.email}</p>
        <p>{actor.salary}</p>
      </div>
    </div>
  );
}
