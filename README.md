# Art Viewer

Welcome to my take on the assessment. 
I hope you have as much fun reviewing it as I had coding it. 

## Run the project

To run the project, run the following in order from your command line / terminal: 

### `cd {directory where you saved the project}`
### `npm install`
### `npm start`

This will run the project in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To change the artists, update the default state in App.js with another valid artist.
### A list of valid artists can be found in components --> Artist

## Unit tests
  To stay within the 4 hour time box,  I did not add unit tests with great functionality. Most of the tests are just tests to verify if the tested component can be rendered without crashing.  If given extra time, I would happily add more robust and functional unit tests.

To run the unit tests, run the following

### `npm test`

## Use of 3rd party libraries

### I did make use of 3rd party libraries, mostly to save time and fit into the 4 hour time box
### I made use of them for the following specific reasons
  - Axios and react-lazy-load-image-component | Used to easily enable lazy loading and error handling in API call, as well as to help with mocking API calls in unit tests. Alternatively I could have used the build in JavaScript Fetch API, but sacrificing time in doing so.
  - Bootstrap 5 | Save time on layout and making page responsive. If you want to specifically focus on my CSS skills, I will happily redo the parts of the project where I used Bootstrap with vanilla CSS
  - react-spinner | Used to quickly implement spinner that is displayed while the user waits for the API call to complete

## Possible extensions 
If not for the 4 hour limit, I would extend the project in the following ways:
  - Implement drop down that gives the user the ability to select the artist (See components --> Artist)
  - Open a specific image on a bigger part of the screen when the user clicks on it