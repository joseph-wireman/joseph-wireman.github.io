//#2
document.write("<h1 style = 'color:red;font-family:Tahoma;'><center>Joseph A. Wireman</center></h1>");
document.write("<h2 style = 'color:red;font-family:Garamond;'><center><i>WEB 115 - Section 0001</i></center>");

function resumePop()
{
  email = document.getElementById('email').value;
  

  flyWindow = window.open('','myPop','width=700,height=800,left=200,top=200');
  fullName = document.getElementById('fullName').value;
  phoneNum=document.getElementById('phoneNum').value;
  address = document.getElementById('address').value;

  personalString = document.getElementById('personalString').value;
  careerObjectives = document.getElementById('careerObjectives').value;
  education = document.getElementById('education').value;
  date1_1 = document.getElementById('date1-1').value;
  date1_2 = document.getElementById('date1-2').value;
  date2_1 = document.getElementById('date2-1').value;
  date2_2 = document.getElementById('date2-2').value;
  date3_1 = document.getElementById('date3-1').value;
  date3_2 = document.getElementById('date3-2').value;
  details1 = document.getElementById('details1').value;
  details2 = document.getElementById('details2').value;
  details3 = document.getElementById('details3').value;
  references = document.getElementById('references').value;
  flyWindow.document.write('<body></body>');

  css = '<style>body { font-size:12pt;font-family:verdana; }';
  css+= ' div#theLeft {clear:both;width:15%;float:left;}';
  css+= ' div#theRight {width:83%;float:right;padding-bottom:20px;padding-right:30px;}</style>';


  flyWindow.document.write(css);

  flyWindow.document.write('<div style = font-family:verdana;>'+fullName+'</div>');
  flyWindow.document.write('<div style = font-family:verdana;>'+address+' / '+phoneNum+'</div>');
  flyWindow.document.write('<div style = font-family:verdana;>'+email+'</div>');
  flyWindow.document.write('<hr size="3" width="100%" color="black">');

  flyWindow.document.write('<div id=theLeft>PERSONAL INFORMATION</div>');
  flyWindow.document.write('<div id=theRight>'+personalString+'</div>');

  flyWindow.document.write('<div id=theLeft><br></div>');
  flyWindow.document.write('<div id=theRight></div>');

  flyWindow.document.write('<div id=theLeft>CAREER OBJECTIVES</div>');
  flyWindow.document.write('<div id=theRight>'+careerObjectives+'</div>');

  flyWindow.document.write('<div id=theLeft><br></div>');

  flyWindow.document.write('<div id=theLeft>EDUCATION</div>');
  flyWindow.document.write('<div id=theRight>'+education+'</div>');

  flyWindow.document.write('<div id=theLeft><br></div>');

  flyWindow.document.write('<div id=theLeft>EMPLOYMENT EXPERIENCE</div>');

  flyWindow.document.write('<div id=theLeft><br></div>');

  flyWindow.document.write('<div id=theLeft>'+date1_1+' - '+date1_2+'</div>');
  flyWindow.document.write('<div id=theRight>'+details1+'</div>');

  flyWindow.document.write('<div id=theLeft>'+date2_1+' - '+date2_2+'</div>');
  flyWindow.document.write('<div id=theRight>'+details2+'</div>');

  flyWindow.document.write('<div id=theLeft>'+date3_1+' - '+date3_2+'</div>');
  flyWindow.document.write('<div id=theRight>'+details3+'</div>');


  flyWindow.document.write('<div id=theLeft>REFERENCES</div>');
  flyWindow.document.write('<div id=theRight>'+references+'</div>');
}
function goBack() {
    window.history.back();
}
