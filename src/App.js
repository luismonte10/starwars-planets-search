import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import NumericFilters from './components/NumericFilters';
import PlanetsTable from './components/PlanetsTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <NumericFilters />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
