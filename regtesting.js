function printAllBody(s)
{
	for(var i = 0; i < s.body.length; i++)
	{
		console.log(s.body[i].x);
		console.log(s.body[i].y);
	}
}
function regTest1()
{
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

function regTest2()
{
	var s = new Snake();
	
}