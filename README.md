# ResumeStack
Resume Website utilizing Node.js, Mongo.DB, React.js., ES6, Babel, Webpack, Nodemon, esLint, curl, and ejs. 

I specified the package.json first to include my credentials, and started building from there. 

I had to start with the correct configuration files, specifying my ports, and creating my ES6 express server and pass it 
into my public folder. 

api/index handles most of the routing to the pages, and thank god for webpack to keep a succinct organization. 

ejs is fantastic in how it divides up the header and footer, originally I was doing a seperate project and php that turned out to be a nightmare. 

There are 3 nodes:
    -Web Server
    -React Components
    -Api Server

Dependencies 
    -Express.js
    -MongoDB
    -react
    -react.dom
    -webpack
    -Babel

Keep in mind it's absolutely important that you npm i -S these modules, you want npm to remember your settings. 

-nodemon will help so I don't have to keep restarting my server.
-esLint 

Windows doesn't come with curl by itself, so remember you need to download it! then specify the environment path. 

Node does all the wrapping for me, Express wraps around node core http modules. 

when calling babel-node server.js, you can instead use babel-node server.js | less to limit the amount of data you're pulling from the target website. 

run npm start to start the server. 

EJS provides template javascript that has server render javascript components. 
IMPORTANT to note that it DOES support partial views, so I divided up header and footer. 

React generates HTML with javascript because:
    - We get the full power of javascript for data
    - Before the html, we can represent it as a javascript object tree.
        -React can compare it against future versions of the same tree, and generate partial HTML nodes to take to the browser (virtual dom)

React generates bundle.js through webpack, and the map too. BECAREFUL With the webpack.config.js file! syntax is important. 

