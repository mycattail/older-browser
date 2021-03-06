/*
 * Copyright 2016 E-lin 意林行銷 http://tw.seoweo.com/
 * Version: 2016.01.30
 * Designe by Bob
 */

$(function() {
  if(
    !Modernizr.canvas,
    !Modernizr.Video,
    !Modernizr.cssanimations,
    !Modernizr.csstransitions,
    !Modernizr.fontface,
    !Modernizr.backgroundsize,
    !Modernizr.boxshadow,
    !Modernizr.opacity,
    !Modernizr.borderradius,
    !Modernizr.touch,
    !Modernizr.svg,
    !Modernizr.textshadow,
    !Modernizr.multiplebgs,
    !Modernizr.csstransforms,
    !Modernizr.audio
    //!Modernizr.matchmedia
    ){
    $('body').append("<div id='browser'><div class='browser-cancel'>&times</div><div class='browser-h1'></div><div class='browser-h2'></div><div id='browser-container'><div class='browser-image chrome'></div><div class='browser-image firefox'></div><div class='browser-image opera'></div><div class='browser-image ie'></div></div></div>");
      
      $('.browser-h1').html("您好，您的浏览器版本太旧啰!");
      $('.browser-h2').html("为了更好的体验，请把浏览器更新为最新版本!");
      $('.chrome').html("<a>Chrome 下载</a>");
      $('.firefox').html("<a>Firefox 下载</a>");
      $('.opera').html("<a>Opera 下载</a>");
      $('.ie').html("<a>IE 下载</a>");

      $(".chrome a").attr({
          "href" : "http://www.google.com/chrome",
          "target" : "_blank"
      });
      $(".firefox a").attr({
          "href" : "http://mozilla.com.tw/firefox/new/",
          "target" : "_blank"
      });
      $(".opera a").attr({
          "href" : "http://www.opera.com/download",
          "target" : "_blank"
      });
      $(".ie a").attr({
          "href" : "http://windows.microsoft.com/en-us/internet-explorer/download-ie",
          "target" : "_blank"
      });

      $('.browser-cancel').click(function() {
        $('#browser').fadeOut();
      });
    //alert("123");
  } 
});