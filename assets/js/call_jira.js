var json_data;
var jira_username="xxxx";
var jira_password="xxxx";

function displayResult(data,epic_id){
console.log(data)
      json_data = data
      for(var i=0;i<json_data['issues'].length;i++){
        issue_url = json_data['issues'][i]['self']
        console.log(issue_url)
        if(json_data['issues'][0]['fields']['status']['name'] =='closed'){
          continue;
        }
        console.log(json_data['issues'][0]['fields']['status']['name'])
        console.log(json_data['issues'][i]['fields']['summary'])
        $("#"+epic_id).append("<br>"+json_data['issues'][i]['fields']['summary'])
        //getIssue(issue_url)
      }



}
function getIssues(epic_id){
$.ajax({
   url: 'https://01.org/jira/rest/api/2/search?jql=%22Epic%20Link%22='+epic_id+'&os_username='+jira_username+'&os_password='+jira_password,
 //  crossDomain: true,
//   dataType: 'application/json',
    error: function(ts) { 
        console.log(ts.responseText)
        //alert(ts.responseText) 
   },
   success: function(data) {
       displayResult(data,epic_id)
   },
});
}
for(var i=0;i<$(".pike_epics").length;i++){
     getIssues($(".pike_epics")[i].id);
}
