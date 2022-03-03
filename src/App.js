import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import PlanetsTable from './components/PlanetsTable';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <FilterByName />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
