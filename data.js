// Array that contains all the information about individual rooms within the dungeon
var roomArray = [
	{
		title:'Room 0',
		text:'You are standing room 1',
		visited:0,
		monster:'0',
		monsterType:'0',
		loot:'',
		lootfiller:'',
		doors:1,
		choices:[
			{
				text:'Go through door 1',
				index:1
			}
		]
	},
	{
		title:'Room 1',
		text:'You are standing room 2',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 2',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 3',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 4',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 5',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 6',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 7',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 8',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 9',
		text:'You are standing room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 10',
		text:'End Room 1',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 11',
		text:'End Room 2',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 12',
		text:'End Room 3',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 13',
		text:'Loot Room 1',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 14',
		text:'Loot Room 2',
		visited:0,
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		lootfiller:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 15',
		visited:0,
		text:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 16',
		visited:0,
		text:'',
		doors:0,
		choices:[
		]
	}
]

// Array that contains all of the player's equipment choices and health
var PlayerStats = [
	{
		Name:'',
		Weapon:[
			{
				Id:-1,
			},
			{
				Id:-1,
			},
			{
				Id:-1,
			},
			{
				Id:-1,
			}
		],
		Loot:'',
		EnemiesBeaten:0,
		RoomsVisited:-1,
		EnemiesBeatenText:'',
		Health:1,
		Potion:0,
	},
	{

	}
]

// Various filler text arrays used when generating rooms and monsters
var roomLayouts = ["You are in a small brick room", "You are in a small tiled room", "You are in a small room with a tall ceiling", "You are in a medium sized room with brick walls", "You are in a medium tiled room",
"You are in a large sized room with brick walls", "You are in a large sized room with tiled walls", "You are in a long but narrow room", "You are in a wide room", "You are in a room that is strangely homely", "You enter a room with a tall ceiling", "You enter a room that looks like it may have been an ancient armoury"];

var roomFiller = [", with several regal banners hanging off the walls.", ", which is poorly lit.", ". There is a large table in the middle of the room.", ". A window is set in the wall to the left.", ". A window is set in the wall to the right.",
". Several of the floor tiles have fallen away, revealing a deep abyss below you.", ", and several startled rats run away from you.", ". You immediately notice the pile of human bones in the middle of the floor in front of you.", ", which has footprints up the walls and across the ceiling.", ", with a strange purple glow pulsing from an invisible source."]

var roomFiller2 = ["", "", " You can smell rotten flesh in the air.", "You can hear a rumbling sound in the distance, but it soon fades.", " The door creaks closed behind you, making you jump a little.", " The air is musty, as though it hasn't moved in centuries.", " You shiver as a cold breeze washes over your spine."]

var titleFiller = ["Brick room", "Tiled room", "Small room", "Room with brick walls", "Tiled room",
"Large room with brick walls", "Large room with tiled walls", "Long corridor", "Wide room", "Homely Room", "Room with a tall ceiling", "Old Armoury"];

var monsterFiller = [" stood looking at you, slightly confused. It recovers in an instant and jumps towards you.", " wondering around the room, searching for something. It turns as the door closes and immediately notices your entry.", " scratching between its buttocks, unaware it is no longer alone. You run head first towards it, taking it completely off guard.", " sleeping in the corner. It jolts awake as the door closes with a loud bang, and gets up to attack.",
" chained to the floor in the centre of the room. You will have to fight it to get past."]

var monsterType1 = [" Goblin", " Guard", "n Orc", " Giant Spider"]

var monsterType2 = ["n Orc Warboss", " Daemon", " Manticore", " Dragon", "n Owlbear"]

var lootpoor = ["is a rusty old sword", "are 10 gold pieces that look like they might be fake", "is a collection of rocks with faces drawn on them"]
var lootpoorstat = ["A rusty old sword ", "10 gold pieces that look like they might be fake ", "A collection of rocks with faces drawn on them "]

var lootmid = ["is a finely crafted axe", "is a pile of 100 gold pieces", "is a glittering Gemstone"]
var lootmidstat = ["A finely crafted axe ", "100 gold pieces ", "A glittering Gemstone "]

var lootgood = ["is an ancient sword instilled with ancient magical power", "is a chest full to the brim with 1000 gold pieces", "is a Diamond"]
var lootgoodstat = ["An ancient sword instilled with ancient magical power ", "A chest full to the brim with 1000 gold pieces ", "A Diamond "]

var ending = Math.floor(Math.random() * (2 - 0 + 1)+ 0); //aids in deciding which end room will complete the adventure
