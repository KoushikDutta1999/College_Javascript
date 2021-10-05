function temp() {
    var c, f;
    f = document.form1.text1.value;
    c = (f - 32) * 5 / 9;
    document.form1.text1.value = c + ' c';
}