import React from 'react'

const recipe = [
  { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
  { id: 2, title: "Spaghetti Bolongaise", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
  { id: 3, title: "Apple Pie", ingredients: ["Apple", "Sugar", "Eggs", "Cinnamon"], image: "https://example.com/carbonara.jpg" },
  { id: 4, title: "Pizza", ingredients: ["Dough", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
  { id: 5, title: "Curry", ingredients: ["Rice", "Curry Powder", "Cheese", "Chicken"], image: "https://example.com/carbonara.jpg" }
];

// this would be the function
// const recipeList = recipe.map(list => {
  // <li key={item.id}>{item.title}</li>
// })
// 

// interface recipe {
//     id: Number;
//     title: String;
//     ingredients: string[];
//     image: URL;
// }

export const RecipeGallery = () => {
  return (
    <div>
      <ul>
        {/* You can probably do this is an external function */}
        {/* {recipeList /} */}
        {recipe.map(recipeItem => <li key={recipeItem.id}>{recipeItem.title}</li>)}
      </ul>
    </div>
  )
}
