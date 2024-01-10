console.log('Hello student');
var test = "Testing";
var test2 = " Hard";
var both = test + test2;
alert(both.substring(0,4).toUpperCase());

function addnum()
{
	var first = 56;
	var second = 3;
	var sum = first - second;
	console.log(sum);
}
addnum();

let guest = 
{
	name:'Jon'	
};

let selection = 'name';
guest[selection] = "Juma";

console.log(guest.name);

function numcompare(a,b)
{
	return (a-b);
}
nums = new Array (4,55,64,99,52);
sortednums = nums.sort(numcompare);

console.log(sortednums);

console.log(numcompare(3,55));
console.log(42 + " monkeys doing their nonsense.\nToday!");

function changeColor (element)
{
	const currentColor = element.style.backgroundColor;
	if(currentColor == "yellow")
	{
		element.style.backgroundColor = "maroon";
	}
	else if (currentColor == "maroon")
	{
		element.style.backgroundColor = "orange";
	}
	else
	{
		element.style.backgroundColor = "yellow";
	}
}

function calcAvg(a,b,c,d)
{
	var result = (a+b+c+d) / 4;
	return result;
}
score = calcAvg(3,5,7,4);
document.write(score);

var lsMod = "This document was last modified on: ";
console.log(lsMod);
console.log(document.lastModified);
