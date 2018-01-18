function OnLoad()
{
	setStats();
	Generator();
	SelectRoom(0);
}

// Generates the entire dungeon.
// i == the room number
// Runs through each room and builds the room according to parameters outlined in the design document.
function Generator()
{
	for (var i = 0; i <= 17; i++)
	{
		var number1 = Math.floor(Math.random() * roomLayouts.length); // Random Number Generator
		var number2 = Math.floor(Math.random() * roomFiller.length); // Random Number Generator
		var number8 = Math.floor(Math.random() * roomFiller2.length); // Random Number Generator
		var number3 = Math.floor(Math.random() * monsterType1.length); // Random Number Generator
		var number4 = Math.floor(Math.random() * monsterType2.length); // Random Number Generator //Random monster 1
		var number6 = Math.floor(Math.random() * monsterType2.length); // Random Number Generator //Random monster 2
		var number5 = Math.floor(Math.random() * monsterFiller.length); // Random Number Generator
		var number7 = Math.floor(Math.random() * monsterFiller.length); // Random Number Generator
		var number9 = Math.floor(Math.random() * 2); // Random Number Generator
		if (i == 0) // generates start room
		{
			roomArray[i].title = "Start Room";
			roomArray[i].text = "You stand in front of a large wooden door, the entrance to the dungeon of Death. Inside you may find wealth, fame, danger or death. <br/><br/>Your goal is to reach the chamber of Salomon, and claim the Goblet of Life."; // Random Filler Text
		}


		else if (i == 1) // generates room 1
		{
			roomArray[i].title = titleFiller[number1];
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2] + roomFiller2[number8]; // Random Filler Text
			roomArray[i].monster = Math.floor(Math.random() * (2 - 0 + 1)+ 0); // Random Monster
			roomArray[i].monsterType = monsterType1[number3]; // Random Monster part 2
			roomArray[i].monsterCounter = number3;
			roomArray[i].monsterText = "There is a" + roomArray[i].monsterType + monsterFiller[number5]; // Monster Filler
			roomArray[i].doors = Math.floor(Math.random() * (3 - 2 + 1)+ 2); // Random Door Number between 2 and 3
			for(var j = 0; j <= roomArray[i].doors; j ++)
			{
				if (j == 0)
				{
					roomArray[i].choices.push({text: "Go back where you came from (Start Room)", index: 0}); // Room 0
				}
				else
				{
				roomArray[i].choices.push({text: "Go through door " + (j + 1), index: j+1}); // Rooms 2-4
				}
			}
		}


		else if (i <= 4) // generates room 2-4
		{
			roomArray[i].title = titleFiller[number1];
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2] + roomFiller2[number8]; // Random Filler Text
			roomArray[i].monster = Math.floor(Math.random() * (2 - 0 + 1)+ 0); // Random Monster
			roomArray[i].monsterType = monsterType1[number3]; // Random Monster part 2
			roomArray[i].monsterCounter = number3;
			roomArray[i].monsterText = "There is a" + roomArray[i].monsterType + monsterFiller[number5]; // Monster Filler
			roomArray[i].doors = 2
			for(var j = 1; j <= roomArray[i].doors; j ++)
			{
				if (j == 1)
				{
					roomArray[i].choices.push({text: "Go back where you came from", index: 1});
				}
				else
				{
					if (i != 4)
					{
						roomArray[i].choices.push({text: "Go through door " + (j), index: i + 3}); // Room 5-6
					}
					else
					{
						roomArray[i].choices.push({text: "Go through door " + (j), index: i + 4}); // Room 8
					}
				}
			}
		}


		else if (i <= 6) // generates room 5-6
		{
			roomArray[i].title = titleFiller[number1];
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2] + roomFiller2[number8]; // Random Filler Text
			roomArray[i].monster = Math.floor(Math.random() * (2 - 0 + 1)+ 0); // Random Monster
			if (roomArray[i].monster == 1)
			{
				roomArray[i].monster += 1 // Higher chance of monster because higher level room
			}
			roomArray[i].monsterType = monsterType1[number3]; // Random Monster part 2
			roomArray[i].monsterCounter = number3;
			roomArray[i].monsterText = "There is a" + roomArray[i].monsterType + monsterFiller[number5]; // Monster Filler
			roomArray[i].doors = Math.floor(Math.random() * (3 - 2 + 1)+ 2); // Random Door Number between 2 and 3
			for(var j = 1; j <= roomArray[i].doors; j ++)
			{
				if (j == 1)
				{
					roomArray[i].choices.push({text: "Go back where you came from", index: i - 3});
				}
				else
				{
					if (i == 5)
					{
						roomArray[i].choices.push({text: "Go through door " + (j), index: i + 2}); // Room 7
					}
					else
					{
						roomArray[i].choices.push({text: "Go through door " + (j), index: i + 3}); // Room 9
					}
				}
				if (j == 3)
				{
					if (i == 5){
						roomArray[5].choices[2].index = 13 // Loot Room 1
					}
					if (i == 6){
						roomArray[6].choices[2].index = 14 // Loot Room 2
					}
				}
			}
		}


		else if (i <= 9) // generates room 7-9
		{
			roomArray[i].title = titleFiller[number1];
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2] + roomFiller2[number8]; // Random Filler Text
			roomArray[i].monster = Math.floor(Math.random() * (2 - 0 + 1)+ 0); // Random chance of Monster
			if (roomArray[i].monster == 1)
			{
				roomArray[i].monster += 1 // Higher chance of monster because higher level room
			}
			roomArray[i].monster2 = Math.floor(Math.random() * (2 - 0 + 1)+ 0); // Random chance of Monster 2
			roomArray[i].monsterType = monsterType2[number4]; // Random Monster part 2
			roomArray[i].monsterCounter = number4 + 4;
			roomArray[i].monsterText = "There is a" + roomArray[i].monsterType + monsterFiller[number5]; // Monster Filler
			roomArray[i].monster2Type = monsterType2[number6]; // Random Monster part 2
			roomArray[i].monster2Counter = number6 + 4;
			roomArray[i].monster2Text = "There is also a" + roomArray[i].monster2Type + monsterFiller[number7]; // Monster Filler
			var randomloot = Math.floor(Math.random() * lootpoor.length); // Random Number Generator
			if (number9 > 0)
			{
				roomArray[i].loot = lootmidstat[randomloot];
				roomArray[i].lootfiller = lootmid[randomloot];
				roomArray[i].text +=  " In the corner there " + roomArray[i].lootfiller + ".";
			}
			roomArray[i].doors = 2
			for(var j = 1; j <= roomArray[i].doors; j ++)
			{
				if (j == 1)
				{
					if (i == 7)
					{
						roomArray[i].choices.push({text: "Go back where you came from", index: i - 2});
					}
					else if (i == 8)
					{
						roomArray[i].choices.push({text: "Go back where you came from", index: i - 4});
					}
					else
					{
						roomArray[i].choices.push({text: "Go back where you came from", index: i - 3});
					}
				}
				else
				{
					roomArray[i].choices.push({text: "Go through door " + (j), index: i + 3}); // Room 10-12
				}
			}
		}


		else if (i <= 12) // generates room 10-12
		{
			roomArray[i].title = titleFiller[number1];
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2] + roomFiller2[number8] + " The room seems to be a dead end."; // Random Filler Text
			roomArray[i].choices.push({text: "Go back where you came from", index: i - 3});
			if (ending == 0)
			{
				if (i == 10)
				{
					roomArray[i].text = "You can see the Goblet of Life stood on an Altar before you. Behind it stands a statue to the god Salomon. You pick up the goblet and take a sip, and you feel power rushing through your veins. You lift your sword and pack with renewed ease. Somehow, your way out will not be as hard as the way in."
					roomArray[i].choices.push({text: "Continue on to your destiny", index: 15});
				}
			}
			else if (ending == 1)
			{
				if (i == 12)
				{
					roomArray[i].text = "You can see the Goblet of Life stood on an Altar before you. Behind it stands a statue to the god Salomon. You pick up the goblet and take a sip, and you feel power rushing through your veins. You lift your sword and pack with renewed ease. Somehow, your way out will not be as hard as the way in."
					roomArray[i].choices.push({text: "Continue on to your destiny", index: 15});
				}
			}
			else if (ending == 2)
			{
				if (i == 11)
				{
					if (roomArray[1].doors == 3)
					{
						roomArray[i].text = "You can see the Goblet of Life stood on an Altar before you. Behind it stands a statue to the god Salomon. You pick up the goblet and take a sip, and you feel power rushing through your veins. You lift your sword and pack with renewed ease. Somehow, your way out will not be as hard as the way in."
						roomArray[i].choices.push({text: "Continue on to your destiny", index: 15});
					}
					else
					{
						roomArray[i - 1].text = "You can see the Goblet of Life stood on an Altar before you. Behind it stands a statue to the god Salomon. You pick up the goblet and take a sip, and you feel power rushing through your veins. You lift your sword and pack with renewed ease. Somehow, your way out will not be as hard as the way in."
						roomArray[i - 1].choices.push({text: "Continue on to your destiny", index: 15});
					}
				}
			}
		}


		else if (i <= 14) // generates loot rooms 1-2
		{
			roomArray[i].title = titleFiller[number1];
			roomArray[i].monster = 2 // Definite Monster
			roomArray[i].monster2 = Math.floor(Math.random() * (2 - 0 + 1)+ 0); // Random chance of Monster 2
			roomArray[i].monsterType = monsterType2[number4]; // Random Monster part 2
			roomArray[i].monsterCounter = number4 + 4;
			roomArray[i].monsterText = "There is a" + roomArray[i].monsterType + monsterFiller[number5]; // Monster Filler
			roomArray[i].monster2Type = monsterType2[number6]; // Random Monster part 2
			roomArray[i].monster2Counter = number6 + 4;
			roomArray[i].monster2Text = "There is also a" + roomArray[i].monster2Type + monsterFiller[number7]; // Monster Filler
			var randomlootvalue = Math.floor(Math.random() * lootpoor.length); // Random Number Generator
			var randomloot = Math.floor(Math.random() * lootpoor.length); // Random Number Generator
			if (randomlootvalue == 0)
			{
				roomArray[i].loot = lootpoorstat[randomloot];
				roomArray[i].lootfiller = lootpoor[randomloot];
			}
			if (randomlootvalue == 1)
			{
				roomArray[i].loot = lootmidstat[randomloot];
				roomArray[i].lootfiller = lootmid[randomloot];
			}
			if (randomlootvalue == 2)
			{
				roomArray[i].loot = lootgoodstat[randomloot];
				roomArray[i].lootfiller = lootgood[randomloot];
			}
			if (i == 13)
			{
				roomArray[i].choices.push({text: "Go back where you came from", index: 5});
			}
			if (i == 14)
			{
				roomArray[i].choices.push({text: "Go back where you came from", index: 6});
			}
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2] +  roomFiller2[number8] + " In the corner there " + roomArray[i].lootfiller + ". The room seems to be a dead end."; // Random Filler Text
		}


		else if (i == 15) // creates end room
		{
				roomArray[i].title = "End Screen";
				roomArray[i].text = "Stats <br/><br/>Enemies Vanquished: "+ PlayerStats[0].EnemiesBeaten + "<br/><br/>" + PlayerStats[0].EnemiesBeatenText + "<br/><br/>Rooms Visited (Doors gone through): "+ PlayerStats[0].RoomsVisited +"<br/><br/>Loot Collected: ";
				roomArray[i].choices.push({text: "Start over", index: 16});
		}
	}
}

