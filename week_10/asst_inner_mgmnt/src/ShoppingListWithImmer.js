import React, { useState } from 'react'
import { useImmer } from 'use-immer'
import './App.css'

const ShoppingListWithImmer = () => {
  
    const [shoppingList, setShoppingList] = useImmer([
        {id: 0, name: 'tomatoes', quantity: 3, details: {category: 'fruits', notes: 'red suishy fruit good for tomato sauce'}},
        {id: 1, name: 'potatoes', quantity: 2, details: {category: 'vegetables', notes: 'spud food great for french fries!'}},
        {id: 2, name: 'chicken', quantity: 4, details: {category: 'poultry', notes: 'bok-bok-bagock!!'}}
    ]);

    // id count start at 3 because that is the amount of current list
    const [idCount, setIdCount] = React.useState(3);
  
    const addItem = () => {
        //retrieve information from inputs
        const newName = document.getElementById('addsName').value;
        const newQuan = parseInt(document.getElementById('addsQ').value, 10);
        const newCat = document.getElementById('addsCat').value;
        const newNotes = document.getElementById('addsNote').value;
        //use setShoppingList to add new state 
        setShoppingList(item => {
            item.push({
                id:idCount, 
                name:newName, 
                quantity:newQuan, 
                details: {category:newCat, notes:newNotes}
            });
        });
        setIdCount(n => n + 1);
        console.log('added items, ' + idCount )
    };

    const updateItem = (id1) => {
        //retrieve information from inputs
        const newName = document.getElementById('upName').value;
        const newQuan = document.getElementById('upQ').value;
        const newCat = document.getElementById('upCat').value;
        const newNotes = document.getElementById('upNote').value;
        
        //use setShoppingList to update state 
        setShoppingList(draft => {
            const item = draft.find(item=> item.id === id1);
            if (item) {
                item.name = newName;
                item.quantity = newQuan;
                item.details.category = newCat;
                item.details.notes = newNotes;
            }
           
        });
    };
  
    

    const removeItem = (id) => {
        // const id = parseInt(document.getElementById('removeId').value, 10);
        if (id == '') return;

        //use setShoppingList to remove item
        setShoppingList(draft => {
            const index = draft.findIndex(item => item.id === id);
            if (index > -1 && index <= idCount) {
                draft.splice(index, 1);
            }
            console.log('met this ' + idCount);
            // Reassign IDs to ensure they are consecutive
            draft.forEach((item, index) => {
            item.id = index;
            });
            
        });
        setIdCount(n => n-1);
    };



    return (
    <div className='container1'>
        <div className='addItems'>
            <p>Name: <input id='addsName'></input></p>
            <p>Quantity: <input id='addsQ'></input></p>
            <p>Category: <input id='addsCat'></input></p>
            <p>Notes: <input id='addsNote'></input></p>
            
            <button onClick={addItem}>Add Item</button>
        </div>

        <div className='updateItems'>
            <p>ID: <input id='upId'></input></p>
            <p>Name: <input id='upName'></input></p>
            <p>Quantity: <input id='upQ'></input></p>
            <p>Category: <input id='upCat'></input></p>
            <p>Notes: <input id='upNote'></input></p>
            <button onClick={() => updateItem(parseInt(document.getElementById('upId').value, 10))}>Update Item</button>
        </div>

        <div className='removeItems'>
        <p>ID: <input id='removeId'></input></p>
            <button onClick={() => removeItem(parseInt(document.getElementById('removeId').value, 10))}>Remove Item</button>
        </div>

        <div className='shoppingList'>
            <h3>Shopping List</h3>
            <ul>
                {shoppingList.map(item => (
                    <li key={item.id}>ID: {item.id} Item: {item.name}, Quantity: {item.quantity}, Category: {item.details.category}, Notes: {item.details.notes} </li>
                ))}
            </ul>
        </div>

    </div>
  )
}

export default ShoppingListWithImmer