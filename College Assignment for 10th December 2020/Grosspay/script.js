function cal() {
    var bp=Number(document.form1.bp.value);

    var da=0.25*bp;
    var hra=0.15*bp;
    var ma=0.10*bp;
    var pf=0.12*bp;
    document.form1.da.value=da;
    document.form1.hra.value=hra;
    document.form1.ma.value=ma;
    document.form1.pf.value=pf;
    document.form1.np.value=eval(bp+hra+ma+pf);
    document.form1.gp.value=document.form1.np.value-document.form1.pf.value;
}