// Displays each room's text on screen and then creates the buttons for the player to choose.
// Also runs combat if the there are monsters in the room.
function SelectRoom(roomIndex)
{
	PlayerStats[0].RoomsVisited = PlayerStats[0].RoomsVisited + 1;
	var index;
	index = roomIndex;
	roomArray[index].visited = 1;
	if (index == 15)
	{
		roomArray[index].text = "Stats <br/><br/>Enemies Vanquished: "+ PlayerStats[0].EnemiesBeaten + "<br/><br/>" + PlayerStats[0].EnemiesBeatenText + "<br/><br/>Rooms Visited (Doors gone through): "+ PlayerStats[0].RoomsVisited +"<br/><br/>Loot Collected: " + PlayerStats[0].Loot;
	}
	PlayerStats[0].Loot += roomArray[index].loot;
	document.getElementById('roomTitle').innerText = roomArray[index].title;
	document.getElementById('roomText').innerHTML = roomArray[index].text;
	document.getElementById('roomChoices').innerHTML = '';
	for (var i = 0; i < roomArray[index].choices.length; i++)
	{
		var nextIndex = roomArray[index].choices[i].index;
		var nextText = roomArray[index].choices[i].text;
		if (roomArray[nextIndex].visited == 1 && i != 0)
		{
			nextText += " (visited)";
		}
		var choiceAdd = "<button type='button' onClick='SelectRoom(" + nextIndex + ")'>" + nextText + "</button>";
		document.getElementById('roomChoices').innerHTML += choiceAdd;
	}
	if (index == 16)
	{
		window.location.href = ('game.html');
	}
	if (roomArray[index].monster == 2)
	{
		document.getElementById('roomText').innerHTML += "</br> </br>" + roomArray[index].monsterText;
		if (roomArray[index].monster2 == 2)
		{
			document.getElementById('roomText').innerHTML += "</br> </br>" + roomArray[index].monster2Text;
			combat(index, roomArray[index].monster2Counter,1);
			combat(index, roomArray[index].monsterCounter,0);
			noCounter(index);
		}
		else
		{
			combat(index, roomArray[index].monsterCounter,0);
			noCounter(index);
		}
	}
}

