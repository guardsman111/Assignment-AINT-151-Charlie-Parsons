function OnLoad()
{
	Generator();
	document.getElementById('roomTitle').innerText = roomArray[0].title;
	document.getElementById('roomText').innerText = roomArray[0].text;
	for (var i = 0; i < roomArray[0].choices.length; i++)
	{
		var choiceAdd = "<button type='button' onClick='SelectRoom(" + roomArray[0].choices[i].index + ")'>" + roomArray[0].choices[i].text + "</option>";
		document.getElementById('roomChoices').innerHTML = choiceAdd;
	}
}

function Generator()
{
	for (var i = 0; i < 15; i++)
	{
		var number1 = Math.floor(Math.random() * roomLayouts.length);
		var number2 = Math.floor(Math.random() * roomFiller.length);
		var number3 = Math.floor(Math.random() * monsterType.length);
		var number4 = Math.floor(Math.random() * monsterFiller.length);
		if (i == 0)
		{
			roomArray[i].title = "Start Room";
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2];
		} else if (i <= 3)
		{
			roomArray[i].title = "Room";
			roomArray[i].text = roomLayouts[number1] + roomFiller[number2];
			roomArray[i].monster = Math.floor(Math.random() * (2 - 0 + 1)+ 0);
			roomArray[i].monsterType = monsterType[number3];
			roomArray[i].monsterText = "There is a " + roomArray[i].monsterType + monsterFiller[number4];
		}
	}
}

function SelectRoom(roomIndex)
{
	var index = roomIndex;
	document.getElementById('roomTitle').innerText = roomArray[index].title;
	document.getElementById('roomText').innerText = roomArray[index].text;
	document.getElementById('roomChoices').innerHTML = '';
	for (var i = 0; i < roomArray[index].choices.length; i++)
	{
		var choiceAdd = "<button type='button' onClick='SelectRoom(" + roomArray[index].choices[i].index + ")'>" + roomArray[index].choices[i].text + "</option>";
		document.getElementById('roomChoices').innerHTML += choiceAdd;
	}
	if (roomArray[index].monster == 2)
	{
		document.getElementById('roomText').innerHTML += "</br> </br>" + roomArray[index].monsterText;
	}
}
