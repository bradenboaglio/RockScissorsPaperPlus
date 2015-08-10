var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.17) {
	computerChoice = "rock";
} else if(computerChoice <= 0.34) {
	computerChoice = "paper";
} else if(computerChoice <= 0.51) {
	computerChoice = "scissors";
}	else if(computerChoice <= 0.67) {
	computerChoice = "water";
} else if(computerChoice <= 0.84) {
	computerChoice = "chopsticks";
} else {
	computerChoice = "meatball";
}

console.log("Computer: " + computerChoice);

var compare = function (choice1, choice2) {
    if (choice1 === choice2)  {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else if (choice2 === "paper") {
            return "paper wins";
        } else if (choice2 === "water") {
						return "Rock is not hurt by water, water hits the ground, rock wins!";
				} else if (choice2 === "chopsticks") {
						return "Rock can not smash chopsticks, and chopsticks can not hurt rock, it's a tie!"
				} else {
						return "Rock is covered by meatball, meatball creates a soft layer of padding on rock, meatball wins!"
				}
    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else if (choice2 === "scissors") {
            return "scissors wins";
        } else if (choice2 === "water") {
						return "Paper is doused by water, water weakens paper and paper falls apart, water wins!"
				} else if (choice2 === "chopsticks") {
						return "Paper is an enigma to chopsticks, chopsticks is baffled and stunned, paper wraps chopsticks, paper wins!"
				} else {
						return "Paper can not wrap meatball for long because of the sauce, meatball can not cover paper because paper is so big, it's a tie!"
				}
    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else if (choice2 === "paper") {
            return "scissors wins";
        } else if (choice2 === "water") {
						return "Scissors can do no harm to water, water just falls right off scissors, it's a tie!"
				}	else if (choice2 === "chopsticks") {
						return "Scissors tries to chop chopsticks, chopsticks are too strong and break scissors, chopsticks wins!"
				}	else {
						return "Scissors snips the meatball in half, meatball hits the ground with a plop, scissors wins!"
				}
    }	else if (choice1 === "water") {
				if (choice2 === "rock") {
						return "Water attacks rock, rock is not hurt by water, water hits the ground, rock wins!"
				}	else if (choice2 === "paper") {
						return "Water douses paper, paper is weakened and falls apart, water wins!"
				} else if (choice2 === "scissors") {
						return "Water falls right off scissors, scissors can do no harm to water, it's a tie!"
				}	else if (choice2 === "chopsticks") {
						return "Water attacks chopsticks, chopsticks absorb water, water is no more, chopsticks wins!"
				}	else {
						return "Water submerges meatball, meatball loses its flavor and zest, water wins!"
				}
		}	else if (choice1 === "chopsticks") {
				if (choice2 === "rock") {
						return "Chopsticks can not hurt rock, rock can not smash chopsticks, it's a tie!"
				}	else if (choice2 === "paper") {
						return "Chopsticks attacks paper, paper is an enigma to chopsticks, chopsticks is baffled and stunned, paper wraps chopsticks, paper wins!"
				}	else if (choice2 === "scissors") {
						return "Chopsticks lodges itself in the blades of scissors, scissors are not sharp enough to cut through, chopsticks wins!"
				}	else if (choice2 === "water") {
						return "Chopsticks absorb water, water is no more, chopsticks wins!"
				}	else {
						return "Chopsticks tries to pick up meatball, meatball is too meaty for chopsticks to handle, meatball wins!"
				}
		}
};

compare(userChoice, computerChoice);
