//this is the snake.

//enum that defines directions
var direction = {UP:1, DOWN:2, LEFT:3, RIGHT:4};

//initializes bodyList
function genBodyList()//start at some coords
{
	b1 = new Body(4,3,"black",direction.RIGHT);
	b2 = new Body(3,3,"black",direction.RIGHT);
	b3 = new Body(2,3,"black",direction.RIGHT);
	b3.isLast =1;
	return  [b1,b2,b3];
}

//generates function addBody which adds body to bodyList
function giveAddBody(snake)//add in oppo direction of last body. Edge case:
							//what happens when the last body is on a change direction?
							//probably just add in oppo direction.
{
	//probs don't wanna pass in body, probs just construct new body huh.
	var func = function(body)
	{
		snake.body[snake.body.length-1].isLast = 0;
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
		for(var i = 0; i < snake.body.length; i++)
		{
			snake.body[i].progress(snake);
		}
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
function Snake()
{
	//maybe initialize with two or three and don't pass in
	this.body = genBodyList();
	this.XYQueue = [];
	this.changeDirection = giveChangeDirection(this);
	this.addBody = giveAddBody(this);
	this.addXY = giveAddXY(this);
	this.removeXY = function(){this.body = this.body.pop();}
	this.move = giveMove(this);
};