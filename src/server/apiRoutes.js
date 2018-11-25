import express from 'express';

let router = express.Router();

import { STEAM_API_KEY } from './apiKey';

router.use('/users/:steamId', ( req, res) => {
    console.log(STEAM_API_KEY);
});



export default router;