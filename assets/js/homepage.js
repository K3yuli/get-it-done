// var getUserRepos = function(user) {
//     fetch("https://api.github.com/users/octocat/repos").then(function(response) {
//         response.json().then(function(data) {
//             console.log(data);
//         });gy    
    
//     });

//     // this console log would print first because of asynchronous behavior
//     // will print first because its not dependent on any asynchronous actions
//     console.log("outside");
// };

var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

getUserRepos()

var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);