function display() {
    var marks=[],total=0;
    marks[0]=parseInt(document.form1.n1.value);
    marks[1]=parseInt(document.form1.n2.value);
    marks[2]=parseInt(document.form1.n3.value);
    for (var i = 0; i < marks.length; i++) {
        total=total+marks[i];
    }
    document.form1.tt.value=total;
    document.form1.per.value=(total/3)+'%';
}