function goToHome()
{
	window.location.href = ('Home.html');
}

function goToGame()
{
	window.location.href = ('game.html');
}

// Transfers all of the player's equipment choices to the browsers memory
function startGame()
{
	localStorage.setItem('playerHealth',PlayerStats[0].Health);
	localStorage.setItem('playerPotion',PlayerStats[0].Potion);
	for (var i = 0; i < PlayerStats[0].Weapon.length; i++)
	{
		localStorage.setItem('playerWeapon' + i,PlayerStats[0].Weapon[i].Id);
	}
	window.location.href = ('index.html');
}

// Transfers all of the player's equipment choices from the browser memory back to the PlayerStats array
function setStats()
{
	PlayerStats[0].Health = localStorage.getItem('playerHealth');
	PlayerStats[0].Potion = localStorage.getItem('playerPotion');
	PlayerStats[0].Weapon.push({Id:(localStorage.getItem('playerWeapon0'))});
	PlayerStats[0].Weapon.push({Id:(localStorage.getItem('playerWeapon1'))});
	PlayerStats[0].Weapon.push({Id:(localStorage.getItem('playerWeapon2'))});
	PlayerStats[0].Weapon.push({Id:(localStorage.getItem('playerWeapon3'))});
}

function goToAbout()
{
	window.location.href = ('About.html');
}
