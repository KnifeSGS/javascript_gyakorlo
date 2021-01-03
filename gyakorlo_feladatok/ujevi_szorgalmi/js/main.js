'use strict';

const getFetchData = async (url) => {
    let data = [];
    try {
        const response = await fetch(url);
        if (response.status > 399) {
            throw new Error('Request error')
        }
        data = await response.json();
    } catch (e) {
        console.error('Error in request', e);
    } finally {
        return data;
    }
}

const generateTeamStat = (data) => {
    const coachTemplate = `${data.Coach}`;
    const rankTemplate = `${data['FIFA ranking']}`;
    const groupTemplate = `${data.Group}`;
    document.querySelector('.data__coach').insertAdjacentHTML("beforeend", coachTemplate);
    document.querySelector('.data__rank').insertAdjacentHTML("beforeend", rankTemplate);
    document.querySelector('.data__group').insertAdjacentHTML("beforeend", groupTemplate);
}

/* getFetchData('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/teams.json')
    .then(
        data => {
            const selectedTeam = data.sheets.Teams[21];
            generateTeamStat(selectedTeam);
        },
        err => console.error(err)
    ); */

const generatePlayerList = (data) => {
    const nameTemplate = `${data.name}<br>`;
    const positionTemplate = `${data.position}<br>`;
    const clubTemplate = `${data.club}<br>`;
    document.querySelector('.player__name').insertAdjacentHTML("beforeend", nameTemplate);
    document.querySelector('.player__position').insertAdjacentHTML("beforeend", positionTemplate);
    document.querySelector('.player__club').insertAdjacentHTML("beforeend", clubTemplate);
}
    
function* loop(arr) {
    for (const item of arr) {
        yield item;
    }
}
    
/* getFetchData('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/hungary-players.json')
    .then(
        data => {
            const players = data.sheets.Players;
            const items = loop(players)
            for (let i = 0; i < players.length; i += 1) {
                const row = items.next().value;
                generatePlayerList(row);
            }
        },
        err => console.error(err)
    ); */

const teamStat = new Promise ((resolve) => {
    resolve(getFetchData('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/teams.json')
        .then(
            data => {
                return data
            }
        )
    )
})

const playerStat = new Promise ((resolve) => {
    resolve(getFetchData('https://raw.githubusercontent.com/jokecamp/FootballData/master/UEFA_European_Championship/Euro%202016/players_json/hungary-players.json')
        .then(
            data => {
                return data
            }
        )
    )    
})

Promise
    .all([teamStat, playerStat])
    .then((results) => {
        const [teamStat, playerStat] = results;
        const selectedTeam = teamStat.sheets.Teams.filter((item) => {if (item.Team == 'Hungary') {return item}});
        generateTeamStat(selectedTeam[0]);
        const players = playerStat.sheets.Players;
        const items = loop(players)
        for (let i = 0; i < players.length; i += 1) {
            const row = items.next().value;
            generatePlayerList(row);
        }
    })
    .catch((err) => {
        console.error(error)
    })