import apiRouter from './api';
import config, { nodeEnv, logStars } from './config';
import express from 'express';


//Going to create a server with express. 
const server = express();

server.set('view engine', 'ejs'); //Pure Magic. 

//Express get requests
//This is the default.
server.get('/', (req, res) => {
    res.render('index', {
        content: "Hello Express with <em>EJS</em>!"
    }); //Make sure you pass the name of the template. (ejs)
});

// this puts the middleware into express stack. 
server.use('/api', apiRouter); // use anything the apiRouter chooses. Real magical bullshit. 

//Please put all assets in the public folder. 
server.use(express.static('public')); 

//Express listening on configuration ports. 
server.listen(config.port, () => {
    console.info('Express is listening on:', config.port);
});


console.log(config, nodeEnv);

logStars('Function');