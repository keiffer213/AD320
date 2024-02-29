import React, { useState } from 'react'

const recipe = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
    { id: 2, title: "Spaghetti Bolongaise", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
    { id: 3, title: "Apple Pie", ingredients: ["Apple", "Sugar", "Eggs", "Cinnamon"], image: "https://example.com/carbonara.jpg" },
    { id: 4, title: "Pizza", ingredients: ["Dough", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
    { id: 5, title: "Curry", ingredients: ["Rice", "Curry Powder", "Cheese", "Chicken"], image: "https://example.com/carbonara.jpg" }
  ];

const Gallery = () => {
    const [number, setNumber] = useState(0);

  return (
    <div>

    <h2>{recipe[number].title}</h2>
    <ul>
        {/* {recipe[number].map(item => <li>item}</li>)} */}
    </ul>
    
    {/* {recipe.map(recipeItem => <li key={recipeItem.id}>{recipeItem.title}</li>)} */}

    <button onClick={() => {
        setNumber(n => n - 1);
    }}>Back</button>

    <button onClick={() => {
        setNumber(n => n + 1);
    }}>Next</button>

    </div>
  )
}

export default Gallery