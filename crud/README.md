### CRUD APPLICATION
-pages
.Admin Page
.Lognin Page
.Single Product Page
.EditaProduct Page

-Tools
.React
.Cyclic-server(Data Base)
.Redux thunk
.Routing
.Generic Component
.Axios


## Navbar Component

The Navbar component is a navigation bar that appears at the top of the page on the website. It provides navigation options for the users to access different sections of the website.

The Navbar component is built using ReactJS and React Router for navigation. Chakra UI is used for styling the Navbar. The Navbar uses the useState hook to keep track of the Add-Product page, and display the search bar and Login/Cart buttons only when the Add-Product page is not selected.


## Admin Page

In this admin page, I used the following tools and technologies to manage the products:

React: A JavaScript library for building user interfaces.

Chakra UI: A React UI library that provides a set of reusable and accessible components.

Axios: A popular HTTP client library for sending requests to the server.

Redux: A state management library for React applications.

Cycles Server: A simple and easy-to-use server for testing purposes.

The main functionality of this page is to add new products to the store. To achieve this, I have created a form where the admin can enter the product details like the image URL, brand, price, description, and gender. The form inputs are connected to the React state using the useState hook, and the data is saved to the server when the admin submits the form. The form inputs are also validated before submitting to ensure that the data entered is valid.

The data is posted to the server using Axios, and the response from the server is used to update the Redux store. The state management is done using Redux to ensure that the state of the application is consistent and can be easily manipulated.

Overall, this admin page provides a simple and easy-to-use interface for adding new products to the store, and it is built using modern tools and technologies that ensure that the application is scalable and maintainable.

## Authentication with reqres.in API and Dynamic Routing

This project implements authentication using the Reqres.in API. After a successful authentication, the user is dynamically routed to different pages using the useLocation and location.state features in React

Dynamic Routing :

The dynamic routing in this project is achieved by using the useLocation and location.state features in React.

The useLocation hook is used to access the current URL and the location.state is used to pass data between pages, such as user information and authentication status.

Based on the URL and the location state, the appropriate page is displayed to the user. This allows for a seamless and secure navigation experience in the app.

## Product Page

This Product Page allows users to browse through different categories of products and sort them by price.

Filter Functionality
The filter functionality allows users to filter products by the following categories:

Men's Dresses
Women's Dresses
Kid's Section
Users can select multiple categories at once to view products that fit the selected criteria.

Sort Functionality
The sort functionality allows users to sort products by price. The options available are:

High to Low
Low to High
This functionality allows users to easily find products that fit their budget.

User Experience
The product page is designed with the user in mind, making it easy to navigate and find what you're looking for. Whether you're looking for a specific category of products or want to sort by price, the filter and sort functionalities make it simple to find what you need.