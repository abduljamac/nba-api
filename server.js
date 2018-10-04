const express = require('express');
const app = express();
const api = require('./src/api/api');
var path = require('path');
const PORT = 8000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    // res.send('Welcome to the nba API!!')
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/players', (req, res) => {
    api.getPlayers()
        .then((players) => {
            res.json({ players });
        })
})

app.get('/players/:team', (req, res) => {
    let team = req.params.team
    api.getPlayersByTeam(team)
        .then((team) => {
            res.json({ team });
        })
});

app.get('/player/:name', (req, res) => {
    let name = req.params.name
    api.getPlayersStats(name)
        .then((player) => {
            res.json({ player });
        })
});



app.get('/schedule/:name', (req, res) => {
    let name = req.params.name
    api.getPlayersSchedule(name)
        .then((schedule) => {
            res.json({ schedule });
        })
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);