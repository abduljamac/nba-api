const request = require('request');
const cheerio = require('cheerio');
const database = require('../firebase/db').database

let getPlayersYahoo = (URL) => {
  request(URL, (error, response, html) => {
    var $ = cheerio.load(html);

    teamName = $('.ys-name').text()
    let teams = teamName;
    // let team = teams.replace(' ','')
    let rows = $('.stats-table tbody tr');
    rows.each((i, element) => {
      // Name
      let namee = $(element).find('td:nth-child(1) a').text()
      let name = namee.replace(/ /g,'')
      // Games Played
      let games_played = $(element).find('td:nth-child(2)').text();
      // Average minutes per game
      let min_per_game = $(element).find('td:nth-child(3)').text();
      // Field goals attempted average
      let field_goal_attempted_average = $(element).find('td:nth-child(4)').text();
      // Field goals made average
      let field_goals_made_per_game = $(element).find('td:nth-child(5)').text();
      // Field goal percentage
      let field_goal_percentage = $(element).find('td:nth-child(6)').text();
      // Free throw percentage
      let free_throw_percentage = $(element).find('td:nth-child(9)').text();
      // Three point attempted
      let three_point_attempted_per_game = $(element).find('td:nth-child(10)').text();
      // Three point made
      let three_point_made_per_game = $(element).find('td:nth-child(11)').text();
      // Three point percentage
      let three_point_percentage = $(element).find('td:nth-child(12)').text();
      // Pts per game average
      let points_per_game = $(element).find('td:nth-child(13)').text();
      // Offensive rebounds per game
      let offensive_rebounds_per_game = $(element).find('td:nth-child(14)').text();
      // Defensive rebounds per game
      let defensive_rebounds_per_game = $(element).find('td:nth-child(15)').text();
      // Rebounds per game
      let rebounds_per_game = $(element).find('td:nth-child(16)').text();
      // Assists per game
      let assists_per_game = $(element).find('td:nth-child(17)').text();
      // Steals per game
      let steals_per_game = $(element).find('td:nth-child(18)').text();
      // Blocks per game
      let blocks_per_game = $(element).find('td:nth-child(19)').text();
      // Turnovers per game
      let turnovers_per_game = $(element).find('td:nth-child(20)').text();
      // Player efficiency rating
      let player_efficiency_rating = $(element).find('td:nth-child(21)').text();
      // console.log(name)
      // players.push(player)
      // db.collection('players').doc(name).set({
      // db.collection('yahoo-players').add({
      //   'team': teams,
      //   'name': name,
      //   'games_played': games_played,
      //   'min_per_game': min_per_game,
      //   'field_goal_attempted_average': field_goal_attempted_average,
      //   'field_goals_made_per_game': field_goals_made_per_game,
      //   'field_goal_percentage': field_goal_percentage,
      //   'free_throw_percentage': free_throw_percentage,
      //   'three_point_attempted_per_game': three_point_attempted_per_game,
      //   'three_point_made_per_game': three_point_made_per_game,
      //   'three_point_percentage': three_point_percentage,
      //   'points_per_game': points_per_game,
      //   'offensive_rebounds_per_game': offensive_rebounds_per_game,
      //   'defensive_rebounds_per_game': defensive_rebounds_per_game,
      //   'assists_per_game': assists_per_game,
      //   'steals_per_game': steals_per_game,
      //   'blocks_per_game': blocks_per_game,
      //   'turnovers_per_game': turnovers_per_game,
      //   'player_efficiency_rating': player_efficiency_rating
      // })

      database.ref('stats').push({
        'team': teams,
        'name': name,
        'games_played': games_played,
        'min_per_game': min_per_game,
        'rebounds_per_game': rebounds_per_game,
        'field_goal_attempted_average': field_goal_attempted_average,
        'field_goals_made_per_game': field_goals_made_per_game,
        'field_goal_percentage': field_goal_percentage,
        'free_throw_percentage': free_throw_percentage,
        'three_point_attempted_per_game': three_point_attempted_per_game,
        'three_point_made_per_game': three_point_made_per_game,
        'three_point_percentage': three_point_percentage,
        'points_per_game': points_per_game,
        'offensive_rebounds_per_game': offensive_rebounds_per_game,
        'defensive_rebounds_per_game': defensive_rebounds_per_game,
        'assists_per_game': assists_per_game,
        'steals_per_game': steals_per_game,
        'blocks_per_game': blocks_per_game,
        'turnovers_per_game': turnovers_per_game,
        'player_efficiency_rating': player_efficiency_rating
      })


      // db.push({
      //   'team': teams,
      //   'name': name,
      //   'games_played': games_played,
      //   'min_per_game': min_per_game,
      //   'field_goal_attempted_average': field_goal_attempted_average,
      //   'field_goals_made_per_game': field_goals_made_per_game,
      //   'field_goal_percentage': field_goal_percentage,
      //   'free_throw_percentage': free_throw_percentage,
      //   'three_point_attempted_per_game': three_point_attempted_per_game,
      //   'three_point_made_per_game': three_point_made_per_game,
      //   'three_point_percentage': three_point_percentage,
      //   'points_per_game': points_per_game,
      //   'offensive_rebounds_per_game': offensive_rebounds_per_game,
      //   'defensive_rebounds_per_game': defensive_rebounds_per_game,
      //   'assists_per_game': assists_per_game,
      //   'steals_per_game': steals_per_game,
      //   'blocks_per_game': blocks_per_game,
      //   'turnovers_per_game': turnovers_per_game,
      //   'player_efficiency_rating': player_efficiency_rating
      // })

    })
  })
}

