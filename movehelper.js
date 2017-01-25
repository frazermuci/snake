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
		case 1://direction.UP:
		{
			dy = y-1;
			break;
		}
		case 2://direction.DOWN:
		{
			dy = y+1;
			break;
		}
		case 3://direction.LEFT:
		{
			dx = x+1;
			break;
		}
		case 4://direction.RIGHT:
		{	
			dx = x-1;
			break;
		}
	}
	return [dx,dy];
}

function moveByDirection(x, y, dir)
{
	var dx = x;
	var	dy = y;
	switch(dir)
	{
		case 1://direction.UP:
		{
			dy = y+1;
			break;
		}
		case 2://direction.DOWN:
		{
			dy = y-1;
			break;
		}
		case 3://direction.LEFT:
		{
			dx = x-1;
			break;
		}
		case 4://direction.RIGHT:
		{	
			dx = x+1;
			break;
		}
	}
	return [dx,dy];
}