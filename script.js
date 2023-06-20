var sound = new Audio("button/buttonClick.mp3");

var rawNumber;
var stackNumber;
var excessNumber;
var stack;

function isStack()
{
	if(document.getElementById("checkboxStack").checked)
	{
		return 16;
	}
	else
	{
		return 64;
	}
}

function rawToStack()
{
	sound.play();
	
	stack = isStack();
	
	rawNumber = parseInt(document.getElementById("rawNumber").value);
	
	if(isNaN(rawNumber))
	{
		rawNumber = 0;	
	}
	
	stackNumber = Math.floor(rawNumber / stack);
	excessNumber = rawNumber % stack;
  
	document.getElementById("stackNumber").value = stackNumber;
	document.getElementById("excessNumber").value = excessNumber;
}

function stackToRaw()
{
	sound.play();
	
	stack = isStack();
	
	stackNumber = parseInt(document.getElementById("stackNumber").value);
	excessNumber = parseInt(document.getElementById("excessNumber").value);
	
	if(isNaN(stackNumber))
	{
		stackNumber = 0;	
	}
	
	if(isNaN(excessNumber))
	{
		excessNumber = 0;	
	}
	
	rawNumber = (stackNumber * stack) + excessNumber;
  
	document.getElementById("rawNumber").value = rawNumber;
}