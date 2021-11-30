#About
The project on React JS framework with backend on Postman what running in docker container

## Features

1. Login(Recently is hardcode)
2. Add a movie
3. Delete movie
4. Show movie information
5. Show the list of movies sorted by title in alphabetical order
6. Find a movie by title.
7. Find a movie by the name of the actor.
8. Import of movies from a text file

## Functions

1. getAuth() => there is a post request to http://localhost:8000/api/v1/sessions
2. applyFilm() => there is a get request to localhost:8000/api/v1/movies, the actors must be separated by commas.
3. deleteMovie() => there is a delete request for localhost:8000/api/v1/movies/{movie id}.
4. getShowList() => there is a get request for http://localhost:8000/api/v1/movies?sort=year&order=DESC&limit=10&offset=0
5. In this case, a GETShow request is triggered with the order = ASC parameter
6. When the user enters a search for the title of the movie, a GETShow request is triggered, at the end the '&title' parameter is added, to which the value entered in the search is added.
7. When the user enters a search for the actors of the movie, a GETShow request is triggered, at the end the '&actors' parameter is added, to which the value entered in the search is added.
8. getFile() => post request for http://localhost:8000/api/v1/movies/import

## Docker

web-server on Postman is easy to install and deploy in a Docker container.
start docker - docker run --name movies -p 8000:8000 webbylabhub/movies

## React App

yarn start, starting on localhost:3000

## How to use

When the React-app starts successfully, the initial route will lead to the Login page. As access, you need to use the following data:
email – dfive222@gmail.com, password: admin123.
