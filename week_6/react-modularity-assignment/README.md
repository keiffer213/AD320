React Project

This project is a simple React application that demonstrates the use of components to structure a webpage. It includes a header, footer, and two content sections with a button component shared between them.


Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)

Built With 
- React - The web framework used
- Tailwind CSS - For syling

Installing

npx create-react-app "app_name"
npm install -D tailwindcss
- npx tailwindcss init
- add paths to all the files in template under "content: [ "./src/**/*.{js,jsx,ts,tsx}",],"
- add tailwind directives in css files: "@tailwind base; @tailwind components; @tailwind utilities;"

Components
- Header: Displays the top header of the application.
- Footer: Displays the footer.
- ContentA: A content section with text and a shared button component.
- ContentB: Another content section with text and a shared button component.
- TestButton1: A button component used in both content sections.

Author: Keiffer Tan