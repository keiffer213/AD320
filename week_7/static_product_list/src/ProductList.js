import React from 'react'

const products = [
    { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 },
    { id: 2, name: "Airpod Max", description: "High-style for people.", price: 605 },
    { id: 3, name: "Desktop", description: "High-performance desktop for gamers.", price: 3200 },
    { id: 4, name: "Monitor", description: "High-performance monitor for professionals.", price: 503 },
    { id: 5, name: "Headphones", description: "High-performance headphones for professionals.", price: 120 },
    { id: 6, name: "Charger", description: "Charger for phone", price: 50 },
    { id: 7, name: "HDMI", description: "Cable for audio/video", price: 25 },
    { id: 8, name: "Graphics Card", description: "High-performance graphics card for gamers.", price: 1755 }
]

const ProductList = () => {

  return (
    <div class='ProductList' >
      {/* using map() function to map every element in the array using each unique id as a key */}
        {products.map(product => 
        <ul style={{ listStyleType:'none', textAlign:'left', padding:'10px', backgroundColor:'ghostwhite', lineHeight:'20px'}}>
            <li key={product.id}>product: {product.name}</li>
            <li key={product.id}>description: {product.description}</li>
            <li key={product.id}>price: ${product.price}</li>
        </ul>
        )}
        
        
    </div>
  )
}

export default ProductList