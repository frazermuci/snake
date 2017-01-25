//this is the snake.

//enum that defines directions
var direction = {UP:1, DOWN:2, LEFT:3, RIGHT:4};

function changeXYAddBody(x, y, dir)//edge case what happens when
										 //growth happens and hits a solid object
										 //it would be use alt and make turning point
{
	var dx = x;
	var	dy = y;
	switch(dir)
	{
		case direction.UP:
		{
			dy = y-1;
			break;
		}
		case direction.DOWN:
		{
			dy = y+1;
			break;
		}
		case direction.LEFT:
		{
			dx = x+1;
			break;
		}
		case direction.RIGHT:
		{	
			dx = x-1;
			break;
		}
	}
	return [dx,dy];
}

//initializes bodyList
function genBodyList(x, y, direction)//start at some coords and do not hard code
{
	var body = [];
	var dx = x;
	var dy = y;
	var xy;
	for(var i = 0; i< 3; i++)
	{
		body = body.concat([new Body(dx, dy, "black", direction)]);
		xy = changeXYAddBody(dx,dy,direction);
		dx = xy[0];
		dy = xy[1];
	}
	body[2].isLast = 1;
	return body;
}

//generates function addBody which adds body to bodyList
function giveAddBody(snake)//add in oppo direction of last body. Edge case:
							//what happens when the last body is on a change direction?
							//probably just add in oppo direction.
							//edge case what happens when
							//growth happens and hits a solid object
							//it would be use alt and make turning point
							//other edge case: if snake grows into head of other snake
							//does it case other snake to lose?
{
	//probs don't wanna pass in body, probs just construct new body huh.
	var func = function()
	{
		lastBody = snake.body[snake.body.length-1];
		lastBody.isLast = 0;
		x = lastBody.x;
		y = lastBody.y;
		direction = lastBody.direction;
		var xy = changeXYAddBody(x,y,direction);
		body = new Body(xy[0], xy[1], "black", direction);
		body.isLast = 1;
		snake.body = snake.body.concat([body]);
	}
	return func;
}

//generates function addXY which adds a "turning point"
//to XYQueue
function giveAddXY(snake)
{
	var func = function(x,y,direction)
	{
		snake.XYQueue = [[x,y,direction]].concat(snake.XYQueue);
	}
	return func;
}

//generates function move which progresses all bodies 
//in bodyList
function giveMove(snake)
{
	var func = function()
	{
		//for(var i = 0; i < snake.body.length; i++)
		//{
		//	snake.body[i].progress(snake);
		//}
		var head = snake.body[0];
		var xy = moveByDirection(head.x, head.y, head.direction);
		for(var i = snake.body.length-1; i != 0; i--)
		{
			snake.body[i].x = snake.body[i-1].x;
			snake.body[i].y = snake.body[i-1].y;
		}
		head.x = xy[0];
		head.y = xy[1];
		console.log(snake.body)
		
	}
	return func;
}

//check for whether or not change happens in oppo direction
function giveChangeDirection(snake)
{
	var func = function(direction)
	{
		body = snake.body[0];
		body.direction = direction;
		snake.XYQueue = snake.XYQueue.concat([body.x, body.y, direction]);
	}
	return func;
}

//Flyweight this????? So that server can handle it????
function Snake(x, y, direction)
{
	//maybe initialize with two or three and don't pass in
	this.body = genBodyList(x, y, direction);
	this.XYQueue = [];
	this.changeDirection = giveChangeDirection(this);
	this.addBody = giveAddBody(this);
	this.addXY = giveAddXY(this);
	this.removeXY = function(){this.XYQueue = this.XYQueue.pop();}
	this.move = giveMove(this);
};