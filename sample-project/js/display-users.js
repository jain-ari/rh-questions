//AJAX get call
$.get('http://jsonplaceholder.typicode.com/users', function(res) {

  //Function to sort by name desc	
  function sortBy(field) {
    return function(a, b) {
      if (b[field] > a[field]) {
        return 1;
      } else if (b[field] < a[field]) {
        return -1;
      }
      return 0;
    }
  }
  var i = 0;
  var table = '<table width="100%" border="1" cellspacing="0" cellpadding="5"><tr><td>Name</td><td>Username</td><td>Email</td><td>Address</td></tr>';

  var result = res.sort(sortBy("name"));
  while (result.length > i) {

    table = table + '<tr><td><a id="' + result[i].id + '" href="/details.html?id=' + result[i].id + '">' + result[i].name + '</a></td><td>' + result[i].username + '</td><td><a href="mailto:' + result[i].email + '">' + result[i].email + '</a></td><td>' + result[i].address.street + ' ' + result[i].address.suite + '<br>' + result[i].address.city + ', ' + result[i].address.zipcode + '</td></tr>';

    i++;
  }

  table = table + '</table>';
  document.getElementById('table').innerHTML = table;

}).fail(function(XHR, textStatus, errorThrown) {
  console.log(XHR, textStatus);
});
