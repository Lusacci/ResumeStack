//Manage all api requests here. 
import express from 'express';


//I'm probably going to set all the routes here. 
const router = express.Router();

router.get('/', (req, res) => {
    res.send({data : []}); // sends JSON data with react magic. 
});

export default router;