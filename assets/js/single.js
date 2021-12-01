var issueContainerEl = document.querySelector("#issues-container");

var getRepoIssues =function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
            response.json().then(function(data) {
                displayIssues(data);
            });
        } else {
            alert("There was a problem with your request!");
        }
    });

};

var displayIssues = function(issues) {
    if(issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
    }
    
    for (var i = 0; i < issues.length; i++) {
    // create a link element to take users to the issue on github
    var issueEl = document.createElement("a");
    issueEl.classList = "list-item flex-row justify-space-between align-center";
    issuesEl.setAttribute("href", issues[i].html_url);
    issuesEl.setAttribute("target", "_blank");

    issueContainerEl.appendChild(issueEl);
    } 
    // create span to hold issues title
    var titleEl = documentElement("span");
    titleEl.appendChild(titleEl).title;

    // append container
    issueEl.appendChild(titleEl);

    // create a type element
    var typeEl = document.createElement("span");

    // check if issues is and actual issue or a oull request
    if(issue[i].pull_request) {
        typeEl.textContent = "(pull request)";
    } else {
        typeEl.textContent = "(Issues)";
    }
    // append to container
    issueEl.appendChild(typeEl);
}



getRepoIssues("facebook/react");