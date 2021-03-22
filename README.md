### Project download and initialization
1) Download all the files in this directory in your local syste.
2) run npm install in your CLI to download and install all the dependancies
3) Once download is complete, run ng serve --open. This will serve the project in your default browser at localhost://4200

### The App
The app has three main components and several other components.
The main components are
1) Login component
2) Signup component
3) Dashboard component  - cannot be accessed unless the use logs in.

Other components
1) CreateEmployeeRecordComponent - to prompt a modal to let user create new employee record
2) EditEmployeeRecordComponent  - to prompt a modal to let user edit employee details
3) Loader component  - to show a loading spinner 

### When the app launches
1) Once the app launches - the user will see a login page.
2) The user needs to have a account to be able to login. If the user does not have an account then there is a link below the login form.
3) It will take user to the sign-up component. The user need fill all the fields in the form to create a account.
4) The details are stored in a cookie in the browser.
5) Once the user creates the account, he/she can go back to the login page using a link given below the sign-up form.
6) User can then login using the email and password used at the time of sign-up. 
7) User credentials are compared with the data stored in cookie. If the creds match then user is redirected to Dashboard component.

### Dashboard component
1) The API used to fetch employee data is unreliable. It often gives errors with error code - 429(To many requests). This crashes the dashboard.
2) To handle this the app keeps retrying until the proper response is received.
3) A loading spinner is shown until data is received and rendered on UI.
4) The dashboard allows user to create new employee record, edit existing record and delete existing record.
5) Create, Edit and Delete functionalities are implemented but doesn't update the dashboard as the data comes from a fake API and also it is unreliable.
