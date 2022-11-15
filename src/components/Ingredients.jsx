const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <p>Ingredientes:</p>
      <ul>
        {ingredients.map((item) => {
          return <li key={item}><i class="fa-solid fa-pizza-slice"></i>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Ingredients;
