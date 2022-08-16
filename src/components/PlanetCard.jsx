export default function PlanetCard({ planetName, type, auFromSun }) {
  return (
    <article className="planet">
      <h3 className="planet__name">{planetName}</h3>
      <p className="planet__detail">type: {type}</p>
      <p className="planet__detail">distance from sun: {auFromSun} AU</p>
    </article>
  );
}
