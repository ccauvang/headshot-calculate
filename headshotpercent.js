const normalK = document.getElementsByClassName('normalKills')[0];
const headshotK = document.getElementsByClassName('headshotKills')[0];
const screen = document.getElementsByClassName('screen')[0];
const historyTable = document.getElementsByClassName('gamehistory')[0]
var historyCount = -1;
var gameCount = 0;

var information = '';
var oldInformation = '';

var calcul = function() {
  var signal = '🔻';
  
  const totalKills = Number(normalK.value) + Number(headshotK.value);
  const headshotPercent = ((Number(headshotK.value) / totalKills) * 100).toFixed(2);
  const normalPercent = ((Number(normalK.value) / totalKills) * 100).toFixed(2);
  
  if (headshotPercent >= normalPercent) signal = '🔺'

  information = `Match ${gameCount} | total Kills: ${totalKills} <br/> > Headshot/Normal %: ${signal}${headshotPercent}%/${normalPercent}% <br/>`;

  if (totalKills != 0) {
    gameCount++
    screen.innerHTML = information



    if (historyCount == 6) {
      historyCount = 0
      historyTable.innerHTML = oldInformation;
    } else {
      historyTable.innerHTML += oldInformation;
    };
    historyCount++
    oldInformation = information
  }
};