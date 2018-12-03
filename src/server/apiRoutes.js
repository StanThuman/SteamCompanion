import express from 'express';

let router = express.Router();

import { STEAM_API_KEY } from './apiKey';
import http, { request } from 'https';

let createUrl = (steamId) => (
    'https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + STEAM_API_KEY +'&steamid='
        + steamId + '&include_appinfo=1&format=json'
);

let apiCall2 =  (steamIds, counter) => {
    let url = createUrl(steamIds[0]);
    return new Promise( (resolve, reject) => {
    
        http.get(url, 
            (response) => {
                let data = '';
                
                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('error', () => reject('error'));

                response.on('end', () =>{
                resolve(data);
                })

        })
    });
}

let apiCall = (steamIds, counter) => {

    let url = createUrl(steamIds[counter]);

    return http.get(url, 
        (response) => {
            let data = '';
            
            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () =>{
                if(counter < steamIds.length){
                    console.log(counter);                    
                    counter++;                    
                    if(counter < steamIds.length)
                        apiCall(steamIds, counter); //make call                    
                    else{
                        console.log(url)
                        return data;
                    }
                }
                else{
                    console.log('sending data back');
                    return data;
                }
            })

    })
}
    




router.use('/api/users/:userName', ( req, res) => {
    console.log(STEAM_API_KEY);
    
    let url = 'https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001?key=' 
        + STEAM_API_KEY +'&vanityurl=' + req.params.userName;

    http.get( url, (response) => {
        let data = '';
        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('error', (error) => console.log)

        response.on('end', () => {
            
            //data = JSON.stringify(data);                
            res.json(data);                
        });
    });    
});

router.use('/api/games', (req, res) => {   
    console.log("HIT"); 
    console.log((req.query));
    let counter = 0;
    //let promise = apiCall(req.query.userList, counter);

    apiCall2(req.query.userList, counter).then( (data) =>  {
        res.json(data);
    })

    //promise.then((data) => res.json(data), error => console.log("error"))   
    
    
    
    //let userList = JSON.parse(req.params);
    // http.get('https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' + STEAM_API_KEY +'&steamid='
    //     + req.query.userList[0] + '&include_appinfo=1&format=json' , 

    // (response) => {

    //     let data = '';

    //     response.on('data', (chunk) => {
    //         data += chunk;
    //     });

    //     response.on('end', () => {
    //         data = JSON.parse(data);            
    //         console.log(data);
    //         res.json(data);
    //     });

    // });
})



export default router;