var c3=00;
var c2=00;
var c1=00;
var t3;
function start() 
{
	document.getElementById('t3').value=c3;
	document.getElementById('t2').value=c2;
	document.getElementById('t1').value=c1;
	document.getElementById('hmin').innerHTML=c1;
	document.getElementById('hsec').innerHTML=c2;
	document.getElementById('hmsec').innerHTML=c3;

	c3=c3+1;

	t3=setTimeout("start()",10);
	if (c3===100)
	{
		c3=00;
		c2=c2+1;

		if(c2==59)
		{
			c2=0;
			c1=c1+1;
		}
	}
}
function stop() 
{
	clearTimeout(t3);
}
function reset()
 {
	stop();
	c1=c2=c3=00;
	document.getElementById('t3').value=c3;
	document.getElementById('t2').value=c2;
	document.getElementById('t1').value=c1;
	document.getElementById('hmin').innerHTML=c1;
	document.getElementById('hsec').innerHTML=c2;
	document.getElementById('hmsec').innerHTML=c3;
}
function lap() 
{
	var h=document.createElement("h3");
	h.innerHTML=c1+" : "+c2+ " : "+c3;

	document.getElementById("divlap").appendChild(h);
}