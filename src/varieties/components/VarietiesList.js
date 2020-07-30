import React from 'react';

import Variety from './Variety'
import Card from '../../shared/components/UIElements/Card'
import './VarietiesList.css';


const VarietiesList = props => {
  if (props.items.length === 0) {
    return <div className="center">
      <Card>
        <h2> No coffee varieties found.</h2>
      </Card>
    </div>
  }

  return (
    <ul className="varieties-list">
      {props.items.map(variety => (
        <Variety 
          key={variety.name} 
          name={variety.name}
          description={variety.description}
          quality={variety.quality_potential}
        />
      ))}
    </ul>
  );
};

export default VarietiesList;