//used to move x or y coordinate appropriately
//according to that body's direction
/*function moveByDirection(body)
{
	switch(body.direction)
	{
		case direction.UP:
		{
			body.y++;
			break;
		}
		case direction.DOWN:
		{
			body.y--;
			break;
		}
		case direction.LEFT:
		{
			body.x--;
			break;
		}
		case direction.RIGHT:
		{	
			body.x++;
			break;
		}
	}
}
*/
function moveByDirection(x, y, dir)
{
	var dx = x;
	var	dy = y;
	switch(dir)
	{
		case direction.UP:
		{
			dy = y+1;
			break;
		}
		case direction.DOWN:
		{
			dy = y-1;
			break;
		}
		case direction.LEFT:
		{
			dx = x-1;
			break;
		}
		case direction.RIGHT:
		{	
			dx = x+1;
			break;
		}
	}
	return [dx,dy];
}

//generates function that progresses a body
function giveProgress(body)
{
	/*var func = function(snake)
	{
		//first moves x or y coord
		moveByDirection(body);
		//body checks all "turning points" in XYQueue to see
		//if it needs to change directions
		for(var i = 0; i < snake.XYQueue.length; i++)
		{
			var tup = snake.XYQueue[i]
			if(body.x == tup[0] && body.y == tup[1])
			{
				body.direction = tup[2];
				//dequeues "turning point" if the tail arrives at it
				if(body.isLast)
				{
					snake.removeXY();
				}
			}
		}
	}*/
	var func = function(snake)
	{
		var head = snake.body[0];
		var xy = moveByDirection(head.x, head.y, head.direction);
		for(var i = 1; i < snake.body.length; i++)
		{
			snake.body[i].x = snake.body[i-1].x
			snake.body[i].y = snake.body[i-1].y
		}
		head.x = xy[0];
		head.y = xy[1];
	}
	return func;
}

//TODO
/*
function giveDraw(body)
{
	
}
*/
//Flyweight this????? So that server can handle it????
function Body(x, y, color, direction)
{
	this.isLast = 0;
	this.direction = direction;
	this.x = x;
	this.y = y;
	this.color = color;
	this.progress = giveProgress(this);
	//this.draw = giveDraw(this);
};
