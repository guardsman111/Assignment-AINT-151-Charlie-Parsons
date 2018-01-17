var roomArray = [
	{
		title:'Room 0',
		text:'You are standing room 1',
		monster:'0',
		monsterType:'0',
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
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 2',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 3',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 4',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 5',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 6',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 7',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 8',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 9',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 10',
		text:'End Room 1',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 11',
		text:'End Room 2',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 12',
		text:'End Room 3',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 13',
		text:'Loot Room 1',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 14',
		text:'Loot Room 2',
		monster:'',
		monsterType:'',
		monsterCounter:'',
		monster2:'',
		monster2Type:'',
		monster2Counter:'',
		loot:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 15',
		text:'',
		doors:0,
		choices:[
		]
	},
	{
		title:'Room 16',
		text:'',
		doors:0,
		choices:[
		]
	}
]

var PlayerStats = [
	{
		Name:'',
		Weapon:[
		],
		Loot1:'',
		Loot2:'',
		EnemiesBeaten:0,
		Health:1,
	},
	{

	}
]

var roomLayouts = ["You are in a small brick room", "You are in a small tiled room", "You are in a small room with a tall ceiling", "You are in a medium sized room with brick walls", "You are in a medium tiled room",
"You are in a large sized room with brick walls", "You are in a large sized room with tiled walls", "You are in a long but narrow room", "You are in a wide room"];

var roomFiller = [", with several regal banners hanging off the walls.", ", which is poorly lit.", ". There is a large table in the middle of the room.", ". A window is set in the wall to the left.", ". A window is set in the wall to the right.",
". Several of the floor tiles have fallen away, revealing a deep abyss below you.", ", and several startled rats run away from you."]

var titleFiller = ["Brick room", "Tiled room", "Small room", "Room with brick walls", "Tiled room",
"Large room with brick walls", "Large room with tiled walls", "Long corridor", "Wide room"];

var monsterFiller = [" stood looking at you, slightly confused.", " wondering around the room, searching for something.", " scratching between its buttocks, unaware it is no longer alone.", " sleeping in the corner."]

var monsterType1 = [" Goblin", " Guard", "n Orc", " Giant Spider"]

var monsterType2 = ["n Orc Warboss", " Daemon", " Manticore", " Dragon", "n Owlbear"]

var lootpoor = ["a rusty old sword", "10 gold pieces that look like they might be fake", "a collection of rocks with faces drawn on them"]

var lootmid = ["a finely crafted axe", "100 gold pieces", "a glittering Gemstone"]

var lootgood = ["an ancient sword instilled with ancient magical power", "a chest full to the brim with 1000 gold pieces", "a Diamond"]

var ending = Math.floor(Math.random() * (2 - 0 + 1)+ 0); //aids in deciding which end room will complete the adventure
