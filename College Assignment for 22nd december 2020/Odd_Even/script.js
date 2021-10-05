function calc()
		{
			var odd=0,even=0,n,r;
			n=document.f1.num.value;
			while(n>0)
			{
				r=parseInt(n%10);
				if(r%2==0)
					even++;
				else
					odd++;
				n=parseInt(n/10);
				document.f1.o.value=odd;
				document.f1.e.value=even;
			}
		}