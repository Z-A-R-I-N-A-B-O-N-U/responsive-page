onload = function ()
{
var CLR = ['100', '110', '001', '000', '001', '000', '001', '001', '010'],
    TMR = [   5,     2,    3,     1,     1,     1,     1,     1,     3];
AAA ();
   function AAA () 
   {
   let colors = document.getElementById ('svetafor').getElementsByTagName ('div');
   let cc = CLR.shift (); CLR.push (cc);
   let tt = TMR.shift (); TMR.push (tt);
   colors [0].style.backgroundColor = (cc.charAt (0) == 1) ? 'red' : '';
   colors [1].style.backgroundColor = (cc.charAt (1) == 1) ? 'yellow' : '';
   colors [2].style.backgroundColor = (cc.charAt (2) == 1) ? 'green' : '';
   setTimeout (AAA, tt * 500);
   }
}