# E-commerce Back End

## Description
This project is a functional Express.js API for an e-commerce platform. It allows for the creation, reading, updating, and deletion of products, categories, and tags in a MySQL database.

## Features
- Product management: Create, read, update, and delete products.
- Category management: Create, read, update, and delete product categories.
- Tag management: Create, read, update, and delete product tags.

## Technologies
- **Node.js**: JavaScript runtime environment for executing JavaScript code server-side.
- **Express.js**: Web application framework for Node.js.
- **MySQL**: Relational database for storing application data.
- **Sequelize**: Promise-based Node.js ORM for SQL databases.

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.
4. Seed the data by logging into mysql and sourcing the schema using `db/schema.sql`.
5. Run the seed by doing `npm run seed`.
6. Lastly do `node server.js` in the terminal and open up insomnia to view the database

## Usage
After starting the server, you can interact with the API using tools like Insomnia . Here are some example routes:

- **GET products**: `/api/products` - Retrieves a list of all users.
- **GET categories**: `/api/categories` - Retrieves a list of all thoughts.
- **GET Tags**: `/api/tags` - Creates a new user.

## Video link:[Video](https://drive.google.com/file/d/1nj5clIGepopPafCiAcP0OlmWfCEY6xS/view)

## Contributing


## License
This project is licensed under the [MIT License](LICENSE).

## Contact
