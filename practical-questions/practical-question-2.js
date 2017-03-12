/*
The values that are being assigned to one and two are being assigned at a timeout of 1000,1500 respectively. 
This is the reason behind the output being 'wrong answer NAN' as one and two remain undefined. 
To fix this, the cb function can be called at a timeout of more than 1500 (ex 1501). 
There is an inline test function to check multiple timeouts. 
Please open console to see results. 
*/

function remoteMathService(cb) {
  var one;
  var two;

  callOneService(function(err, num) {
    one = num;
  });

  callTwoService(function(err, num) {
    two = num;
  });

  //Test
  var timeouts = [undefined, 'abc', null, 1100, 1400, 1499, 1500, 1501, 1600],
    i = 0;
  var expectedResult = 'correct';
  for (i; i < timeouts.length; i++) {
    test(cb, timeouts[i], expectedResult);
  }

  function test(cb, timeout, expected) {
    setTimeout(function() {
      var a = cb(undefined, one + two);
      if (a === expected) {
        console.log("Expected = " + expected + " Result = " + a + " | Test for timeout " + timeout + " passed!");
      } else {
        console.log("Expected = " + expected + " Result = " + a + " | Test for timeout " + timeout + " failed!");
      }

    }, timeout);
  }
  // EOFTEST

}

function callOneService(cb) {
  setTimeout(function() {
    return cb(undefined, 1);
  }, 1000);
}

function callTwoService(cb) {
  setTimeout(function() {
    return cb(undefined, 2);
  }, 1500);
}

remoteMathService(function(err, answer) {
  if (err) console.log("error ", err);
  if (answer !== 3) {
    //console.log("wrong answer", answer);
    return answer;
  } else {
    //console.log("correct");
    return 'correct';
  }
});
