import React from 'react';
import './Variety.css'
import Card from '../../shared/components/UIElements/Card'


const Variety = props => {
  return (
    <li className="variety-item">
      <Card className="variety-item__content">
        <div>
          <h2>{props.name}</h2>
        </div>
      </Card>
    </li>
  )
};

export default Variety;