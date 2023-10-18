const accountId = 123456;
let accountEmail = "vaibhav@gmail.com";
var acccountPassword = "12345";
accountCity = "Jaipur";
let accountState;

  // investigation
 // accountId = 2 // not allowed

 accountEmail = "hc@hc.com";
 acccountPassword = "1234567";
 accountCity = "Bangaluru";

 console.log(accountId);

 /*
Prefer not to use var
because of issue in block scope and functional scope
 */


console.table([accountId, accountEmail, acccountPassword,accountCity, accountState]);