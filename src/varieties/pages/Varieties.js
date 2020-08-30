import React, {
  useEffect,
  useState
} from 'react';
import VarietiesList from '../components/VarietiesList';
import Filters from '../../shared/components/FormElements/Filter'

import {
  useHttpClient
} from '../../shared/hooks/http-hook';

const Varieties = () => {
  const [loadedVarieties, setLoadedVarieties] = useState();
  const [varieties, setVarieties] = useState();
  const [filters, setFilters] = useState({
    producing_countries: [],
    quality_potential: '',
    leaf_rust: ''
  });
  const [options, setOptions] = useState();
  
  const {
    isLoading,
    sendRequest
  } = useHttpClient();

  useEffect(() => {
    const fetchVarieties = async () => {
      try {
        const responseData = await sendRequest('https://coffee-varieties.now.sh/api');

        let rawOptions = responseData.map(({ producing_countries, quality_potential, disease_resistance }) => {
          let leaf_rust;
          for (let i = 0; i < disease_resistance.length; i++) {
            const element = disease_resistance[i];
            if (element.leaf_rust) {
              leaf_rust = element.leaf_rust;
            }
          }
          return {producing_countries, quality_potential, leaf_rust }
        });

        let flatCountriesArray = rawOptions.map(option => option.producing_countries).flat();
        let qualityArray = rawOptions.map(option => option.quality_potential);
        let diseaseArray = rawOptions.map(option => option.leaf_rust);
   
        let qualityOptions = getOptionsFromArray(qualityArray);
        let countryOptions = getOptionsFromArray(flatCountriesArray);
        let diseaseOptions = getOptionsFromArray(diseaseArray);

        let options = {
          qualityOptions: qualityOptions,
          countryOptions: countryOptions,
          diseaseOptions: diseaseOptions
        }
        
        setOptions(options);
        setLoadedVarieties(responseData);
        setVarieties(responseData);
      } catch (err) {}
    };
    fetchVarieties();
  }, [sendRequest]);

  const handleSelect = (value, action) => {
    let newFilters;
    newFilters = {
      ...filters,
      [action.name]: value
    };

    setFilters(newFilters);
    filterVarieties(newFilters);
    
  };

  const getOptionsFromArray = (optionsArray) => {
    let result = [...new Set(optionsArray)];
    let options = result.map(item => {
      return {value: item, label: item.replace(/_/g, ' ').toLowerCase().split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ')};
    });
    return options;

  }

  const filterVarieties = (newFilters) => {
    const filteredVarieties = loadedVarieties.filter(item => {
      let quality =
        newFilters.quality_potential && newFilters.quality_potential !== "" ?
        item.quality_potential.toLowerCase() === newFilters.quality_potential.value.toLowerCase() :
        true;
      let leafRust =
        newFilters.leaf_rust && newFilters.leaf_rust !== "" ?
        item.disease_resistance.find(disease => {
          return disease.leaf_rust && (disease.leaf_rust.toLowerCase() === newFilters.leaf_rust.value.toLowerCase());
        }) :
        true;
      let countries =
        newFilters.producing_countries && newFilters.producing_countries.length > 0 ?
        newFilters.producing_countries.some(country => {
          return country && item.producing_countries.includes(country.value);
        }) :
        true;
      return quality && leafRust && countries;
    })
    setVarieties(filteredVarieties);
  }

  return (
		<React.Fragment>
			{isLoading && (
				<div className="center">
					Loading...
				</div>
			)}
      {!isLoading && varieties && <Filters   
        options={options}
				filters={filters}
        handleSelect={handleSelect}
      />}
      {!isLoading && varieties && <VarietiesList items={varieties} />}
		</React.Fragment>
	)
};

export default Varieties;