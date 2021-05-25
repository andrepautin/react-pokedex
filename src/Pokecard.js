import "./Pokecard.css";

const BASE_IMG_SRC = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Function takes in pokemon props
 *  renders single Pokemon with name, image, type
*/
function Pokecard(props) {
  const {name, type, id} = props;
  return (
    <div className="Pokecard">
      <p>{name}</p>
      <img src={`${BASE_IMG_SRC}${id}.png`} />
      <p>Type: {type}</p>
    </div>
  );
}

export default Pokecard;