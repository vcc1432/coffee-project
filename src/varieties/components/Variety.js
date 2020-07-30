import React, {
  useState
} from 'react';
import './Variety.css'
import Card from '../../shared/components/UIElements/Card'


const Variety = props => {
  const [ showDetails, setShowDetails] = useState(false);
  const openDetailsHandler = () => setShowDetails(true);
  const closeDetailsHandler = () => setShowDetails(false);
 
  return (
    <React.Fragment>
    <li className="variety-item">
      <Card className="variety-item__content">
        <div onClick={openDetailsHandler}>
          <h2>{props.name}</h2>
          <p>{props.description}</p>

        </div>
      </Card>
    </li>
    </React.Fragment>
  )
};

export default Variety;