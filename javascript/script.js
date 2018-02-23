var api_key= "dcfe7c2cbea64859b33cdc5e90475933";
$("button").on("click", function(event){
event.preventDefault();
console.log(0);
 var trimDate= function(date){
   var trimDate ='';
   for (var i = 0; i < date.length; i++) {
     if (date[i]=="-") {
       console.log("-");
     }else{
       trimDate+=date[i];
     }
   }
   return trimDate;
 }
 console.log($("#startYear").val().trim());
 var searchTerm = $("#search").val().trim();
 var numberRecord = $("#records").val().trim();
 var startYear = trimDate($("#startYear").val().trim());
 console.log(startYear);
 var endYear = trimDate($("#endYear").val().trim());
 console.log(endYear);
var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&page=0&sort=newest&?begin_date="+startYear+"&?end_date="+endYear+"&api-key="+api_key;
console.log(queryURL);
 $.ajax({
   url : queryURL,
   method: "GET"
 }).then(function(res){
   console.log(res)
    if (numberRecord=="") {
      var res_doc=res.response.docs.length;
    }else{
      res_doc=numberRecord;
    }
   for (var i = 0; i < res_doc; i++) {
     var newDiv= $("<div>");
     var title=$("<div>").text(res.response.docs[i].headline.main);
     var date=$("<span>").text(res.response.docs[i].pub_date);
     var urllink=$("<a>").attr("href", res.response.docs[i].web.url);
     var snippet=$("<div>").text(res.response.docs[i].snippet);
     urllink.append(snippet);
     newDiv.append(title, date, urllink);
     $(".panel-body").append(newDiv);
     console.log(newDiv);
   }
 })
});
