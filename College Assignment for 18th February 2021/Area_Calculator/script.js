function calculate() {
    var a = parseInt(document.form1.a.value);
    var b = parseInt(document.form1.b.value);
    var c = parseInt(document.form1.c.value);
    var area=0.0;
    var s=0;
    s=(a+b+c)/2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    document.form1.area.value=area;
}