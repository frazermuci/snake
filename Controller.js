//while model

//all server does is the same thing as the view, certain things
//are called upon and that's the dealio. 
//essentially the 
function Controller(model)
{
	//maybe wrap in init
	this.model = model;
};

//function
//function that yields model every time
/*
function genPassModel(controller)
{
	function* passModel()
	{
		while(controller.progressState())
		{
			yield controller.model; // or maybe bare essentials
		}
	}
	return passModel;
}

function genProgressState(controller)
{
	
	function progressState()
	{return bool if collision}
	return progressState;
}


*/