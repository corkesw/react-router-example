export default function PlanetCard({ planetName, type, auFromSun }) {
  return (
    <article>
      <h3>{planetName}</h3>
      <p>type: {type}</p>
      <p>distance from sun: {auFromSun} AU</p>
    </article>
  );
}
