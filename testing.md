# Task Planner Front End Tests
Back to [README.md](https://github.com/simonmortensen23/calender_fix/blob/main/README.md)

## Contents

## Manual Testing
- Manual testing were carried out for the URL paths and CRUD functionality.

### URL Path tests
![urldep](https://user-images.githubusercontent.com/43667190/206667574-24e06ee2-0ea6-49a9-a9a0-bfe981f79b73.PNG)
![urldev](https://user-images.githubusercontent.com/43667190/206667584-e5a966b9-2ac0-42ca-a18a-f136fdd631fe.PNG)

### CRUD Testing
![CRUDDEP](https://user-images.githubusercontent.com/43667190/206667835-33de64ce-7ce2-437e-a940-3d42cbf662fd.PNG)

### Validation
- The PEP8 site is not currently working, so validated my code with pycodestyle and found no errors

### Lighthouse
![Lighthouse](https://user-images.githubusercontent.com/43667190/206668140-b6f94719-33d0-4ac3-97dd-cda74fe45010.PNG)

## Testing User Stories

- [Sign Up](https://github.com/simonmortensen23/calender_fix/issues/4)
  - **Acceptance Criteria**: A user should be able to register for an account and have an option to go to login page if they already have an account. The registration form should indicate clearly what fields are required by showing a message on the field if it is not filled out. The required fields are Username,Password and Confirm Password. There are a restriction on duplicate username. If a user is already registered in the database with a given email, the registration will not be accepted and the user will be shown an error message that explains the issue.
  - **Summary**: Form is easy to use, and has a warning message for required fields. Other warnings also explains the users issue.
  - **Outcome**: Pass
  - ![signuperror](https://user-images.githubusercontent.com/43667190/206669895-62a5452e-49cd-47a4-a2d4-63400e94503c.PNG)
  - ![usernameexists](https://user-images.githubusercontent.com/43667190/206673099-31d73337-4598-4ce6-b3bf-1c757f1c6937.PNG)


- [Sign In](https://github.com/simonmortensen23/calender_fix/issues/5)
  - **Acceptance Criteria**: A user should be able to login for an account and have an option to go to register page if they don't have an account. The login form should indicate clearly if either the username or password is invalid or if the user didn't type anything in the field and the user will be shown an error message that explains the issue.
  - **Summary**: Form is easy to use, and has a warning message for possible errors.
  - **Outcome**: Pass
![signinInvalid](https://user-images.githubusercontent.com/43667190/206671450-b7942cb1-64d2-4b54-9b3d-6afcb32d801e.PNG)

- [Navigation / Routing](https://github.com/simonmortensen23/calender_fix/issues/2)
  - **Acceptance Criteria**: A user should be able to navigate through the pages and view the content without the need of refreshing.
  - **Summary**: The user can easily navigate through the website via the navigation bar that is shown in the top of the screen at all times or other buttons that will help the user.
  - **Outcome**: Pass

- [Logged In status](https://github.com/simonmortensen23/calender_fix/issues/6)
  - **Acceptance Criteria**: A user should be able to see if they are logged in and the username should be shown clearly in the navbar.
  - **Summary**: The user can see their name in the navbar and the frontpage will be tasklist instead of the Welcome page.
  - **Outcome**: Pass
  -![TaskbarLI](https://user-images.githubusercontent.com/43667190/206673202-949090b3-7cbd-4a07-9132-35efbc813056.PNG)
  
- [Logged out status](https://github.com/simonmortensen23/calender_fix/issues/8)
  - **Acceptance Criteria**: A user should be able to see if they are logged out and the page should clearly indicate the sign in / sign up opportunities.
  - **Summary**: The user can see a welcome page with sign in / sign up buttons and the navbar shows the sign in / sign up options
  - **Outcome**: Pass
![TaskbarLO](https://user-images.githubusercontent.com/43667190/206673719-325d03e9-41b6-4a43-a1ad-621c52f1b0cb.PNG)

- [Access Tokens](https://github.com/simonmortensen23/calender_fix/issues/7)
  - **Acceptance Criteria**: A user should be able to miantain logged-in status until they choose to log out, so the user experience is not compromised
  - **Summary**: The user can navigate, refresh and even close the page down without getting logged off.
  - **Outcome**: Pass

- [Add task](https://github.com/simonmortensen23/calender_fix/issues/9)
  - **Acceptance Criteria**: A logged in user is able to add a task to their tasklist. The task form will clearly show the required fields or if due date is set for a past date.
  - **Summary**: The user can easily navigate and use the task form, and will be guided by the error messages if there are any errors in the form.
  - **Outcome**: Pass
![createtaskerror](https://user-images.githubusercontent.com/43667190/206675005-a19ea9e6-b453-4615-83d3-a2781aa2fa98.PNG)

- [Edit Task](https://github.com/simonmortensen23/calender_fix/issues/10)
  - **Acceptance Criteria**: A logged in user and owner of the task is able to edit a task on their tasklist. The task form will clearly show the required fields or if due date is set for a past date and will also give the user an option to edit members.
  - **Summary**: The owner/user can easily navigate and use the edit task form, and will be guided by the error messages if there are any errors in the form.
  - **Outcome**: Pass
![taskedit](https://user-images.githubusercontent.com/43667190/206675347-5cb57de8-860a-43a9-8d2b-3f9e58eff1d4.PNG)

- [Delete Task](https://github.com/simonmortensen23/calender_fix/issues/11)
  - **Acceptance Criteria**: A logged in user and owner of the task is able to delete a task on their tasklist. The task overview will show edit and delete button when task is chosen.
  - **Summary**: The owner of the task can easily delete a task in the specific tasks view.
  - **Outcome**: Pass
![taskoverviewOwner](https://user-images.githubusercontent.com/43667190/206675982-35cb3334-92a4-4b7c-ac20-90ea22d9ddb7.PNG)

- [List of Tasks](https://github.com/simonmortensen23/calender_fix/issues/12)
  - **Acceptance Criteria**: A logged in user I should be able to see the list of all the tasks I have either created or am a member of. The tasks are a simple view showing title, task ID and task info and it has a collapsed section with additional information that the user can expand with one click. 
  - **Summary**: The user can get a clear look of the tasks and can expand and collapse additional task info for a less messy page.
  - **Outcome**: Pass
 ![tasklist](https://user-images.githubusercontent.com/43667190/206679734-e0e73267-9187-45a6-8d45-67d06fd903ca.PNG)
 
- [Set Due date](https://github.com/simonmortensen23/calender_fix/issues/13)
  - **Acceptance Criteria**: A logged in user I should be able to set a due date on the task when it is created or editted. The due date can only be set to a date in the future and the user will get a warning if they set it for a past date.
  - **Summary**: The user can set a due date and gets an error if the due date is in the past.
  - **Outcome**: Pass
![image](https://user-images.githubusercontent.com/43667190/206680677-b3f4dab9-832d-4542-8dbf-813daa6e6b27.png)

- [Set State](https://github.com/simonmortensen23/calender_fix/issues/1)
  - **Acceptance Criteria**: A logged in user I should be able to set a state of either, In progress, Idle, Done on the task when it is created or editted. 
  - **Summary**: The user can set a state to the task so the owner and members can see the status. 
  - **Outcome**: Pass

- [Add Member](https://github.com/simonmortensen23/calender_fix/issues/14)
  - **Acceptance Criteria**: As an owner of the task I should be able to add a member to my task through the edit view. The member list will be shown on the bottom of the page and a button for edit members will open a modal where the owner can add the member by typing in the username. It will also show an error if the field is blank.
  - **Summary**: The owner can add a members to the given task so the members also have access to them.
  - **Outcome**: Pass
![taskoverviewOwner](https://user-images.githubusercontent.com/43667190/206682004-5f1c81c3-7ca0-4203-8853-6256e1d09e6e.PNG)
![addmembererror](https://user-images.githubusercontent.com/43667190/206681961-5404f1f4-1295-4957-88dc-2ac6fe228aef.PNG)

- [Delete Member](https://github.com/simonmortensen23/calender_fix/issues/15)
  - **Acceptance Criteria**: As an owner of the task I should be able to delete a member to my task through the edit view. The member list will be shown on the bottom of the page and a button for edit members will open a modal where the owner can delete the member by typing in the username. 
  - **Summary**:  The owner can delete members to the given task so the members wont have access to them.
  - **Outcome**: Pass

Back to [README.md](https://github.com/simonmortensen23/calender_fix/blob/main/README.md)
