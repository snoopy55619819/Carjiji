# Carjiji

An app where you can put cars for sale.

Project use NodeJS, Express,
RESTful routes for server-side.

On front-end EJS, SASS and Bootstrap for styling.

PostgreSQL and pg (with promises) for DBMS.

Git for version control.

## Final Product

Home page
!["main view"](https://github.com/snoopy55619819/Carjiji/blob/master/docs/main-page.png?raw=true)

Add new car
!["add new car"](https://github.com/snoopy55619819/Carjiji/blob/master/docs/add-new-car.png?raw=true)

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information

- username: `labber`
- password: `labber`
- database: `midterm`

3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
6. Run the server: `npm run local`

7. Visit `http://localhost:8080/`

## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- Bootstrap 5.x,
- Cookie-parser 1.x,
- EJS 2.x,
- Express 4.x,
- Morgan 1.x,
- PG 8.x,
- Sass 1.x
