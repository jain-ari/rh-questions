/*The bug that I found was that in the function foo, there was a missing else clause after if. 
Because of that, even if there was an error, It would still call the callback and display the results. 
However, the correct behavior of the function should be that if there is any error, 
display just the error and not the result and display the result only if there is no error. 
I implemented an inline test where different values of both err and res and passed to the callback (cb) and if there's an error, 
it shows only error and if there's no error it shows the result*/


function doThing(cb) {

  //Test
  testErr = ['as', null, 'error', 123]; //sample errors
  testRes = ['asd', null, 'result', 456]; //sample results
  for (var i = 0; i < testErr.length; i++) {
    for (var j = 0; j < testRes.length; j++) {

      test(testErr[i], testRes[j]);
    }
  }

  function test(testErr, testRes) {
    cb(testErr, testRes);

  }

}
//EOF Test

function foo(callback) {
  doThing(function(err, res) {

    if (err) callback(err); //implemented else clause
    else {
      callback(undefined, res);
    }
    return [err, res];
  });

}

foo(function(err, res) {
  console.log('Done!. err=', err, ' : res = ', res);

});
