import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('books', [
      {
        "title": "Código Limpo",
        "price": 125.9,
        "author": "Robert C Martin",
        "isbn": "8576082675"
        },
        {
        "title": "Refatoração",
        "price": 129.9,
        "author": "Martin Fowler",
        "isbn": "8575227246"
        },
        {
        "title": "Padrões de Projetos",
        "price": 141.98,
        "author": "Erich Gamma",
        "isbn": "8573076100"
        },
        {
        "title": "Design Patterns: Elements of Reusable Object-Oriented Software",
        "price": 56.0,
        "author": "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
        "isbn": "0201633612"
        },
        {
        "title": "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
        "price": 45.99,
        "author": "Robert C Martin",
        "isbn": "0134494164"
        },
        {
        "title": "Introduction to the Theory of Computation",
        "price": 159.95,
        "author": "Michael Sipser",
        "isbn": "1337559433"
        },
        {
        "title": "JavaScript: The Good Parts",
        "price": 22.99,
        "author": "Douglas Crockford",
        "isbn": "0596517742"
        },
        {
        "title": "Head First Design Patterns",
        "price": 49.99,
        "author": "Eric Freeman, Elisabeth Robson, Bert Bates, Kathy Sierra",
        "isbn": "0596007124"
        },
        {
        "title": "Clean Code: A Handbook of Agile Software Craftsmanship",
        "price": 37.99,
        "author": "Robert C Martin",
        "isbn": "0132350882"
        },
        {
        "title": "Refactoring: Improving the Design of Existing Code",
        "price": 39.99,
        "author": "Martin Fowler",
        "isbn": "0201485672"
        }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('books', {});
  },
};
