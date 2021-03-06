# **[eCommerce Back End](https://peaceful-lake-44963.herokuapp.com/)**

![Badge](https://img.shields.io/badge/license-MIT-blue)

## Table of Contents
---
* [License](#license)
* [Installation](#installation)
* [Packages](#packages)
* [Description](#description)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

<br>

## License 
---
[MIT License](./LICENSE) <br>

Copyright (c) 2022 Haley Seymour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 <br>

<br>

## Installation
---
To install this project: 
1. Start by forking this repository on Github. 
2. Clone this project to your machine by using the "git clone + URL" command. 
3. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code ."). 
4. Install Node.js from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).
5. Install MySQL from their website, if you have not already. Here are some additional [instructions](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide).
6. Suggest installing [Nodemon](https://www.npmjs.com/package/nodemon) if you have not already.
7. Suggest installing [Insomnia](https://insomnia.rest/download) if you have not already. 
8. This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". This will install the packages specified in the next section. 

<br>

## Packages
---
General Technologies: 
- Javascript
- Node.js
- Git
- Heroku 
- Insomnia

NPM Packages
- nodemon 
- express
- dotenv
- mysql2
- sequelize 

<br>

## Description
---
The goal of this project is to assist an e-commerce company in organzing it's retail database. This allows for ease of use to find products in the system, as well as find associated categories and tags. This project configures an API through Express.js and utilizes Sequelize to interact with a MySql database. By following the installation and usage instructions in this README, you can use this program too! Create a ".env" file with your environmental variables (database name, mySql username, and mySql password). Run the commands specified to develop the database and seed it with data (if desired). Start the server and perform Get/Post/Put/Delete routes to the API to see it in action. This program has full CRUD functionality (create, read, update and delete)! Through this project I learned how to use sequelize to interact with the database and create a fully functional API. 
 <br><br>
To view this project deployed, click [here](https://peaceful-lake-44963.herokuapp.com/). <br><br>

## Usage 
---
After following the instructions in installation: 
1. Open the database file in your terminal. 
2. Run command "mysql -uroot -p" and enter your password (note: keystrokes will not show).
3. Run command "SOURCE schema.sql" to set up the database and tables.
4. Optionally, run command "npm run resetdb" to replace steps 2 and 3 (enter password when prompted).
5. OK to 'quit' MySql.
6. Create a file called ".env" in the root folder of the program. In this folder include the following information: <br>
DB_NAME='' <br>
DB_USER='' <br>
DB_PW='' <br>
7. Open the "server.js" file in your integrated terminal. 
8. Run command "npm run seed" (or "node seeds/index.js") to seed the database if desired.
9. Run command "npm run start" (or "node server.js"). Alternatively, if you have Nodemon installed, run "npm run watch" (or "nodemon server.js"). 
10. Open insomnia and type in "localhost:3001/api/_" in the address bar. Replace underscore with 'products', 'categories', or 'tags'.
11. Enter get, post, delete or put requests as you please. 
12. When finished, run CONTROL-C in terminal to end stop nodemon, and trash the session. 

<br>
Please check out this [video](https://drive.google.com/file/d/1DmJywG85k4h2NRHRiwhJ4HRzHdPwSgnV/view) for a demonstration of how to use this program. 

### **Screenshots**
--- 
GIF of Category Routes <br>
![GIF of Category Routes](./assets/screenshots/categoryroutes.gif)
<br>
GIF of Product Routes <br>
![GIF of Product Routes](./assets/screenshots/productroutes.gif)
<br>
GIF of Tag Routes <br>
![GIF of Tag Routes](./assets/screenshots/tagroutes.gif)
<br>
GIF of Deployed Site <br>
![gif of deployed site](./assets/screenshots/deployedHeroku.gif)
<br>
<br>

## Contributing 
---
This project was completed by myself, Haley Seymour, with starter code provied from the University of Washington Web Development Bootcamp. If you would like to contribute, please do and let me know if you have any questions.

<br>

## Questions?
---
Please contact me on Github at [hseymo](https://github.com/hseymo) or by [email](mailto:haleycseymour@comcast.net).