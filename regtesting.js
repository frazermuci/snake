function printAllBody(s)
{
	for(var i = 0; i < s.bodyList.length; i++)
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
	console.log(b.direction);
	var s = new Snake();
	s.addBody(new Body(1,3,"black", 4));
	console.log(s.body);
	console.log(s);
	console.log("progressing");	
	printAllBody(s);
	s.move();
	printAllBody(s);
}

regTest1();