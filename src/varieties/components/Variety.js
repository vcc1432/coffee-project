import React, {
  useState
} from 'react';
import './Variety.css'
import Card from '../../shared/components/UIElements/Card';
import { NavLink } from 'react-router-dom';


const Variety = props => {
  const [ showDetails, setShowDetails] = useState(false);
  const openDetailsHandler = () => setShowDetails(true);
  const closeDetailsHandler = () => setShowDetails(false);
 
  return (
    <React.Fragment>
    <li className="variety-item">
   
      <Card className="variety-item__content">
      <NavLink to={`/${props.name}`}>
        <div onClick={openDetailsHandler}>
          <h2>{props.name}</h2>
          <hr/>
          <p>{props.description}</p>
          <hr/>
          <p>Quality: {props.quality.replace(/_/g, ' ').toLowerCase()}</p>
        </div>
        </NavLink>
      </Card>
     
    </li>
    </React.Fragment>
  )
};

export default Variety;