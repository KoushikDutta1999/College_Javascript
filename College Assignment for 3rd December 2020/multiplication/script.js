function display()
	{
		var a=document.form1.text1.value;
		document.write("<table border=2>");
		var i;
		for(i=1;i<=10;i++)
		{
			document.write("<tr><td>"+a +"*"+i+"<td>"+"="+"<td>"+a*i);
			document.write("<br>");
		}
	}