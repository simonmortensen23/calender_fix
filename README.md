# Task Planner

## Links

## Table of Contents

- [Introduction](#introduction)
- [User Stories](#ux)
- [Design](#design)
- [Features](#features)
- [Technologies](#technologies)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

## UX

### Site Purpose
 - Task Planner is the perfect app for planning day to day chores or smaller tasks. With Task Planner the users has the ability to share their tasks with family, friends or co-workers and leave small task notes, due date and progress status for the others to see. 
 
### Site Goal
 - The goal of the site is to have an interactive task planner, that is accesible for everyone, and to create an overview of your day to day chores or smaller tasks during the week. The idea is to expand it to events, so the user can add the tasks to a "bigger" event. 
 
### User Stories
 -
 - 
 ## Design
 
 ### Color Scheme
 
 ### Typography
 
 ### Front End Developer Role
 Front end developers play an important role in developing an engaging user facing web applications, aiming to make sure the user stays on and returns to the site is a major objective. Front end developers work on the user interface and user experience, maintaining responsiveness and accessibility of the application. Having an understanding of how the backend part of an application works is helpful to a front end developer, as it helps to tie the two together in an approriate manner.
 
 ## Features
 
 ## Future Features
  - In the future I would like to implement member groups, so the owner of the task can add a group of people instead of individual people.
  - In the future I would like to implement another member role, editor, so designated people other than the owner can edit tasks.
  - In the future I would like to implement the ability to create an event, that the user can add tasks to. 
  
 ## Bugs
 ### Fixed
  - Had no gitignore for the initial commits, so the env.py was pushed to github. Added the .gitignore and changed the values of the secret key and made a new cloudinary account.

## Technologies used

### Languages
 - HTML
 - CSS
 - Javascript
 - Python
 - SQL- postgres

### Frameworks, libraries and programmes
 - Git
  - For version control, committing and pushing to github
 - Github
  - For storing the repository, files and images pushed from Gitpod
 - Gitpod
  - IDE used to code project
 - ElephantSQL
  - Used for database storage
 - Render 
  - Used to deploy the application
 - Django
  - used to build the backend database, that serves as an API for the front end part of the project
 - ReactJS
  - To build components that collectively form the front end of the application.
 - React-Bootstrap 
  - The styling side of the front end application used as it was introduced during the walkthrough project.
 - Google fonts 
  - used for selecting fonts for project.
 - Amiresponsive
  - used for testing responsiveness and providing screenshots in different sizes.

## Project Setup
 1. Create a new repository in Github and use the 'gitpod' button at the top to create workspace
 2. Create Reactapp by running: npx create-react-app my-app
 3. Change directory by: cd my-app
 4. the browser should be showing you the React logo
 5. In App.js remove the logo import, remove the custom React header element, and replace with a 'H1' element containing a line of text such as 'hello world'.
 6. Check this 'H1' is being shown in your browser preview.
 7. Do a terminal command to add, commit and push the code to Github

## Components
 - Several components were setup throughout the project and was reused throughout.
 1. AxiosDefault.js
  - helped with communication with the backend API
 2. CurrentUserContext.js 
  - confirm users logged-in status to determine what functionality is available to that user.
 3. useRedirect.js 
  - redirects a user to another page if not authorised to access the page they are trying to access. 
 4. useClickOutside.js
  - user can click anywhere on the screen to collapse navbar and tasks. 

## Deployment
1. This project was initially deployed through Heroku, but now changed to Render.
2. In axiosDefault.js I added the new baseURL from the API on render
3. Added the handlers.js file and copied in the same baseURL
4. Added, committed and pushed
5. On Render I pressed the new + button and chose Static Site
6. Named the app event_app
7. In the setting tab I made sure that Root Directory was set to blank and Branch to main
8. Set the build command to: yarn build
9. Set the publish directory to build
10. Pressed Create Static Site
11. Updated CLIENT_ORIGIN to match Render URL in env.py and in environment file on Render in API
12. In Redirects/Rewrites I added a rule with the values: "/*, /index.html"
13. Deployed project and checked that it worked

## Credits
 - The code institute moments project was used as a guideline for the API and CSS. 
## Acknowledgements
 - My friend Nikolaj who helped me throughout this project.



