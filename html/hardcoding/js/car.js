// var carArry = {
//  stcar : $("[name='st0']:checked").val(), //태그에서 선택할수 있게 수정
//  kcar :["현대","제네시스","기아","쌍용"],
//  fcar :["BMW","벤츠","아우디","폭스바겐"],
// }
//
// selctcar0(carArry.stcar); // 바로 실행
//
// $("#carinfo1").change(function(){
//    carArry.stcar = $("[name='st0']:checked").val();
//    selctcar0(carArry.stcar); // 변경될때 실행
// });
//
// function selctcar0(kf){ //인자 : 태그 누적변수
//   var st2trigger = "";
//   // if(kf == "국산차") st2trigger = carArry.kcar; else st2trigger = carArry.fcar;
//   if(kf == '국산차'){
//     st2trigger = carArry.kcar;
//   }else{
//     st2trigger = carArry.fcar;
//   }
//
//   var dataTag ="<option value=''>선택해주세요.</option>"; // 데이터버리고
//   for(var i in  st2trigger ){
//     dataTag += "<option value=''>"+ st2trigger[i] +"</option>";
//   }
//   $("#st2").html(dataTag);
// }

var carArry = {
 stcar : $("[name='st0']:checked").val(), //태그에서 선택할수 있게 수정
 kcar :[
        ["국산차브랜드1", "국1차1", "국1차2", "국1차3",],
        ["국산차브랜드2", "국2차1", "국2차2", "국2차3",],
        ["국산차브랜드3", "국3차1", "국3차2", "국3차3",],
        ["국산차브랜드4", "국4차1", "국4차2", "국4차3",],
      ],
 fcar :[
        ["외국차브랜드1", "외1차1", "외1차2", "외1차3",],
        ["외국차브랜드2", "외2차1", "외2차2", "외2차3",],
        ["외국차브랜드3", "외3차1", "외3차2", "외3차3",],
        ["외국차브랜드4", "외4차1", "외4차2", "외4차3",],
        ["외국차브랜드5", "외5차1", "외5차2", "외5차3",],
      ],
}


// // 방법 1
// selctcar0(carArry.stcar); // 바로 실행
//
// $("#carinfo1").change(function(){ //정적 객체 불러서 사용할때
//    carArry.stcar = $("[name='st0']:checked").val();
//    var dataTag ="<option value=''>선택해주세요.</option>"; // 데이터버리고
//    $("#st2").html(_dataTag);
//    $("#st3").html(_dataTag);
//    selctcar0(carArry.stcar); // 변경될때 실행
// });
//
// $("[name='st2']").on("change", function(){ // 동적 객체 불러서 사용할때
//   // alert($("option:selected", this).index()); // DEBUG를 위해 alert 띄움.
//   var _index = $("option:selected", this).index() - 1;
//
//   var _dataTag ="<option value=''>선택해주세요.</option>"; // 데이터버리고
//
//   var _stcar = carArry.stcar;
//   var _st3tigger = "";
//
//   if(_stcar == '국산차'){
//     _st3tigger = carArry.kcar;
//   }
//   else{
//     _st3tigger = carArry.fcar;
//   }
//
//   for(var x in  _st3tigger[_index] ){
//     if(x!=0){
//       _dataTag += "<option value='"+x+"'>"+ _st3tigger[_index][x] +"</option>";
//     }
//   }
//   $("#st3").html(_dataTag);
// });
//
// function selctcar0(kf){ //인자 : 선택된 아이템 (국산차 or 수입차)
//   var st2trigger = "";
//
//   if(kf == '국산차') st2trigger = carArry.kcar; else st2trigger = carArry.fcar;
//
//   var dataTag ="<option value=''>선택해주세요.</option>"; // 데이터버리고
//   for(var i in  st2trigger ){
//     dataTag += "<option value='"+i+"'>"+ st2trigger[i][0] +"</option>";
//   }
//   $("#st2").html(dataTag);
// }






// 방법 2

selctcar(carArry.stcar, "#carinfo1");

$("#carinfo1, #carinfo2").on("change", function() {

  var targetChange = $(this).attr("id");
  if(targetChange == "carinfo1"){
      carArry.stcar = $("[name='st0']:checked").val();
  }
  selctcar(carArry.stcar, "#"+ targetChange);

})


function selctcar( kf, sel ){
  //1번인자 국산인지 수입인지 구분하는 인자 필요
  //2번인자 첫번째 select 인지 두번째 select인지 구분하는 인자 추가
  var st2trigger = '';
  var selectObj = '';
  var _index = '';
  var tagData ="<option value=''>선택해주세요.</option>"; // 데이터버리고
  if(kf == '국산차'){
    st2trigger = carArry.kcar;
  }
  else{
    st2trigger = carArry.fcar;
  }
  if(sel == "#carinfo2"){
    _index = $(sel+" option:selected").index() - 1;
    st2trigger = st2trigger[_index];
    for(var i in  st2trigger){
      if(i!='0'){
        tagData += "<option value='"+i+"'>"+ st2trigger[i] +"</option>";
      }
    }
    selectObj = "#st3";
  }
  else{
    for(var i in  st2trigger ){
      tagData += "<option value='"+i+"'>"+ st2trigger[i][0] +"</option>";
    }
    selectObj = "#st2";
    $("#st3").html("<option value=''>선택해 주세요.</option>");
  }

  $(selectObj).html(tagData);
}
