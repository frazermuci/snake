//this is the snake.



//initializes bodyList
function genBodyList(x, y, direction)//start at some coords and do not hard code
{
	var body = [];
	var dx = x;
	var dy = y;
	var xy;
	for(var i = 0; i< 3; i++)
	{
		body = body.concat([new Body(dx, dy, "black")]);
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
		var xy = changeXYAddBody(x,y,snake.direction);
		body = new Body(xy[0], xy[1], "black");
		body.isLast = 1;
		snake.body = snake.body.concat([body]);
	}
	return func;
}

//generates function move which progresses all bodies 
//in bodyList
function giveMove(snake)
{
	var func = function()
	{
		var head = snake.body[0];
		var xy = moveByDirection(head.x, head.y, snake.direction);
		for(var i = snake.body.length-1; i != 0; i--)
		{
			snake.body[i].x = snake.body[i-1].x;
			snake.body[i].y = snake.body[i-1].y;
		}
		head.x = xy[0];
		head.y = xy[1];
		
	}
	return func;
}

//check for whether or not change happens in oppo direction
function giveChangeDirection(snake)
{
	var func = function(direction)
	{
		body = snake.body[0];
		snake.direction = direction;
	}
	return func;
}

//Flyweight this????? So that server can handle it????
function Snake(x, y, direction)
{
	//maybe initialize with two or three and don't pass in
	this.body = genBodyList(x, y, direction);
	this.direction = direction;
	this.changeDirection = giveChangeDirection(this);
	this.addBody = giveAddBody(this);
	this.move = giveMove(this);
};