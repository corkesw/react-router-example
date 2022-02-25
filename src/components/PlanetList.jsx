import { useState } from "react";
import PlanetCard from "./PlanetCard";

export default function PlanetList() {
  const [planets, setPlanets] = useState([
    {
      planet_id: 1,
      planet_name: "planet a",
      au_from_sun: "1",
      type: "gas",
      moon_count: "0",
    },
    {
      planet_id: 2,
      planet_name: "planet b",
      au_from_sun: "2",
      type: "rock",
      moon_count: "4",
    },
  ]);
  return (
    <section>
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
