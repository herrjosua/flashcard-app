# Flashcard App

My version of Tutplus Modern Web Apps with React and Redux app

The URL for this is found [here](https://code.tutsplus.com/courses/modern-web-apps-with-react-and-redux/lessons/set-up-the-project) and requires a subscription to view

## Build Instructions

1. Run `npm install` to install
2. To build the app type run: `npm run build`
3. To run the local server: `npm run server`

## Current Issues

### I'm getting an `Uncaught TypeError: Cannot read property 'props' of undefined` when I try to add a new deck

The issue is with lines 93, and 94 in the `app.js` file.

## Resolved Issues

### I'm getting an TypeError on the `refs` property on the `input` field

I resolved issue by changing the code from `var name = ReactDOM.findDOMNode(this.refs.add).value;` to `let name = ReactDOM.findDOMNode(newDeck).value;`. I also changed the `var` to `let`
