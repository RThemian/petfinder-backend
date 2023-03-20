# Backend-node-express
 The project builds Restful APIs using Node.js, Express and Mongoose, creating a Data-base from the Api PetFinders.

## Manual Installation

Clone the repo:

```bash
git clone https://github.com/alychavez12/petfinder-backend.git
cd backend-pet-finder-app
```

Install the dependencies:

```bash   
npm install
npm install firebase-admin
npm install cors
```

Set the enviroment variables:

```bash
touch .env file
# open .env and modify the enviroment variables
```

## Commands

running in development: 

```bash
npm start
# or 
npm run dev
```

## Enviroment Variables

The environment variables can be found and modified in the `.env` file.

```bash
# URL of the Mongo DB
DATABASE_URL= mongodb://127.0.0.1:27017/database_name

# Port
PORT = # default 5001

# URL frontend

https://github.com/alychavez12/frontend-petfinder-app.git

```

## Deployed Heroku

```bash
https://pet-purpose-app.herokuapp.com/

https://git.heroku.com/pet-purpose-app.git
```

## Project Structure

```
| --controllers\  # Controllers
| --models\       # Mongoose models
| --routes\       # Routes
| --server.js\    # App entry point
```

### API Endpoints

List of available routes: 

**Routes role**:\
`POST api/petfinder` - Create a role\
`GET api/petfinder` - Get all roles\
`PUT api/petfinder` - Update all roles\
`DELETE api/petfinder/idnumber` - Delete role

## Authors
 * Ailenez Chavez
 * Zack Sigel
 * Tomas Paul Cservenak
 * Brad Pearson







