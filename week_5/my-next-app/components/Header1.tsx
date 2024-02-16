
import React from 'react';


function Header1() {
    return(
      <header className="bg-blue-500 text-red-300 text-4xl p-3"> 
            {/* 
              background: bg
              text: text
                can alter color & size
              
              padding: px, py, p
              margin: m, mx, py
              border radius: rounded
            */}
            
            <h1>`This is the header!`</h1>
  
            <ul className=" inline-flex p-2 text-xl">
              <li><a href="/users" className=" block text-cyan-300 px-3 hover:bg-slate-50 hover:text-red-300">Users Page</a></li>
              <li><a href="/users/new" className=" block text-cyan-300 px-3 hover:bg-slate-50 hover:text-red-300">New Users Page</a></li>
            </ul>
          </header>
  
    );
  }

  export default Header1;