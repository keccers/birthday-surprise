$(document).ready(function(){$('.teaching-staff-overlay .details').jScrollPane({autoReinitialise:true,verticalDragMinHeight:62,verticalDragMaxHeight:62,horizontalDragMinWidth:62,horizontalDragMaxWidth:62});if($('.press').length>0){pressQuotes();}
$('#gallery a').lightBox();var slider=$('.slider').bxSlider({controls:false,speed:300,displaySlideQty:3});$('.slider-prev').click(function(){slider.goToPreviousSlide();return false;});$('.slider-next').click(function(){slider.goToNextSlide();return false;});$('.play').click(function(){$('.intro-video').prepend('<div id="wistia_q7te65zne5" class="wistia-embed">&nbsp;</div>');$('.intro-video .play, .intro-video h1, .intro-video h2').fadeOut(280,function(){$('.wistia-embed').hide().fadeIn(300);var videoTitle='Homepage Video';var wistiaEmbed=Wistia.embed("q7te65zne5",{videoWidth:1000,videoHeight:560,controlsVisibleOnLoad:false,autoPlay:true});wistiaEmbed.bind('end',function(){$('.wistia-embed').html('<div class="ended"><h2>Thanks for watching the video, keep updated...</h2><div class="social"><h2>Social</h2><iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fdevbootcamp&amp;send=false&amp;layout=standard&amp;width=300&amp;show_faces=false&amp;action=like&amp;colorscheme=dark&amp;font&amp;height=35&amp;appId=348032755290507" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:300px; height:35px;" allowTransparency="true"></iframe><br /><script type="text/javascript" charset="utf-8">window.twttr = (function (d,s,id) {var t, js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });}(document, "script", "twitter-wjs"));twttr.ready(function(twttr) {_ga.trackTwitter();});</script><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://devbootcamp.com/" data-text="@devbootcamp is an intense 9-week bootcamp to train software engineers. 90% placement rate. Located in San Francisco." data-size="large" data-related="devbootcamp">Tweet</a></div><div class="subscribe"><h2>Get Updates</h2><form action="http://bettermeans.us2.list-manage2.com/subscribe/post?u=208c2e37446472f0a65c1a127&amp;id=a4766f6720" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" onClick="log_event(\'Newsletter\', \'Subscribe\', \'Video End Newsletter Subscribe\');" class="button"></form></div></div><script type="text/javascript">_ga.trackFacebook();</script>');$('.ended').animate({opacity:1},2000)});var wistiaPlayCallback=function(){log_event('Video','Play',videoTitle);wistiaEmbed.unbind("play",wistiaPlayCallback);}
wistiaEmbed.bind("play",wistiaPlayCallback);wistiaEmbed.bind("end",function(){log_event('Video','Complete',videoTitle);});});});$('nav .show-tuition').click(function(){if($('.tuition').css('height')!='450px'){$('.tuition').animate({height:450},320,function(){$('.tuition-close').fadeIn(200);});}else{$('.tuition-close').hide();$('.tuition').animate({height:0},320);}
return false;})
$('.tuition-close').click(function(){$(this).hide();$('.tuition').animate({height:0},320);});$('#pay-upfront').click(function(){if($(this).is(':checked')){var currentPrice=$('#price-total').html();var doSum=currentPrice.replace(/[^\d]/g,'');$('#upfront-price').html('<span>- $1,200</span>');$('#price-total').html('$'+(parseInt(doSum)- 1200)).digits();}else{var currentPrice=$('#price-total').html();var doSum=currentPrice.replace(/[^\d]/g,'');$('#upfront-price').html('');$('#price-total').html('$'+(parseInt(doSum)+ 1200)).digits();}});var currentPrice=$('#price-total').html();var tuition=parseInt(currentPrice.replace(/[^\d]/g,''));$('.scholarship-check').click(function(){if($(this).attr('id')=="minority-in-tech"){$('#minority-in-tech-price').html('<span>- $500</span>');$('#levo-scholar-price').html('');$('#price-total').html('$'+(tuition- 500)).digits();}
else if($(this).attr('id')=="levo-scholar"){$('#levo-scholar-price').html('<span>- $2500</span>');$('#minority-in-tech-price').html('');$('#price-total').html('$'+(tuition- 2500)).digits();}});$('.teaching-staff li').mouseenter(function(e){$(this).data("title",$(this).find('img').attr("title"));var findTitle=$(this).data("title");$(this).find('img').removeAttr('title');if(!findTitle){return false;}
var splitTitle=findTitle.split(',');var getName=splitTitle[0];var titleParts=findTitle.split(',');titleParts.shift();var getQual=titleParts.join(',');var index=$(this).parent().children().index(this);$(this).prepend('<div class="magnify-overlay"></div>');$(this).find('.magnify-overlay').show().animate({opacity:1},200);if($(window).width()<1527){if((index+ 1)%6==0){$(this).prepend('<div class="tooltip-wrap" id="tooltip"><div class="tooltip">'+ getName+'<span class="qual">'+ getQual+'</span></div><div class="tooltip-arrow-right"></div>');$(this).find('#tooltip').css({margin:'20px 0 0 -160px'}).show().animate({'margin-left':'-180px',opacity:1},300);}else{$(this).prepend('<div class="tooltip-wrap" id="tooltip"><div class="tooltip-arrow-left"></div><div class="tooltip">'+ getName+'<span class="qual">'+ getQual+'</span></div></div>');$(this).find('#tooltip').css({margin:'20px 0 0 110px'}).show().animate({'margin-left':130,opacity:1},300);}}else{$(this).prepend('<div class="tooltip-wrap" id="tooltip"><div class="tooltip-arrow-left"></div><div class="tooltip">'+ getName+'<span class="qual">'+ getQual+'</span></div></div>');$(this).find('#tooltip').css({margin:'20px 0 0 110px'}).show().animate({'margin-left':130,opacity:1},300);}
e.stopPropagation();return false;}).mouseleave(function(e){$(this).find('.magnify-overlay').animate({opacity:0},200,function(){$(this).remove();});var index=$(this).parent().children().index(this);if($(window).width()<1527){if(index==5||index==10||index==15){$(this).find('#tooltip').animate({'margin-left':'-170px',opacity:0},220,function(){$(this).remove();});}else{$(this).find('#tooltip').animate({'margin-left':110,opacity:0},220,function(){$(this).remove();});}}else{$(this).find('#tooltip').animate({'margin-left':110,opacity:0},220,function(){$(this).remove();});}
e.stopPropagation();return false;});$('.teaching-staff li').click(function(){var getTeacher=$(this).attr('id');$('.teaching-staff-overlay').fadeIn(300);$('.teaching-staff-overlay #'+ getTeacher).show();$(this).find($('#tooltip').hide());});$('.teaching-staff-overlay .modal').click(function(e){e.stopPropagation();});$('.teaching-staff-overlay').click(function(){$(this).fadeOut(270);$(this).find('.modal').hide();});$('.teaching-staff-overlay .modal .close').click(function(){$('.teaching-staff-overlay').fadeOut(270);$('.teaching-staff-overlay .modal').hide();});$(document).keyup(function(e){if(e.keyCode==27){$('.teaching-staff-overlay').fadeOut(270);$('.teaching-staff-overlay').find('.modal').hide();if($('#jquery-overlay').length>0){$('#jquery-overlay').fadeOut(270);$('#jquery-lightbox').remove();}}});$('.apply-previous').click(function(){if($(this).attr('data-current-step')==1){return false;}else if($(this).attr('data-current-step')==2){$('.apply-header .step-2').css({background:'url(imgs/apply-step-2.png) no-repeat'}).removeClass('current');$('.apply-header .step-1').css({background:'url(imgs/apply-step-1-current.png) no-repeat'}).addClass('current');$(this).attr('data-current-step',1);$('.apply-continue').attr('data-current-step',1);}else if($(this).attr('data-current-step')==3){$('.apply-header .step-3').css({background:'url(imgs/apply-step-3.png) no-repeat'}).removeClass('current');$('.apply-header .step-2').css({background:'url(imgs/apply-step-2-current.png) no-repeat'}).addClass('current');$(this).attr('data-current-step',2);$('.apply-continue').attr('data-current-step',2);}
return false;});$('.apply-continue').click(function(){if($(this).attr('data-current-step')==1){$('.apply-header .step-2').css({background:'url(imgs/apply-step-2-current.png) no-repeat'}).addClass('current');$(this).attr('data-current-step',2);$('.apply-previous').attr('data-current-step',2);}else if($(this).attr('data-current-step')==2){$('.apply-header .step-3').css({background:'url(imgs/apply-step-3-current.png) no-repeat'}).addClass('current');$(this).attr('data-current-step',3);$('.apply-previous').attr('data-current-step',3);}
return false;});var isiPhone=navigator.userAgent.toLowerCase().indexOf("iphone");var isiPad=navigator.userAgent.toLowerCase().indexOf("ipad");var isiPod=navigator.userAgent.toLowerCase().indexOf("ipod");if(isiPhone>-1||isiPad>-1||isiPod>-1){$('header').css('position','static');}
$('.jspPane').bind('mousewheel',function(e,d){if(d>0&&$(this).scrollTop()==0){e.preventDefault();}else{if(d<0&&$(this).scrollTop()==$(this).get(0).scrollHeight- $(this).innerHeight()){e.preventDefault();}}});if($.browser.msie&&parseInt($.browser.version,10)===8){$('.our-way li:last-child, .teaching-staff li:nth-child(6n), .sub-footer li:last-child a, .partners li:nth-child(4n)').css('margin','0');}
$('.blog-left, .blog-right').css('height',$('.blog').outerHeight(true));$(window).on('load',function(){$('.blog-left, .blog-right').css('height',$('.blog').outerHeight(true));});})
$.fn.digits=function(){return this.each(function(){$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"));})}
function pressQuotes(){var pause=5000;var length=$('.press .press-set').length;var temp=-1;this.getRan=function(){var ran=Math.floor(Math.random()*length)+ 1;return ran;};this.show=function(){var ran=getRan();while(ran==temp){ran=getRan();}
temp=ran;$('.press .press-set').hide();$('.press .press-set:nth-child('+ ran+')').fadeIn(350);}
show();setInterval(show,pause);}
function log_event(category,action,label){_gaq.push(['_trackEvent',category,action,label]);}
function log_click(category,link){log_event(category,'Click',$(link).text());}
$(document).ready(function(){$('nav a').click(function(){log_click('Navigation',this);});})