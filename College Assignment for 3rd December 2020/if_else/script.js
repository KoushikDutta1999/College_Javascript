function marksgrade(){
	var a,b;
	a=document.form1.text1.value;
	if(a>=80)
		b="Distriction";
	else if (a>=60&&a<80)
		b="First Division";
	else if (a>=50&&a<60)
		b="Second Division";
	else if (a>=40&&a<50)
		b="Third Division";
	else
		b="Fail";
	document.form1.text1.value=b;
}