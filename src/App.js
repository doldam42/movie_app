import react from "react";
import PropTypes from "prop-types";

function Food({ name , rating}) {
	return (
	<div>
	<h1>I like to eat {name}!</h1>
	<h3>{rating}/5</h3>
	</div>
	);
	
}

Food.propTypes = {
	name: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
}
const foodILike = [
	{id:1, name: "kimchi", rating:5},
	{id:2, name: "ramen", rating:4.2},
	{id:3, name: "pasta", rating: 3.8},
	{id:4, name: "gookbab", rating:4.9},
];

function App() {
  return (
    <div>
	{foodILike.map(dish =><Food key={dish.id} name={dish.name} rating={dish.rating} />)}
	</div>
  );
}

export default App;
