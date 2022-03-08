import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchPlanetsAPI from '../service/fetchPlanetsAPI';

function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  const [filterByName, setFilterByName] = useState({
    name: '',
  });

  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const fetchAPI = await fetchPlanetsAPI();
      setPlanets(fetchAPI);
    };

    getPlanets();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        planets,
        filterByName,
        setFilterByName,
        filterByNumericValues,
        setFilterByNumericValues,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default PlanetsProvider;
