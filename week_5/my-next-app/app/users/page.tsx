// type "rafce" for the start of the page


import React from 'react'
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suit: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}


const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await res.json();

    return (
        <div>
            <Header1 />
            <h1 className=' text-2xl py-3'>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}, {user.address.city}</li>)}
            </ul>
        </div>
        
    )
}

const Header1 = () => {
    return (
        <h1 className="text-5xl bg-cyan-300 text-gray-300 p-5">Users Page</h1>
    )
}

export default UsersPage