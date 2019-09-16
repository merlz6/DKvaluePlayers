# dkvalueplayers

Find value draft kings players - NodeJS - information imported through CSV

Requires npm install csv-parser

Reason For creation:

One of the most difficult part of playing daily fantasy sports is the pure number of players the user doesn't know anything about
and therefore doesn't consider putting in there lineup.
I wanted to create a way to filter players by whether or not they're salary for the days competition is justified to help me
find players who can put up the numbers needed to win.
One of the biggest misconceptions I believe in DFS is the need for one the big shots in each competition(most expensive salary's).
This is not always true as it really comes down to, is what they cost and what they put up. 
For instance if a player needs around 160 points to win with $60,000 to draft with a 5,000 player should put up (60,000 / 160) * 5000 = 13.3 pts
This will filter out the player whose avg points per competition is greater than than the expected points based on salary and points to win.

DraftKings currently does not have a public API, however you can export a csv of the player list and copy the csv data into the
data.csv file. 
