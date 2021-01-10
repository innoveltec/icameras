# Ichoosr

This project was generated using [Nx](https://nx.dev) with a single angular app and
used as a conversation starter with IChoosr.

## CLI exercise

Since json data is easier to handle i decided to first convert the given csv file to json using
a simple node js function which you can run from the cli with the following command(node has to be installed :-) ) => `node cameras-csv-to-json.js`. This will execute the code in the cameras-csv-to-json.js file and creates a cameras.json file which can be used for further exercises.

To search through the cameras via the cli you can use the following command => `node cameras-cli-search.js Neude`
This will execute the code in the cameras-cli-search.js file and search for cameras in the cameras.json file where the name contains the given searchTerm(in this example => Neude).

## API exercise

To serve the data quickly through an api, I decided to make use of json-server(https://www.npmjs.com/package/json-server) since i already had a json file with the cameras data. I could have created a node.js express api server but since time was short this was the easiest and fastest solution. To run the json-server and serve the data through the api use the following cli command => `json-server --watch cameras.json`. This will run the api service on http://localhost:3000.

## Web application exercise

For this exercise i created a nx workspace with a single angular application. Why nx? I have used it in my last 2 projects and loved it because of the extra schematics it provides, the structure, it stimulates code reusability, follows the monorepo principle and is encouraged by a lot of angular experts. To run the web application you can just use the command => `npm start`