let getPlayers = (URL) => {
  request(URL, (error, response, html) => {
    var $ = cheerio.load(html);

    let teams = $('.headline__h1').text()

    let team_array = teams.split(' ')
    console.log(team_array)
    if(team_array.length >=4){
      teamm = team_array[0]  + " " + team_array[1]  + " " + team_array[2]
    } else {
      teamm = team_array[0]  + " " + team_array[1]
    }
    // let team1 = team_array[0]
    // let team2 = team_array[1]
    // let team = team1 + " " + team2
    let team = teamm.replace(/ /g,'')
    console.log(team)

    let rows = $('.Table2__table-scroller tbody tr');
    rows.each((i, element) => {

      let number = $(element).find('td:nth-child(1) span').text()
      let name = $(element).find('td:nth-child(2) a').text()
      let position = $(element).find('td:nth-child(3) span').text()
      let age = $(element).find('td:nth-child(4) span').text()
      let height = $(element).find('td:nth-child(5) span').text()
      let heights = height.replace(' ', '')
      let salary = $(element).find('td:nth-child(8) span').text()
    
      // db.collection('players').add({
      //   "team": team,
      //   "number": number,
      //   "name": name,
      //   "position": position,
      //   "age": age,
      //   "height": height,
      //   "salary": salary
      // })

      database.ref('players').push({
        "team": team,
        "number": number,
        "name": name,
        "position": position,
        "age": age,
        "height": heights,
        "salary": salary

      })
    })
  })

}

let getSchedule = (URL) => {
  request(URL, (error, response, html) => {
    var $ = cheerio.load(html);

    let schedule_team = $('.headline__h1').text()
    console.log(schedule_team)
    let team_array = schedule_team.split(' ')
    let team1 = team_array[0]
    let team2 = team_array[1]
    let teamm = team1 + " " + team2
    let team = teamm.replace(' ', '')

    let rows = $('.Table2__table-scroller tbody tr');
    rows.each((i, element) => {

      let date = $(element).find('td:nth-child(1) span').text()
      let opponent = $(element).find('td:nth-child(2) span').text()
      let time = $(element).find('td:nth-child(3) span').text()

      // db.collection('schedule').add({
      //   schedule_team,
      //   date,
      //   opponent,
      //   time
      // })

      database.ref('schedule').push({
        team,
        date,
        opponent,
        time

      })
    })
  })

}

let espnTeamNames = [
  'mem', 'utah', 'sac',
  'bos', 'bkn', 'ny',
  'phi', 'tor', 'gs',
  'lac', 'lal', 'phx',
  'chi', 'cle', 'det',
  'ind', 'mil', 'dal',
  'hou', 'mem', 'no',
  'atl', 'cha', 'mia',
  'orl', 'wsh', 'den',
  'min', 'okc', 'por',
  'sa',
];

let yahooTeamNames = [
  'gsw', 'lac', 'lal',
  'pho', 'sac', 'dal',
  'hou', 'mem', 'nor',
  'sas', 'den', 'min',
  'okc', 'por', 'uth',
  'bos', 'bro', 'nyk',
  'phi', 'tor', 'chi',
  'cle', 'det', 'ind',
  'mil', 'atl', 'cha',
  'mia', 'orl', 'was'
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function espnScraper() {
  for (var i = 0; i < espnTeamNames.length; i++) {
    URL = 'http://www.espn.com/nba/team/roster/_/name/' + espnTeamNames[i]
    await sleep(1000)
    console.log('****')
    console.log(URL)
    getPlayers(URL)
  }
}

async function espnSchedule() {
  for (var i = 0; i < espnTeamNames.length; i++) {
    URL = 'http://www.espn.com/nba/team/schedule/_/name/' + espnTeamNames[i]
    await sleep(2000)
    console.log('----')
    console.log(URL)
    getSchedule(URL)
  }
}

async function yahooScraper() {
  for (var i = 0; i < yahooTeamNames.length; i++) {
    URL = 'https://sports.yahoo.com/nba/teams/' + yahooTeamNames[i] + '/stats/'
    await sleep(1000)
    console.log('****')
    console.log(URL)
    getPlayersYahoo(URL)
  }
}

// espnScraper()
// espnSchedule()
// yahooScraper()
// getPlayers('http://www.espn.com/nba/team/roster/_/name/tor')
// getSchedule('http://www.espn.com/nba/team/schedule/_/name/tor/')
// getSats('http://www.espn.com/nba/standings/_/sort/winpercent/dir/asc/group/league')