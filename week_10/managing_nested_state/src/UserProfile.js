import React, { useState } from 'react'

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'Keiffer',
    email: 'Keiffer@email.com',
    address: {
        street: '123 streetAddr st', 
        city: 'myCity',
        country: 'myCountry'
    }
  });
  
  const updateAddress = (streety, cityy, countryy) => {
    setUserProfile(prevState => ({
        ...prevState,
        address: { street: streety, city: cityy, country: countryy }
    }));
  }
  
  const handleUpdate = () => {
    const street = document.getElementById('street1').value;
    const city = document.getElementById('city1').value;
    const country = document.getElementById('country1').value;
    updateAddress(street, city, country);
  };
  
return (
    <div>
        <div>
            <p>street: <input id='street1'></input></p>
            <p>city: <input id='city1'></input></p>
            <p>country: <input id='country1'></input></p>
        </div>
        
        <button onClick={handleUpdate}>Update Address</button>

        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>
    </div>
  )
}

export default UserProfile