# MERN Stack Book Library Project

The Book Library Project is a full-stack web application that allows users to manage a virtual library of books. It is built using the MERN stack, which includes MongoDB, Express, React, and Node.js. The project was created using a tutorial by [freeCodeCamp.org](https://www.youtube.com/watch?v=-42K44A1oMA) and serves as an introduction to full-stack development.

## Features

The Book Library has four main functionalities:

- Add a book
- Edit a book
- Delete a book
- View all books

All books are stored in a MongoDB database, which is specified in the connection stream in `backend/config.js`. Communication between the database and backend is done using Mongoose and Express.js. The user interface was created using React with elements from Tailwind CSS for more responsive design and development. Frontend server hosting is done through Vite, which can be installed during the package updating process.

## Getting Started

To get started with the Book Library Project, follow these steps:

1. Connect to the library by creating a Node.js MongoDB database and linking the connection stream in `backend/config.js` under `mongoDBURL`.
2. Install the required packages by running `npm install` in the `backend` folder and `frontend` folder.
3. Once the database is communicating with the other components, the application is ready to run. Use `npm run dev` in both the `frontend` and `backend` folders. You can access the application via `http://localhost:5173/`.

## Contributing

Contributions to the Book Library Project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a descriptive commit message.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

## License

The Book Library Project is licensed under the MIT License. See `LICENSE` for more information.

## Acknowledgments

- [freeCodeCamp.org](https://www.youtube.com/watch?v=-42K44A1oMA) for the tutorial that inspired this project.