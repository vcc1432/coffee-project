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
    const {
      isLoading,
      error,
      sendRequest,
      clearError
    } = useHttpClient();

    useEffect(() => {
      const fetchVarieties = async () => {
        try {
          const responseData = await sendRequest('https://coffee-varieties.now.sh/api');
          setLoadedVarieties(responseData);
          setVarieties(responseData);
        } catch (err) {}
      };
      fetchVarieties();
    }, [sendRequest]);


    const handleSelect = (event) => {
      let newFilters;
      if (event.target.name === 'producing_countries') {
        let selectedCountries = [];
        [...event.target.options].filter(option => option.selected).map(option => selectedCountries.push(option.value));
        newFilters = {
          ...filters,
          [event.target.name]: selectedCountries
        };
      } else {
        newFilters = {
          ...filters,
          [event.target.name]: event.target.value
        };
      }

      setFilters(newFilters);

      const filteredVarieties = loadedVarieties.filter(item => {
        let quality =
          newFilters.quality_potential !== "" ?
          item.quality_potential.toLowerCase() === newFilters.quality_potential.toLowerCase() :
          true;
        let leafRust =
          newFilters.leaf_rust !== "" ?
          item.disease_resistance.find(disease => {
            return disease.leaf_rust && (disease.leaf_rust.toLowerCase() === newFilters.leaf_rust.toLowerCase());
          }) :
          true;
        let countries =
          newFilters.producing_countries.length > 0 ?
          newFilters.producing_countries.every(country => {
            return country && item.producing_countries.includes(country);
          }) :
          true;
        return quality && leafRust && countries;
      })
      setVarieties(filteredVarieties);


    };

    return ( <
        React.Fragment >
        <
        div error = {
          error
        }
        onClear = {
          clearError
        }
        /> {
          isLoading && ( <
            div className = "center" >
            Loading...
            <
            /div>
          )
        } {
          !isLoading && varieties && < Filters
          filters = {
            filters
          }
          handleSelect = {
            handleSelect
          }
          />} {
            !isLoading && varieties && < VarietiesList items = {
              varieties
            }
            />} <
            /React.Fragment>
          );
        };

        export default Varieties;