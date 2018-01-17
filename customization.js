var kitTaken = 0;

function plate()
{
	var element = document.getElementById('plate');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Plate Armour";
	PlayerStats[0].Health += 2;
	kitTaken = kitTaken + 1;
	kitFull();
}

function shield()
{
	var element = document.getElementById('shield');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Shield";
	PlayerStats[0].Health += 1;
	kitTaken = kitTaken + 1;
	kitFull();
}

function sword()
{
	var element = document.getElementById('sword');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Sword";
	PlayerStats[0].Weapon.push({Id: 0});
	kitTaken = kitTaken + 1;
	kitFull();
}

function axe()
{
	var element = document.getElementById('axe');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Axe";
	PlayerStats[0].Weapon.push({Id: 1});
	kitTaken = kitTaken + 1;
	kitFull();
}

function dagger()
{
	var element = document.getElementById('dagger');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Possessed Dagger";
	PlayerStats[0].Weapon.push({Id: 2});
	kitTaken = kitTaken + 1;
	kitFull();
}

function spear()
{
	var element = document.getElementById('spear');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Draconic Spear";
	PlayerStats[0].Weapon.push({Id: 3});
	kitTaken = kitTaken + 1;
	kitFull();
}

function runeAxe()
{
	var element = document.getElementById('runeAxe');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Rune Axe";
	PlayerStats[0].Weapon.push({Id: 4});
	kitTaken = kitTaken + 1;
	kitFull();
}

function potion()
{
	var element = document.getElementById('potion');
	element.disabled = true;
	document.getElementById('Customization').innerHTML += " Potion of Healing";
	PlayerStats[0].Potion = 1;
	kitTaken = kitTaken + 1;
	kitFull();
}

function kitFull()
{
	if (kitTaken > 3)
	{
		element = document.getElementById('playerCustom')
		element.innerHTML = "<button type='button' id='start' onClick='startGame()'>Start Game</option>"
	}
}
