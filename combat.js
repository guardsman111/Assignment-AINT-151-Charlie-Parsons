function combat(index, monsterCounter, j)
{
		for (var i = 0; i < PlayerStats[0].Weapon.length; i++)
		{
			var monster = monsterCounter;
			var weapon = PlayerStats[0].Weapon[i].Id ;
			if (monster == 0 || monster == 1)
			{
				if (weapon == 0)
				{
					document.getElementById('roomText').innerHTML += "</br> </br>You quickly draw your sword and kill the" + roomArray[index].monsterType + " in one smooth motion.";
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					if (monster == 0)
					{
						PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "A Goblin, ";
					}
					else
					{
						PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "A Guard, ";
					}
				}
			}
			if (monster == 2)
			{
				if (weapon == 1)
				{
					document.getElementById('roomText').innerHTML += "</br> </br>Your axe cleaves through the Orc in an instant, killing it on the spot.";
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "An Orc, ";
				}
			}
			if (monster == 3)
			{
				if (weapon == 1)
				{
					document.getElementById('roomText').innerHTML += "</br> </br>You severe several legs before landing a killing blow on the Giant Spider, but take no injuries in the fight.";
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "A Giant Spider, ";
				}
			}
			if (monster == 5 || monster == 6)
			{
				if (weapon == 2)
				{
					document.getElementById('roomText').innerHTML += "</br> </br>Sensing the danger, your Possessed Dagger leaps from its sheath and stabs the" + roomArray[index].monsterType + " through the heart in a lightning fast movement. With a roaring shriek, the spirit possessing the dagger leaves its home, its task complete, and the dagger dissolves to dust.";
					weapon= -1;
					PlayerStats[0].Weapon[i].Id = -1;
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					if (monster == 0)
					{
						PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "A Daemon, ";
					}
					else
					{
						PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "A Manticore, ";
					}
				}
			}
			if (monster == 7)
			{
				if (weapon == 3)
				{
					weapon = -1
					document.getElementById('roomText').innerHTML += "</br> </br>You immediately draw your spear and thrust it deep into the Dragon's chest. Your Spear's magical powers slice through the Dragon's scales with ease, but you are unable to retrieve the spear from its chest.";
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].Weapon[i].Id = -1;
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "A Dragon, ";
					{break}
				}
			}
			if (monster == 4)
			{
				if (weapon == 4)
				{
					document.getElementById('roomText').innerHTML += "</br> </br>The Orc Warboss is easily felled by your Rune Axe, however the axe handle breaks during the blow.";
					weapon = -1;
					PlayerStats[0].Weapon[i].Id = -1;
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "An Orc Warboss, ";
				}
			}
			if (monster == 8)
			{
				if (weapon == 4)
				{
					document.getElementById('roomText').innerHTML += "</br> </br>The Owlbear takes a hefty axe blow to the face, and you can tell it is dead from the single hit. When you check your axe, however, you notice that the handle has splintered, and will no longer be of any use.";
					weapon = -1;
					PlayerStats[0].Weapon[i].Id = -1;
					if (j == 0)
					{
						roomArray[index].monster = 0;
					}
					if (j == 1)
					{
						roomArray[index].monster2 = 0;
					}
					PlayerStats[0].EnemiesBeaten = PlayerStats[0].EnemiesBeaten + 1;
					PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + "An Owlbear, ";
				}
			}
		}
}

function noCounter(index)
{
	if (roomArray[index].monster2 == 2)
	{
		if (PlayerStats[0].Health > 2)
		{
			document.getElementById('roomText').innerHTML += "</br> </br>It's a tough fight, but eventually you overcome your foes. You take a few heavy hits in the fight, and blood now runs from several new wounds.";
			PlayerStats[0].Health -= 2;
			roomArray[index].monster = 0;
			roomArray[index].monster2 = 0;
			PlayerStats[0].EnemiesBeaten += 2;
			PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + roomArray[index].monsterType + ", ";
			PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + roomArray[index].monster2Type + ", ";
		}
		else if (PlayerStats[0].Potion == 1)
		{
			document.getElementById('roomText').innerHTML += "</br> </br>It's a tough fight, but eventually your foes overcome you. You collapse and blackness starts to envelope you. You manage to drink your potion of healing before you pass out, and wake up several hours later to an empty room.";
			roomArray[index].monster = 0;
			roomArray[index].monster2 = 0;
			PlayerStats[0].Potion = 0;
		}
		else
		{
			document.getElementById('roomText').innerHTML += "</br> </br>It's a tough fight, but eventually your foes overcome you. You collapse and blackness envelopes you. Your adventure is over, better luck next time!";
			var choiceAdd = "<button type='button' onClick='goToGame()'>Restart</option>";
			document.getElementById('roomChoices').innerHTML = choiceAdd;
			roomArray[index].monster = 0;
			roomArray[index].monster2 = 0;
		}
	}
	if (roomArray[index].monster == 2)
	{
		if (PlayerStats[0].Health > 1)
		{
			document.getElementById('roomText').innerHTML += "</br> </br>It's a tough fight, but eventually you overcome your foe. You take a few heavy hits in the fight, and blood now runs from several new wounds.";
			PlayerStats[0].Health -= 1;
			roomArray[index].monster = 0;
			PlayerStats[0].EnemiesBeaten += 1;
			PlayerStats[0].EnemiesBeatenText = PlayerStats[0].EnemiesBeatenText + roomArray[index].monsterType + ", ";
		}
		else if (PlayerStats[0].Potion == 1)
		{
			document.getElementById('roomText').innerHTML += "</br> </br>It's a tough fight, but eventually your foe overcomes you. You collapse and blackness starts to envelope you. You manage to drink your potion of healing before you pass out, and wake up several hours later to an empty room.";
			roomArray[index].monster = 0;
			PlayerStats[0].Potion = 0;
		}
		else
		{
			document.getElementById('roomText').innerHTML += "</br> </br>It's a tough fight, but eventually your foe overcomes you. You collapse and blackness envelopes you. Your adventure is over, better luck next time!";
			var choiceAdd = "<button type='button' onClick='goToGame()'>Restart</option>";
			document.getElementById('roomChoices').innerHTML = choiceAdd;
			roomArray[index].monster = 0;
		}
	}
}
