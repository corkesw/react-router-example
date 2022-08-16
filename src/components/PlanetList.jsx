import { useEffect, useState } from "react";
import PlanetCard from "./PlanetCard";
import * as api from "../api";

export default function PlanetList() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.fetchPlanets().then(({ planets }) => {
      setPlanets(planets);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>loading..</p>;
  return (
    <section className="planet-list">
      {planets.map(({ planet_id, planet_name, type, au_from_sun }) => {
        return (
          <PlanetCard
            key={planet_id}
            planetName={planet_name}
            type={type}
            auFromSun={au_from_sun}
          />
        );
      })}
    </section>
  );
}
