function prime(){
    var i,n,p=0;

    n=parseInt(document.form1.n1.value);
    for(i=2;i<=n/2;i++) 
    {
        if (n%i==0)
        {
            // document.form1.r.value="Not prime";
            p=1
            break;
        }
        //else
            //p=0;
    }
    if(p==0)
        document.form1.r.value="Prime";
    else
        document.form1.r.value="not prime";
}