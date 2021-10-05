function calc()
		{
			var n,r=0;
			n=	document.f1.num.value;
			while(n>0)
			{
				r+=parseInt(n%10);
				n=parseInt(n/10);
			}
			document.f1.sum.value=r;
		}