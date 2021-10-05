 //var d=new Date(year,month,day,hour,minute,seconds)
 var d=new Date();
 document.write(d);
 document.write("<br>");
 document.write(d.getTime());
  document.write("<br>");
 var month=["january", "February","March", "April","May","June" ,"July","August","September","october","November","December"];
 document.write(month[d.getMonth()]);
 document.write("<br>");
 document.write(d.getFullYear());
 document.write("<br>");
 document.write(d.getDate());
 document.write("<br>");
 document.write(d.getHours());
 document.write("<br>");
 document.write(d.getMinutes());
 document.write("<br>");
 document.write(d.getSeconds());
 document.write("<br>");
 var day=["sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
 document.write(day[d.getDay()]);
 function calage()
 {
 var d=document.form1.year.value;
 var c=new Date();
 var current=c.getFullYear();
 var age1=current-d;
 document.form1.age.value=age1;
 }