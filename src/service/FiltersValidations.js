const filtersValidations = ({ planets, filterByName, filterByNumericValues }) => {
  // filtro pelo nome do planeta digitado
  let filteredPlanets = planets
    .filter((planetByName) => planetByName.name.toLowerCase()
      .includes(filterByName.name.toLowerCase()));

  // filtros numéricos
  filterByNumericValues.forEach(({ column, comparison, value }) => {
    if (comparison === 'maior que') {
      filteredPlanets = filteredPlanets
        .filter((planet) => Number(planet[column]) > Number(value));
    }
    if (comparison === 'menor que') {
      filteredPlanets = filteredPlanets
        .filter((planet) => Number(planet[column]) < Number(value));
    }
    if (comparison === 'igual a') {
      filteredPlanets = filteredPlanets
        .filter((planet) => Number(planet[column]) === Number(value));
    }
  });

  return filteredPlanets;
};

export default filtersValidations;
