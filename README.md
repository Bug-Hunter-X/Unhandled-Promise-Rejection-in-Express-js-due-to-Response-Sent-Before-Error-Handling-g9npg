# Unhandled Promise Rejection in Express.js due to Response Sent Before Error Handling

This repository demonstrates a common error in Node.js Express.js applications where an asynchronous operation within a route handler might throw an error after the response has already been sent.  This leads to unhandled promise rejections, which can be difficult to debug.

The `bug.js` file contains the problematic code. The `bugSolution.js` file provides a solution.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `npm install express`
4. Run `node bug.js`
5. Refresh the page several times. You might see error messages in the console, indicating an unhandled promise rejection, even though the server seems to respond correctly most of the time.

## Solution

The `bugSolution.js` file shows how to properly handle errors in asynchronous operations by checking if the response has already been sent before attempting to send an error response. This prevents unhandled promise rejections.