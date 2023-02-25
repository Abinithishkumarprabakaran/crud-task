import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

export function Profile({ id, actor, deleteButton, editButton }) {

  const navigate = useNavigate();

  return (
    <div className="profile-container">
      <Card>
        <CardMedia className='profile-pic' image={actor.profile_pic} title={actor.name} />
          <CardContent>
            <div className='profile-content'>
              <h2>{actor.name}</h2>
              <IconButton
                sx ={{paddingTop:0}}
                color="primary"
                onClick={() => navigate(`/${id}`)}
                aria-label="Movie Details">
                    <InfoIcon />
              </IconButton>
            </div>
            <h4>{actor.profession}</h4>
            <CardActions>
              {editButton} {deleteButton}
            </CardActions>
          </CardContent>
      </Card>
    </div>
  );
}
