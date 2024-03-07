import React, { useState } from 'react'
import './Gallery.css';

const recipe = [
    { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-master768-v2.jpg?w=1280&q=75" },
    { id: 2, title: "Spaghetti Bolongaise", ingredients: ["Pasta", "potato", "Bacon", "Cheese"], image: "https://assets.bonappetit.com/photos/5c2f8fe26558e92c8a622671/1:1/w_2700,h_2700,c_limit/bolognese-1.jpg" },
    { id: 3, title: "Apple Pie", ingredients: ["Apple", "Sugar", "Eggs", "Cinnamon"], image: "https://www.lastingredient.com/wp-content/uploads/2018/11/caramel-apple-pie4.jpg" },
    { id: 4, title: "Pizza", ingredients: ["Dough", "Eggs", "Cheese", "Bacon"], image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg" },
    { id: 5, title: "Curry", ingredients: ["Rice", "Curry Powder", "Cheese", "Chicken"], image: "https://media.cnn.com/api/v1/images/stellar/prod/230501084147-02-steph-curry-warriors-kings-043023.jpg?c=16x9&q=h_833,w_1480,c_fill" }
  ];

const Gallery = () => {
    const [number, setNumber] = useState(0);

  return (
    <div className='Gallery'>

      <h2>{recipe[number].title}</h2>
      <ul className='recipeList'>
        <li>Ingredients:</li>
        <ul className='ingredientList'>{recipe[number].ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
        <li>{<img className='images' src={recipe[number].image} alt='recipe[number].title'></img>}</li>
        
      </ul>
      
      {/* {recipe.map(recipeItem => <li key={recipeItem.id}>{recipeItem.title}</li>)} */}

      <button className='GalleryButton' onClick={() => {
          setNumber(n => Math.max(n - 1, 0));
      }}>Back</button>

      <button className='GalleryButton' onClick={() => {
          setNumber(n => Math.min(n + 1, recipe.length - 1));
      }}>Next</button>

    </div>
  )
}

export default Gallery