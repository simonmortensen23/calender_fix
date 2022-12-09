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

