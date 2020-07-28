import React from 'react';
import './Variety.css'
import Card from '../../shared/components/UIElements/Card'


const Variety = props => {
  return (
    <li>
      <Card>
        <div>
          <h2>{props.name}</h2>
        </div>
      </Card>
    </li>
  )
};

export default Variety;