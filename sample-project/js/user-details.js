
//Hiding container till id verified
$('#container').hide();

//Getting URL parameter
$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
}

//Setting default Value
var id=-1;

//Getting the parameter
var id=parseInt($.urlParam('id'));

//AJAX get request to API
$.get('http://jsonplaceholder.typicode.com/users', function(result){	
checkId(result,id); 
function checkId(obj, id) {
objId = obj.indexOf(obj.find((v,i) => v.id == id)) || 0;
id=objId;
putValues(obj,id);
}
});
	
//Function to put values in respective divs
function putValues(result,id){

//Checking for proper ID
if(id!=-1){	

//Displaying the main container
$('#container').show();

//Displaying values
document.getElementById('header').innerHTML=result[id].name;
document.getElementById('name').innerHTML=result[id].name;				
document.getElementById('username').innerHTML=result[id].username;				
document.getElementById('phone').innerHTML=result[id].phone;				
document.getElementById('email').innerHTML=result[id].email;				
document.getElementById('website').innerHTML='<a href="http://www.'+result[id].website+'">'+result[id].website+'</a>';				
document.getElementById('address').innerHTML=result[id].address.street+' '+result[id].address.suite+' '+result[id].address.city+' '+result[id].address.zipcode;				
document.getElementById('company').innerHTML=result[id].company.name;				
document.getElementById('catchPhrase').innerHTML=result[id].company.catchPhrase;				
document.getElementById('bs').innerHTML=result[id].company.bs;		
document.getElementById('coordinates').innerHTML=result[id].address.geo.lat+','+ result[id].address.geo.lng;		
}
else{
	alert('Nice Try!');
	}
}


