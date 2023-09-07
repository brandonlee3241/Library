# MERN Stack Book Library Project
The Book Library Project utilizes the MERN Stack (MongoDB, Express, React, Node.js) to implement a working library in a web browser. Created using a tutorial by [freeCodeCamp.org](https://www.youtube.com/watch?v=-42K44A1oMA), the project serves as my first interaction with full stack development and was used to gain familiarity with the various components used.
# Usage
The Book Library has four button functionalities that make up the webapp. All "books" are stored using a mongoDB database specified in
connection stream in backend/config.js. Communication between database and backend is done using mongoose and Express.js.
<br/>
User interface was created using React with elements from Tailwindcss for more responsive design and development. 
<br/>
Frontend serverhosting is done through Vite, which can be installed during the package updating process.
# Getting Started
Several steps need to be taken before application is up and running.
<br/>
<ol>
  <li>Connect to the Library by creating a Nodejs MongoDB database and linking the connection stream in backend/config.js under mongoDBURL </li>
  <li>use ``npm install`` in backend folder to install required packages</li>
  <li>use ``npm install`` in frontend folder to install required frontend packages</li>
</ol>
<br/>
Once database is communicating the other components, the application is ready to run. Use ``npm run dev`` in both front and backend folders, you'll find the application via ``http://localhost:5173/``

