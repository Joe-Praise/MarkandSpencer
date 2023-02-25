# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### About Project
This project was a challenge gotten from reworkacademy.co in regards my development as a React front-end developer as this is my first React.js project.
This project is made up of 13 pages which consist of:
-Home page
-Womens page
-Shop page
-Single product page
-Cart page
-Sign up page
-Sign in page
-Admin sign in page
-Admin Dashboard
-Admin Products page(CRUD)
-Admin Users page(CRUD)
-Admin Create product page
-Admin Create user page

Note: its responsive over various screen sizes(mobile, tablets, laptops)


### Admin Sign in
this is not verified by the endpoint, its only an access way to the dashboard. although it still requires:
-Admin ID: AD102030
-Password: MARKANDSPENCE

To access the Admin Sign in Page:
-Go to Sign in page
-Click on the third link that says "Are you an Admin? SignIn->"
-Input the Admin ID and Password attached to the paragraph above, you'll be redirected once access is granted.

### Sign in & Sign up
The created users using the sign up form are stored in the endpoint and their information is displayed in grid format via the Admin users page.
The Sign in form only confirms the identity and existence of a user by cross-examining the input value againt the users database

### Shop Page
Products are fetched from the endpoint and displayed in the product page in grid format

### Single Product page
Single product is fetched from the endpoint. It's ID is passed from the shop page using useParams(React Hook);

### Cart 
This project uses a functional cart that was built from scratch, to suit the needs of the users.
-Its built with a feature that prevents you from adding a particular product multiple times to the cart
-You can remove and add products to the cart as well as increase quantity and reduce quantity and it displays the total price accordingly.


### Difficulties faced
-I had a hard time implementing the sliders
-Targeting elements was also a challenge, i had to result to parentElement, childrenElement method most times
-The nested navigation links was right up there too, but getting it to work came with a beautiful feeling

### Deployed Link
Check the deployed site(incoming...)

### GitHub Username
click here [https://github.com/Joe-Praise]
