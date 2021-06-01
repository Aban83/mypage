$(function() {
  $('#myfull').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true,
    sectionsColor : ['#ccc', '#fff', 'red', 'orange'],
    navigation: true,
	  navigationPosition: 'right',
	  navigationTooltips: ['나의소개', '포폴', '기타내용', '오랜지'],
    showActiveTooltip: true,
	});
})
