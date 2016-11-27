# Basic React Template
This project is a basic React app template that can be run immediately once cloned.
The app uses:
* npm
* Webpack & Webpack dev server
* Babel (supports es2015)
* React router


# Setup
1. Modify package.json for the app name and description, if you would like.
2. You can also modify the index.html under the app folder for your app's title.


# Running the App
From the root of the project folder, install the required npm packages by running:
```
npm install
```

For the first time, run 
```
npm run production
```
This will run the webpack production (webpack -p) command that will trigger the transpilation and output the minified version of index.html in the dist folder.

After that, run 
```
npm run start
```
This will run the webpack server and serve up the app.
Any changes to the code should be reflected by refreshing the page.


# Acknowledgement
This app was created following the React.js Fundamentals tutorial by Tyler McGinnis. Check it out [here](https://online.reacttraining.com/courses/enrolled/reactjsfundamentals). 





