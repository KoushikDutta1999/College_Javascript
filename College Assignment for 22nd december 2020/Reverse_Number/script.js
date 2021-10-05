function reverse(){
    var a,no,b,temp=0;
    no=document.form1.text1.value;
    b=no;
    while(no>0)
    {
    a=no%10;
    no=parseInt(no/10);
    temp=temp*10+a;
    }
    document.form1.text1.value=temp;
}