import React from 'react';

import './Filter.css';
import Select from 'react-select';

const Filters = props => {
  return (
    <div className='wrapper'>
    <h1>Coffee</h1>
    <div className='filter-wrapper'>
      <Select
        className="element"
        value={props.filters.producing_countries}
        onChange={props.handleSelect}
        options={props.options.countryOptions}
        isMulti
        placeholder={"Country"}
        name='producing_countries'
      />
      <Select
        className="element"
        isClearable
        value={props.filters.quality_potential}
        onChange={props.handleSelect}
        options={props.options.qualityOptions}
        placeholder={"Quality"}
        name='quality_potential'
      />
      <Select
        className="element"
        isClearable
        value={props.filters.leaf_rust}
        onChange={props.handleSelect}
        options={props.options.diseaseOptions}
        placeholder={"Leaf rust"}
        name='leaf_rust'
      />
      </div>
    </div>
  );
};
export default Filters;