var num1=prompt("Enter the  1st value : ");
var num2=prompt("Enter the 2nd value :");
var a=prompt("Enter a choice ' + , - , * , / '")

 num1 = parseInt(num1);
 num2 = parseInt(num2);
switch(a)
    {
    case '+':
     result=(num1+num2);
     break;
    case '-': 
     result=(num1-num2);
     break;
    case '*': 
    result=(num1*num2);
     break;
    case '/': 
    result=(num1/num2);
     break;   
    default:alert("Erreur: opérateur inconnu");
    }
    alert(result);