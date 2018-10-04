const fire = require('../firebase/db')
const playersDB = fire.playersDB
const scheduleDB = fire.scheduleDB
const statsDB = fire.statsDB


const getPlayers = () => {
    return new Promise((resolve, reject) => {
        playersDB
            .once('value')
            .then((snapshot) => {
                let players = [];
                snapshot.forEach((childSnapshot) => {
                    let data = childSnapshot.val();

                    players.push(data);
                });
                resolve(players);
            });
    });
}

const getPlayersByTeam = team => {
    return new Promise((resolve, reject) => {
        playersDB
            .orderByChild('team')
            // .indexOn('team')
            .equalTo(team)
            .once('value')
            .then((snapshot) => {
                let players = [];
                snapshot.forEach((childSnapshot) => {
                    let data = childSnapshot.val();

                    players.push(data);
                });
                resolve(players);
            });
    });
}

const getPlayersStats = name => {
    return statsDB
        .orderByChild('name')
        // .indexOn('team')
        .equalTo(name)
        .once('value')
        .then((snapshot) => {
            const players = [];
            snapshot.forEach(childSnapshot => {
                const data = childSnapshot.val();
                players.push(data);
            });
            return players;
        });
}

const getPlayersSchedule = name => {
    return scheduleDB
        .orderByChild('team')
        // .indexOn('team')
        .equalTo(name)
        .once('value')
        .then((snapshot) => {
            const schedule = [];
            snapshot.forEach(childSnapshot => {
                const data = childSnapshot.val();
                schedule.push(data);
            });
            return schedule;
        });
}

module.exports = {
    getPlayers,
    getPlayersByTeam,
    getPlayersStats,
    getPlayersSchedule 
}