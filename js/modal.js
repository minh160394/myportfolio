 $(function() {
    $(".video").click(function () {
      var newhtml= [];
      var array;
      var theModal = $(this).data("target"),      
      videoSRC = $(this).attr("data-video"),
      title = $(this).attr("data-name"),
      time = $(this).attr("data-time"),
      des = $(this).attr("data-des"),
      tool = $(this).attr("data-tool"),
      link = $(this).attr("data-link"),
      github = $(this).attr("data-github"),
      videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
      array = tool.split(',');
      $.each(array, function(index, value){
           newhtml.push('<li class="list-group-item text-left"><i class="fa fa-check-square-o iconeskill" style="color:#FFCC66;"></i>' +value+ '</li>');
      });
      $(".modal-tool").html(newhtml.join(""));
      $(".modal-title").html("<h2>" + title + "</h2>");
      $(".modal-time").html("<span>" + time + "</span>");
      $(".modal-description").html("<p>" + des+ "</p>");
      if(link != "none"){
      $(".modal-link").html('<a href= "' + link + '" class="btn btn-warning" role="button" target="_blank" >Play it</a>');
      }else{
       $(".modal-link").html("<a></a>");
      }
      $(".modal-github").html('<a href="' + github + '" class="btn btn-success" role="button" target="_blank"><i class="fa fa-github mr-3 ml-3" style="font-size: 24px" ></i></a>');
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
      });
      //turn video off when modal off
       $("#videoModal").on('hidden.bs.modal', function () {
       $("#videoModal iframe").attr("src", ' ');
         }); 
    });
 });
