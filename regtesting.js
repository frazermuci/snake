/*function printAllBody(s)
{
	for(var i = 0; i < s.body.length; i++)
	{
		console.log(s.body[i].x);
		console.log(s.body[i].y);
	}
}
function regTest1()
{
	console.log("test init for snake and body")
	console.log("init");
	var b = new Body(5,3,"black", 4);
	var b2 = new Body(4,3,"black", 4);
	console.assert(b.direction == direction.RIGHT);
	var s = new Snake();
	s.addBody(new Body(1,3,"black", 4));
	console.assert(s.body.length == 4);
	console.log(s);
	console.log("progressing");	
	printAllBody(s);
	s.move();
	printAllBody(s);
}

regTest1();
*/


function testInitSnake()
{
	var s = new Snake(4,4,4);
	for(var k = 0; k < 3 ; k++)
	{
		console.assert(s.body[k].x == 4 - k && s.body[k].y == 4,
		"initialization incorrect: xy", 
		s.body[k]);
	}
	console.assert(s.body[s.body.length-1].isLast);
}
testInitSnake();

function testSnakeAddBody()
{
	var s = new Snake(4,4,4);
	s.addBody();
	console.assert(s.body[3].isLast);
	console.assert(s.body[3].x == 1 && s.body[3].y == 4);
}

testSnakeAddBody()
{}

function testSnakeMove()
{
	var s = new Snake(4,4,4);
	for(var i = 0; i < 50 ; i++)
	{
		s.move();
	}
	for(var j = 0; j < 3 ; j++)
	{
		console.assert(s.body[j].x == 4-j+50 && s.body[j].y == 4,
		"body part not moved correctly",
		s.body[j]);
	}
	s = new Snake(4,4,3);
	for(var i = 0; i < 50 ; i++)
	{
		s.move();
	}
	for(var j = 0; j < 3 ; j++)
	{
		console.assert(s.body[j].x == 4+j-50 && s.body[j].y == 4,
		"body part not moved correctly",
		s.body[j]);
	}
	s = new Snake(4,4,2);
	for(var i = 0; i < 50 ; i++)
	{
		s.move();
	}
	for(var j = 0; j < 3 ; j++)
	{
		console.assert(s.body[j].x == 4 && s.body[j].y == 4+j-50,
		"body part not moved correctly",
		s.body[j]);
	}
	s = new Snake(4,4,1);
	for(var i = 0; i < 50 ; i++)
	{
		s.move();
	}
	for(var j = 0; j < 3 ; j++)
	{
		console.assert(s.body[j].x == 4 && s.body[j].y == 4-j+50,
		"body part not moved correctly",
		s.body[j]);
	}
}
testSnakeMove();
function testChangeDirectionSnake()
{
	var s = new Snake(4,4,4);
	s.move();
	s.move();
	s.changeDirection(2);
	s.move();
	s.move();
	s.move();
	s.changeDirection(3);
	s.move();
	s.changeDirection(1);
	s.move();
	
	console.assert(s.body[0].x == 5 && s.body[0].y == 2,
				   "body not changedDirection correctly",s.body[0]);
	console.assert(s.body[1].x == 5 && s.body[1].y == 1,
				   "body not changedDirection correctly",s.body[1]);
	console.assert(s.body[2].x == 6 && s.body[1].y == 1,
				   "body not changeDirection correctly");
	
}

testChangeDirectionSnake();