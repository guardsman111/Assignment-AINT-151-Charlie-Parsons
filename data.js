var roomArray = [
	{
		title:'Room 1',
		text:'You are standing room 1',
		monster:'0',
		monsterType:'0',
		choices:[
			{
				text:'Go to room 2',
				index:1
			}
		]
	},
	{
		title:'Room 2',
		text:'You are standing room 2',
		monster:'',
		monsterType:'',
		choices:[
			{
				text:'Go to room 1',
				index:0
			},
			{
				text:'Go to room 3',
				index:2
			}
		]
	},
	{
		title:'Room 3',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		choices:[
			{
				text:'Go to room 2',
				index:1
			}
		]
	},
	{
		title:'Room 3',
		text:'You are standing room 3',
		monster:'',
		monsterType:'',
		choices:[
			{
				text:'Go to room 2',
				index:1
			}
		]
	}
    //background image placeholder link https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0kjHIH6/videoblocks-cartoon-stone-wall-background_rdzejwsnez_thumbnail-full01.png
]

var roomLayouts = ["You are in a small brick room", "You are in a small tiled room", "You are in a small room with a tall ceiling", "You are in a medium sized room with brick walls", "You are in a medium tiled room",
"You are in a large sized room with brick walls", "You are in a large sized room with tiled walls", "You are in a long but narrow room", "You are in a wide room"];

var roomFiller = [", with several regal banners hanging off the walls.", ", which is poorley lit.", ". There is a large table in the middle of the room.", ". A window is set in the wall to the left.", ". A window is set in the wall to the right.",
". Several of the floor tiles have fallen away, revealing a deep abyss below you.", ", and several startled rats run away from you."]

var monsterFiller = [" stood looking at you, slightly confused.", " wondering around the room, searching for something.", " scratching between its buttocks, unaware it is no longer alone.", " sleeping in the corner."]

var monsterType = ["Goblin", "Daemon", "Manticore", "Dragon", "Guard"]
