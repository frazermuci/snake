//TODO check bounds so that it might get put somewhere else

	


function MapObject(x, y, color)
{
	this.isEdible = 0;
	this.x = x;
	this.y = y;
	this.color = color;
};

//Flyweight this????? So that server can handle it????
function Body(x, y, color)
{
	this.isLast = 0;
	this.x = x;
	this.y = y;
	this.color = color;
};