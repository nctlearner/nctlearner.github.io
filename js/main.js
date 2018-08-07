var members = [];

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
				for(var i = 1; i < arr.length; i++) 
				{
				  var data = members[i].split(',');
				  var obj = {};
				  for(var j = 0; j < data.length; j++) 
				  {
				    obj[headers[j].trim()] = data[j].trim();
				  }
				  jsonObj.push(obj);
				}
			JSON.stringify(jsonObj);
      members.push(jsonObj);      
      }
    }
  };
  rawFile.send(0);
}



alert("debug");
CSVtomembers("./members.csv");
var str = JSON.stringify(members[0]);
alert(str); // Logs output to dev tools console.


