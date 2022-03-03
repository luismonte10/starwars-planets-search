import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterByName() {
  const { filterByName, setFilterByName } = useContext(PlanetsContext);
  return (
    <label htmlFor="name-filter">
      Search by name:
      <input
        type="text"
        id="name-filter"
        data-testid="name-filter"
        value={ filterByName.name }
        onChange={ ({ target }) => setFilterByName({ name: target.value }) }
      />
    </label>
  );
}

export default FilterByName;
