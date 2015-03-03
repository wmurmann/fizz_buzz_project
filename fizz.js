function fizzbuzz_1()
{
	var html = "";
	for (var i = 1; i <= 100; i++) 
	{
		if(i % 3 == 0 && i % 5 != 0)
		{
			html = html.concat("<li>Fizz</li>");
		}
		else if(i % 3 != 0 && i % 5 == 0)
		{
			html = html.concat("<li>Buzz</li>");
		}
		else if(i % 3 == 0 && i % 5 == 0)
		{
			html = html.concat("<li>FizzBuzz</li>");
		}
		else
		{
			html = html.concat("<li>"+i+"</li>");
		}
	}
	document.getElementById('fizzbuzz1').innerHTML = html;
}
function fizzbuzz_2(start,end)
{
	var html = "";
	for (var i = start; i <= end; i++) 
	{
		if(i % 3 == 0 && i % 5 != 0)
		{
			html = html.concat("<li>Fizz</li>");
		}
		else if(i % 3 != 0 && i % 5 == 0)
		{
			html = html.concat("<li>Buzz</li>");
		}
		else if(i % 3 == 0 && i % 5 == 0)
		{
			html = html.concat("<li>FizzBuzz</li>");
		}
		else
		{
			html = html.concat("<li>"+i+"</li>");
		}
	}
	document.getElementById('fizzbuzz2').innerHTML = html;
}
function fizzbuzz_3(arry)
{
	var html = "";
	for (var i = 0; i < arry.length; i++) 
	{
		if(arry[i] % 3 == 0 && arry[i] % 5 != 0)
		{
			html = html.concat("<li>Fizz</li>");
		}
		else if(arry[i] % 3 != 0 && arry[i] % 5 == 0)
		{
			html = html.concat("<li>Buzz</li>");
		}
		else if(arry[i] % 3 == 0 && arry[i] % 5 == 0)
		{
			html = html.concat("<li>FizzBuzz</li>");
		}
		else
		{
			html = html.concat("<li>"+arry[i]+"</li>");
		}
	}
	document.getElementById('fizzbuzz3').innerHTML = html;
}
//fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
function fizzbuzz_4(obj)
{
	var fizz = obj['divisibleByThree'];
	var buzz = obj['divisibleByFive'];
	var html = "";
	for (var i = 1; i <= 100; i++) 
	{
		if(i % 3 == 0 && i % 5 != 0)
		{
			html = html.concat("<li>"+fizz+"</li>");
		}
		else if(i % 3 != 0 && i % 5 == 0)
		{
			html = html.concat("<li>"+buzz+"</li>");
		}
		else if(i % 3 == 0 && i % 5 == 0)
		{
			html = html.concat("<li>"+fizz+buzz+"</li>");
		}
		else
		{
			html = html.concat("<li>"+i+"</li>");
		}
	}
	document.getElementById('fizzbuzz4').innerHTML = html;
}
//fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"});
function fizzbuzz_5(arry,obj)
{
	var fizz = obj['divisibleByThree'];
	var buzz = obj['divisibleByFive'];
	var html = "";
	for (var i = 0; i < arry.length; i++) 
	{
		if(arry[i] % 3 == 0 && arry[i] % 5 != 0)
		{
			html = html.concat("<li>"+fizz+"</li>");
		}
		else if(arry[i] % 3 != 0 && arry[i] % 5 == 0)
		{
			html = html.concat("<li>"+buzz+"</li>");
		}
		else if(arry[i] % 3 == 0 && arry[i] % 5 == 0)
		{
			html = html.concat("<li>"+fizz+buzz+"</li>");
		}
		else
		{
			html = html.concat("<li>"+arry[i]+"</li>");
		}
	}
	document.getElementById('fizzbuzz5').innerHTML = html;
}
fizzbuzz_1();
fizzbuzz_2(200,300);
fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"});
fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],{ divisibleByThree: "foo", divisibleByFive: "bar"});
