import express from 'express';

let router = express.Router();

import { STEAM_API_KEY } from './apiKey';
import http, { request } from 'https';

router.use('/api/users/:userName', ( req, res) => {
    console.log(STEAM_API_KEY);
    console.log(req.params)
    let url = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001?key=' 
        + STEAM_API_KEY +'&vanityurl=' + req.params.userName;

    http.get( url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () => {
            console.log(data);
            data = JSON.parse(data);                
            res.send(data);                
        });
    });    
});

router.use('/api/games/:steamId', (req, res) => {
    console.log("HERE: ");
    console.log(req.params.steamId);

    http.get('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + STEAM_API_KEY +'&steamid='
        + req.params.steamId + '&include_appinfo=1&format=json' , 

    (response) => {

        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            data = JSON.parse(data);            
            res.send(data);
        });

    });
})



export default router;