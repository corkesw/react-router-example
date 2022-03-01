export const fetchPlanets = () => {
  return fetch("https://space-facts.herokuapp.com/api/planets").then((res) =>
    res.json()
  );
};
