//Manage all api requests here. 
import express from 'express';
import data from '../src/resumeData';


//I'm probably going to set all the routes here. 
const router = express.Router();

router.get('/JTProfile', (req, res) => {
    res.send({ JTProfile: data.JTProfile }); // sends JSON data with react magic. 
});

export default router;