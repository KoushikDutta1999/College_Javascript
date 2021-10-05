var time=new Date();
var hour=time.getHours();

if(hour==12)
    document.write(time.getHours()+'-'+time.getMinutes()+'-'+time.getSeconds()+'PM');
else if(hour>12)
    document.write(hour%12+'-'+time.getMinutes()+'-'+time.getSeconds()+'PM');
else
    document.write(time.getHours()+'-'+time.getMinutes()+'-'+time.getSeconds()+'AM');
