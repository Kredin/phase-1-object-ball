function gameObject() {
    let info = {
        home:{
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1 
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15 
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5 
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },

        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                   slamDunks: 10
                },
                "DeSangna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                "Brendan Haywoon": {
                    number: 33, 
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                }
            }
        }
    };
    return info;
}


function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  console.log(homeTeamName());

/* fixed code below */

function numPointsScored(player) {
    console.log("is working")
    if(gameObject()["home"]["players"][player]){
        return gameObject()["home"]["players"][player]["points"]
    }
    return gameObject()["away"]["players"][player]["points"]
    
    
        
    
    // for(let char in gameObject()["away"]["players"]) {
    //     if(char === player){
    //         return gameObject()["away"]["players"][player]["points"]
    //     }
    // }
}
console.log(numPointsScored("Alan Anderson"));


function shoeSize(player) {
    for(let char in gameObject()["home"]["players"]) {
        if(char === player){
            return gameObject()["home"]["players"][player]["shoe"]
        }
    }
    for(let char in gameObject()["away"]["players"]) {
        if(char === player){
            return gameObject()["away"]["players"][player]["shoe"]
        }
    }
}
console.log(shoeSize("Brendan Haywoon"));


function teamColors(value) {
    if(value === gameObject()["home"]["teamName"]) {
        return gameObject()["home"]["colors"]
    }else if(value === gameObject()["away"]["teamName"]) {
        return gameObject()["away"]["colors"]
    }else {
        return "Invalid Team Name"
    }
}
console.log(teamColors("Charlotte Hornets"))


function teamNames() {
    return [gameObject()["home"]["teamName"], gameObject()["away"]["teamName"]]
}
console.log(teamNames())


function playerNumbers(value) {
    if(value === gameObject()["home"]["teamName"]) {
        let nums = []
        for(let i in gameObject()["home"]["players"]) {
            nums.push(gameObject()["home"]["players"][i]["number"])
        }
        return nums
    }if(value === gameObject()["away"]["teamName"]) {
        let nums = []
        for(let i in gameObject()["away"]["players"]) {
            nums.push(gameObject()["away"]["players"][i]["number"])
        }
        return nums
    }else {
        return "Invalid Team Name"
    }
}
console.log(playerNumbers('Charlotte Hornets'))


function playerStats(player) {
    for(let char in gameObject()["home"]["players"]) {
        if(char === player){
            return gameObject()["home"]["players"][player]
        }
    }
    for(let char in gameObject()["away"]["players"]) {
        if(char === player){
            return gameObject()["away"]["players"][player]
        }
    }
}

console.log(playerStats("Mason Plumlee"))


function bigShoeRebounds() {
    let bigShoe = 0
    let player = ""
    let rebounds = 0
    for(let char in gameObject()["home"]["players"]) {
        if(bigShoe < gameObject()["home"]["players"][char]["shoe"]){
            bigShoe = gameObject()["home"]["players"][char]["shoe"]
            player = char
            rebounds = gameObject()["home"]["players"][char]["rebounds"]
        }
    }
    for(let char in gameObject()["away"]["players"]) {
        if(bigShoe < gameObject()["away"]["players"][char]["shoe"]){
            bigShoe = gameObject()["away"]["players"][char]["shoe"]
            player = char
            rebounds = gameObject()["away"]["players"][char]["rebounds"]
        }
    }
    console.log(typeof(player))
    return bigShoe + " " + player + " " + rebounds;
}

console.log(bigShoeRebounds())


function mostPointsScored() {
    let mvp = 0
    let player = ""
    for(let char in gameObject()["home"]["players"]) {
        if(mvp < gameObject()["home"]["players"][char]["points"]){
            mvp = gameObject()["home"]["players"][char]["points"]
            player = char
        }
    }
    for(let char in gameObject()["away"]["players"]) {
        if(mvp < gameObject()["away"]["players"][char]["points"]){
            mvp = gameObject()["away"]["players"][char]["points"]
            player = char
        }
    }
    return player + " " + mvp;
}

console.log(mostPointsScored())


function winningTeam() {
    let homeScore = 0
    let awayScore = 0
    for(let char in gameObject()["home"]["players"]) {
        homeScore = homeScore + gameObject()["home"]["players"][char]["points"]
        }
    for(let char in gameObject()["away"]["players"]) {
        awayScore = awayScore + gameObject()["away"]["players"][char]["points"]
        }
    
    if(homeScore > awayScore) {
        return gameObject()["home"]["teamName"]
    }else if(awayScore > homeScore) {
        return agameObject()["away"]["teamName"]
    }else {
        return "Tie"
    }
    
}

console.log(winningTeam())


function playerWithLongestName() {
    let player = "a"
    for(let char in gameObject()["home"]["players"]){
        if(player.length < char.length) {
            player = char
        }
    }
    for(let char in gameObject()["away"]["players"]){
        if(player.length < char.length) {
            player = char
        }
    }
    return player
}

console.log(playerWithLongestName())


function doesLongNameStealATon() {
    let player = "a"
    let steals = 0
    for(let char in gameObject()["home"]["players"]){
        if(player.length < char.length) {
            player = char
            steals = gameObject()["home"]["players"][char]["steals"]
        }
    }
    for(let char in gameObject()["away"]["players"]){
        if(player.length < char.length) {
            player = char
            steals = gameObject()["away"]["players"][char]["steals"]
        }
    }

    for(let char in gameObject()["home"]["players"]){
        if(steals < gameObject()["home"]["players"][char]["steals"]) {
            return false
        }
    }
    for(let char in gameObject()["away"]["players"]){
        if(steals < gameObject()["away"]["players"][char]["steals"]) {
            return false
        }
    }
    return true
}

console.log(doesLongNameStealATon())


