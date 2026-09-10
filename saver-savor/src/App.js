import React, { useState } from 'react';

export default function App() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const search = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=3&apiKey=e1df7b84b3154af0bdbfae3bfeb62482`);
    setRecipes(await res.json());
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={search}>
        <input value={ingredient} onChange={(e) => setIngredient(e.target.value)} placeholder="ingredient" />
        <button>Search</button>
      </form>
      {recipes.map(r => <div key={r.id}><h3>{r.title}</h3><img src={r.image} width="150" alt="" /></div>)}
    </div>
  );
}