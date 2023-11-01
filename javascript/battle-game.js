"use strict";

//arrow function
const randomDamage = _ => Math.floor(Math.random() * 10 + 1);

//arrow function
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};

//function expression
const attackPlayer = function(health) {
  return health - randomDamage();
};

//arrow function
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

//arrow function
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

//arrow function
const isDead = health => health <= 0

//function declaration
function fight(player1, player2, player1Health, player2Health) {
	while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Summer", "Winter", 40, 40);