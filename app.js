const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const valuePlayersBasedOnCost = []
const teamsToAvoidPlaying = ['KC']
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    for(let i = 0; i < results.length; i++){

      if(results[i].AvgPointsPerGame[0] === '-'){
        //do nothing there negative pts - "FIlter negatives"
      } else {
        //avg pts a game from string to number
      let avgPtsNum = parseInt(results[i].AvgPointsPerGame)
      // Number of points needed to "pay for salary" mlb = 500 a pt , nfl 363 a pt, soccer 600 a pt
      //winning rounds usually around = soccer 100+ , mlb 120+, NFL 160+
      let numberOfPtsPerDollar = 500
      let salary = parseInt(results[i].Salary)
      // each players information
      // console.log('=====================================')
      // console.log('Name: ' + results[i].Name)
      // console.log('Position: ' + results[i].Position);
      // console.log('Salary: ' + results[i].Salary)
      // console.log('Avg Points Per Game: ' + results[i].AvgPointsPerGame)
      // console.log(results[i]['Game Info'])
      // console.log('=====================================')




        //if playerpts per dollar is greater than game ptsPerDollar show player
        if(salary / avgPtsNum < numberOfPtsPerDollar){
          valuePlayersBasedOnCost.push({
            'Name': results[i].Name,
            'Position': results[i].Position,
            'Salary' : parseInt(results[i].Salary),
            'AvgPointsPerGame' : parseInt(results[i].AvgPointsPerGame),
            'team':results[i].TeamAbbrev,
            'GameInfo': results[i]['Game Info'],
            'AvgPtsPerGameOverSalaryPtsExpected': (parseInt(results[i].AvgPointsPerGame) - (parseInt(results[i].Salary)/numberOfPtsPerDollar))
        })
        //end of if salary / avgPtsNum < numberOfPtsPerDollar
        }
        // all players in the value list
        // console.log(valuePlayersBasedOnCost)
        // all players sorted based on the number avg pts over the expected based on salary(salary / numberOfPtsPerDollar)
        let sortedList = valuePlayersBasedOnCost.sort(function(a, b){
          return a.AvgPtsPerGameOverSalaryPtsExpected - b.AvgPtsPerGameOverSalaryPtsExpected
        })
        console.log(sortedList)
      }

      console.log(results[1])
    }





  });
