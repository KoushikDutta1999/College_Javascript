function calculate() {
    var a=parseInt(document.form1.a.value);
    if ((a%4==0 && a%100!=0) || (a%400==0)) {
        var box="Leap Year";
    }
    else
    box="Not Leap Year"
    document.form1.box.value=box;
}