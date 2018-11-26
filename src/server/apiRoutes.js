import express from 'express';

let router = express.Router();

import { STEAM_API_KEY } from './apiKey';
import http from 'https';

router.use('/users/:steamId', ( req, res) => {
    console.log(STEAM_API_KEY);
    console.log(req.params.steamId)
    http.get('https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001?key=' 
        + STEAM_API_KEY +'&vanityurl=' + req.params.steamId, 
        (response) => {
            let data = '';
            response.on('data', (chunk) => {
                data += chunk;
            });
            response.on('end', () => {
                data = JSON.parse(data);
                console.log(data);
                //res.setHeader('Content-Type', 'application/json');
                res.send(data);
                
            });


        });
    
});



export default router;