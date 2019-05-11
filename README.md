# Eat-Da-Burger

## Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, the app will display the burger on the left side of the page, waiting to be devoured. Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.

### The App:   https://aqueous-chamber-38723.herokuapp.com/

#### Technologies

* Express
* Handlebars
* Node.JS
* Jquery
* JavaScript
* ORM - Object Relational Mapping
* MySQL

## App Use

![Alt Text](/public/images/terminal-gif.gif) 

1. Run "node server.js" in terminal
2. Go to browser entering localhost: with the PORT number

![Alt Text](/public/images/app-gif.gif)

1. Enter the burger name
2. Add the burger
3. Devour it

## Building the App
The project uses MySql, Express, Handlebars, Node.JS, and ORM (Object Relational Mapping) to query data and create routes between the user and server. The app uses Express backend framework and Handlebars templates that generate the HTML.

## Layout
This app uses the Model-View-Controller (MVC) layout to define how the different parts of the application communicate with another. The MVC is an architectural pattern commonly used for developing user interfaces that divides an application into three interconnected parts. 

* Model - The central component of the pattern. It is the application's dynamic data structure, independent of the user                   interface. It directly manages the data, logic and rules of the application.

* View - Any representation of information such as a chart, diagram or table. Multiple views of the same information are                 possible, such as a bar chart for management and a tabular view for accountants.

* Controller - Accepts input and converts it to commands for the model or view.