const game = gameObject();

function newPoints(playerName) {
  let points
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players") {
      let playerObj = teamObj[teamKey]
      for (let player in playerObj) {
        if(player === playerName) {
          points = playerObj[player].points
        }
      }
    }
  }
  }
  return points;
}
function shoeSize(playerName) {
  let size
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players") {
      let playerObj = teamObj[teamKey]
      for (let player in playerObj) {
        if(player === playerName) {
          size = playerObj[player].shoe
        }
      }
    }
  }
  }
  return size;
}
function homeTeamName() {
  return game["home"]["teamName"];
}
homeTeamName()

function awayTeamName() {
  return game["away"]["teamName"];
}
homeTeamName()

function teamColors(teamName) {
  const color = []
  if (teamName === homeTeamName()) {
    color.push(game.home.colors)
  }
  if (teamName === awayTeamName()) {
    color.push(game.away.colors)
  }
  return color;
}

function teamNames() {
  const array = []
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    array.push(teamObj.teamName)
    }
  return array;  
  }

function playerNumbers(teamName) {
  const array = []
  if (teamName === homeTeamName()) {
    for (let playerKey in game.home.players)
    array.push(game.home.players[playerKey].number)
  }
  if (teamName === awayTeamName()) {
    for (let playerKey in game.away.players)
    array.push(game.away.players[playerKey].number)
  }
  return array;
}

function playerStats(playerName) {
  let stats
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players") {
      let playerObj = teamObj[teamKey]
      for (let player in playerObj) {
        if(player === playerName) {
          stats = playerObj[player]
        }
      }
    }
  }
  }
  return stats;
}

function bigShoeRebounds() {
  let maxShoe = 0
  let reboundsShoe = 0
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players") {
      let playerObj = teamObj[teamKey]
      for (let playerKey in playerObj) {
        let player = playerObj[playerKey]
        if (player.shoe > maxShoe)
          maxShoe = player.shoe
          reboundsShoe = player.rebounds
        }
      }
    }
  }
  return reboundsShoe;
}

function teamScore(teamName) {
  let score = 0
  for (let playerName in teamName) {
  score += (teamName[playerName].points)
  }
return score
}

function mostPointsScored() {
  let maxPoints = 0
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === "players") {
      let playerObj = teamObj[teamKey]
      for (let playerKey in playerObj) {
        let player = playerObj[playerKey]
        if (player.points > maxPoints)
          maxPoints = player.points
        }
      }
    }
  }
  return maxPoints;
}



function winningTeam() {
  let homeTeamPoints = teamScore(game.home.players)
  let awayTeamPoints = teamScore(game.away.players)
  let winningTeam;
  if (homeTeamPoints > awayTeamPoints) {
    winningTeam = game.home.teamName
  }
  else {
    winningTeam = game.away.teamName
  }
  return winningTeam;
}

function playerWithLongestName() {
  let nameLength = 0
  let playerName
  for (gameKey in game) {
    let teamObj = game[gameKey]
    for (teamKey in teamObj) {
    if (teamKey === "players") {
      let playerObj = teamObj[teamKey]
      for (playerKey in playerObj) {
        if (playerKey.length > nameLength) {
        nameLength = playerKey.length
        playerName = playerKey
        }
      }
    }
    }
  }
  return playerName;
}