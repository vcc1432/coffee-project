import React from 'react';

import './Filter.css';

const Filters = props => {
  return (
    <div className='filter-wrapper center'>
    <h1>Filters: </h1>
      <select multiple className='element filter-select' name='producing_countries' value={props.filters.producing_countries} onChange={props.handleSelect}>
        <option value='Kenya'>Kenya</option>
        <option value='Burundi'>Burundi</option>
        <option value='Colombia'>Colombia</option>
        <option value='Costa Rica'>Costa Rica</option>
        <option value='Ethiopia'>Ethiopia</option>
        <option value='Honduras'>Honduras</option>
        <option value='Indonesia'>Indonesia</option>
        <option value='Mexico'>Mexico</option>
        <option value='Panama'>Panama</option>
        <option value='Papua New Guinea'>Papua New Guinea</option>
        <option value='Rwanda'>Rwanda</option>
        <option value='Tanzania'>Tanzania</option>
        <option value='Thailand'>Thailand</option>
        <option value='Vietnam'>Vietnam</option>
        <option value='Brazil'>Brazil</option>
        <option value='Peru'>Peru</option>
      </select>

      <select className='element filter-select' name='quality_potential' value={props.filters.quality_potential} onChange={props.handleSelect}>
        <option value=''>Search by Quality</option>
        <option value='EXCEPTIONAL'>Exceptional</option>
        <option value='VERY_GOOD'>Very good</option>
        <option value='GOOD'>Good</option>
        <option value='LOW'>Low</option>
        <option value='VERY_LOW'>Very low</option>
      </select>

      <select className='element filter-select' name='leaf_rust' value={props.filters.leaf_rust} onChange={props.handleSelect}>
        <option value=''>Search by leaf rust resistance</option>    
        <option value='RESISTANT'>Resistant</option>
        <option value='TOLERANT'>Tolerant</option>
        <option value='SUSCEPTIBLE'>Susceptible</option>
      </select>

      <div className='element clear' onClick={props.handleClearFilters}><p>Clear Filters</p></div>
    </div>
  );
};
export default Filters;