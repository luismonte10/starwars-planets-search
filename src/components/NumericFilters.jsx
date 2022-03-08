import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function NumericFilters() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(PlanetsContext);

  const [filterInfos, setFilterInfos] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  let options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const opitionsValidation = () => {
    if (filterByNumericValues.length !== 0) {
      filterByNumericValues.forEach((numericFilter) => {
        options = options.filter((option) => (
          option !== numericFilter.column
        ));
      });
    }

    return options;
  };

  return (
    <form>

      <label htmlFor="column-filter">
        <select
          data-testid="column-filter"
          id="column-filter"
          value={ filterInfos.column }
          onChange={
            ({ target }) => setFilterInfos({ ...filterInfos, column: target.value })
          }
        >
          {
            opitionsValidation().map((columnOption) => (
              <option key={ columnOption } value={ columnOption }>{columnOption}</option>
            ))
          }
          {/* <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option> */}
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <select
          data-testid="comparison-filter"
          id="comparison-filter"
          value={ filterInfos.comparison }
          onChange={
            ({ target }) => setFilterInfos({ ...filterInfos, comparison: target.value })
          }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <input
          type="number"
          data-testid="value-filter"
          id="value-filter"
          value={ filterInfos.value }
          onChange={
            ({ target }) => setFilterInfos({ ...filterInfos, value: target.value })
          }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        id="button-filter"
        onClick={ () => setFilterByNumericValues([...filterByNumericValues, {
          column: filterInfos.column,
          comparison: filterInfos.comparison,
          value: filterInfos.value,
        }]) }
      >
        FILTRAR
      </button>

    </form>
  );
}

export default NumericFilters;
