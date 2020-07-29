import React from 'react';

const Filters = props => {
  return (
    <div className='filter-wrapper'>
      <select multiple className='filter-select' name='producing_countries' value={props.filters.producing_countries} onChange={props.handleSelect}>
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

      <select className='filter-select' name='quality_potential' value={props.filters.quality_potential} onChange={props.handleSelect}>
        <option value=''>Search by Quality</option>
        <option value='EXCEPTIONAL'>EXCEPTIONAL</option>
        <option value='VERY_GOOD'>VERY_GOOD</option>
        <option value='GOOD'>GOOD</option>
        <option value='LOW'>LOW</option>
        <option value='VERY_LOW'>VERY_LOW</option>
      </select>

      <select className='filter-select' name='leaf_rust' value={props.filters.leaf_rust} onChange={props.handleSelect}>
        <option value=''>Search by leaf rust resistance</option>    
        <option value='RESISTANT'>RESISTANT</option>
        <option value='TOLERANT'>TOLERANT</option>
        <option value='SUSCEPTIBLE'>SUSCEPTIBLE</option>
      </select>
    </div>
  );
};
export default Filters;