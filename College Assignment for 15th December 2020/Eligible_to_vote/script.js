function cal(){
    var current=new Date().getFullYear();
    var year=current-document.form1.Year.value;
    var id=document.form1.national.value;
    if (year>=18&&id=="Indian")
        document.write("Eligible to Vote");
    else
        document.write("Not Eligible to Vote");
}