# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Installation Guide
1. Clone this repository in your local storage.
2. Open the folder in terminal and enter <span style="color : green">npm install</span> command to initialize the React app and its dependencies.
3. If you don't have the backend code, get it from https://github.com/mohinishjoshi/ecommerce-upgrad/tree/master
4. Configure the backend code by finding <span style="color : blue">application.properties</span> file in <u> src > main > resources</u>
<br>AND add these lines (You can use MongoDB Compass or Atlas): 
<br>spring.data.mongodb.uri=mongodb://localhost:<MONGO_PORT>/<DB_NAME>
<br>server.PORT=8080
<br>(We have used MongoDB Compass above)
5. Now build this backend code by opening it in terminal and enter <span style="color : green">mvn spring-boot:run</span> and run it. The backend will now run on PORT 8080 or whatever you chosed in server.PORT property as port number.
6. (IF you changed server.PORT property) In the frontend folder, change the line: target: 'http://localhost:<BACKEND_PORT>' , in <span style="color : blue">setupProxy.js</span> present in <u>src</u> folder. Similarly "proxy": "http://localhost:<BACKEND_PORT>" in <span style="color : blue">package.json</span>.
7. Now start the frontend by opening the project in terminal and enter <span style="color : green">npm start</span> command. The frontend should run on localhost:3000, and project UI would be accessible to you on same path in browser i.e. localhost:3000.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

