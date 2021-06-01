$(function() { //화면이 열리면 실행해라

    $("#slickBox").slick({
      //slick options 처리
      autoplay : true,
      prevArrow : $('.navPrevBtn'),
      nextArrow : $('.navNextBtn'),
      fade : true,
    });

    // var color = ["red", "orange", "yellow"];
    // var currentIndex = 0;
    // $("#slickBox").on("beforeChange", function () {
    //   currentIndex++;
    //   currentIndex %= color.length;
    //   $("#slide").css("background-color", color[currentIndex]);
    // })

    var className = ["red", "orange", "yellow"];
    var currentIndex = 0;

    $("#slickBox").on("beforeChange", function() {
      currentIndex++;
      currentIndex %= className.length;
      $("#slide").removeClass().addClass("slideMain py-5 "+className[currentIndex]);
      // $("#slide").removeClass().addClass("animated zoomIn");
    })


    $(".bar div").each(function() {
      var _w = $(this).data("num");
      $("p", this).width(0);
      $("p", this).animate({"width":_w+"%"}, 600, function () {   //animate({속성},속도,function)
        //애니메이션 완료 후 실행되는 함수
        $(this).html("<strong>"+_w+"%"+"</strong>");
      });
    })

    // $(window).resize(function() {
    //   $(".dar div").each();
    //   // 주의!! call-back 함수가 아니므로 반드시 설정해 놓은 값보다 아래에 위치해야 함.
    // })
});
