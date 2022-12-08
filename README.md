# Task Planner

## Links

- [Development board](https://github.com/users/simonmortensen23/projects/4/views/1)
- [User Story board](https://github.com/users/simonmortensen23/projects/4/views/1?layout=table)

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
 - I have put user stories as issues as part of agile development you can find the link [here](https://github.com/simonmortensen23/calender_fix/issues)


 ## Design
 
 ### Color Scheme
 - The main colors for the website are green rgb(13,155,9), bright mint rgb(62,242,169) and white (rgb(255,255,255)) to keep a simple and consistent look throught the website.
 
 ### Typography
 - I am using Lato as text type with sans-serif as fallback font. 
 
 ### Front End Developer Role
 Front end developers play an important role in developing an engaging user facing web applications, aiming to make sure the user stays on and returns to the site is a major objective. Front end developers work on the user interface and user experience, maintaining responsiveness and accessibility of the application. Having an understanding of how the backend part of an application works is helpful to a front end developer, as it helps to tie the two together in an approriate manner.
 
 ## Features
 
 ### Navigation bar
 - The NavBar is shown in the top of the screen
 - Logged in view
![TaskbarLI](https://user-images.githubusercontent.com/43667190/206555946-992cf2c0-52e1-420e-9c3b-4a24eb8def0b.PNG)
- Logged out view
![TaskbarLO](https://user-images.githubusercontent.com/43667190/206555975-5993a8f4-7425-4ddf-ab67-ba14ff4fae6c.PNG)
- NavBar collapsed on smaller screen
![TaskbarCol](https://user-images.githubusercontent.com/43667190/206556021-e1d5c276-0424-4934-8648-9c569f60f12c.PNG)

### Sign Up / In
- The user can access Sign Up and Sign In pages if not registered or logged in
- Sign In page
![signin](https://user-images.githubusercontent.com/43667190/206556380-a88c26b9-710e-43e5-aa59-66b9e2438f71.PNG)
- Sign Up page
![signup](https://user-images.githubusercontent.com/43667190/206556410-4d9c2d44-8b0b-4556-bf7a-f4e397dccc93.PNG)

### Create Task
- When the user has registered or signed in, then the user can access Create Task page
![createtask](https://user-images.githubusercontent.com/43667190/206556566-60ee7aad-d35b-4374-a34c-43e0b5f845d8.PNG)

### Task List
- A logged in user can access the Task List that also works as a front page for logged in user
- Task List with tasks
![tasklist](https://user-images.githubusercontent.com/43667190/206556885-55999606-5e41-42c2-b3c0-af46c6d8a91b.PNG)
- Task List without tasks
![noresult](https://user-images.githubusercontent.com/43667190/206557452-8242ac2e-a325-4405-9637-6b824971ea91.PNG)

### Task Overview
- The user can access each task by pressing the header to see it on an individual page. The user can also expand and collapse additional info
- Task Overview if user is owner of the task. Also shows edit and delete buttons
![taskoverviewOwner](https://user-images.githubusercontent.com/43667190/206557701-e8ff4337-47c2-4499-a021-940d8aa6f696.PNG)
- Task Overview if user is member of task
![taskoverviewnotowner](https://user-images.githubusercontent.com/43667190/206557753-03525bb9-5463-49b4-b60d-a7900cd3e99f.PNG)
- Task Overview, expanded additional info
![taskoverviewexpanded](https://user-images.githubusercontent.com/43667190/206557874-5fa603a1-b55b-4105-b87b-adc68a9a9b9e.PNG)

### Task Edit
- The task owner is able to edit information on the task. Can also access Edit members through this view
![taskedit](https://user-images.githubusercontent.com/43667190/206558232-515dd9c1-4e94-4a75-9ed2-a26e6fd1c412.PNG)

### Add / Delete task member
- The task owner can add or delete members on the task.
![memberedit](https://user-images.githubusercontent.com/43667190/206558399-1d5a4406-8a07-4fa4-b598-aebd0618decd.PNG)







 
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



