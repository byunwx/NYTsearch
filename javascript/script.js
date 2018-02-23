<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Quoth the Giphy</title>
</head>

<body>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
  var api_key= "dcfe7c2cbea64859b33cdc5e90475933";

  var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&page="+0+"&sort=newest&api-key="+api_key;


 searchbutton.on("click", function(){

   var searchTerm = $inputsearchTerm.val().trim();
   var numberRecord = $inputnumberR.val().trim();
   var startYear = $startyear.val().trim();
   var endYear = $endyearinput.val().trim();



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
       box.append(newDiv);
     }
    
   })

 })
  </script>
</body>

</html>
