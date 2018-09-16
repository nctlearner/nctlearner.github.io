var members = [];

//function to create array of member ojects from csv file
function CSVtomembers(file)
{
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function()
  {
    if(rawFile.readyState === 4)
    {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
      	var allText = rawFile.responseText;
        members = allText.split('\n');
        var headers = members[0].split(',');
				var jsonObj = [];
				var al = members.length;

				for(var i = 1; i < members.length; i++) 
				{
				  var data = members[i].split(',');
				  var obj = {};
				  for(var j = 0; j < headers.length; j++) 
				  {
				  	var position = data[j].split(';');
				  	for(var k = 0; k < position.length; k++) 
				  	{
				   		obj[headers[j]] = position[k];
				  	}
				  }
				  jsonObj.push(obj);
				}
      members.push(jsonObj);      
      }
    }
  };
  rawFile.send(0);
}

//data structure to store learning of user 
var learned = members;


