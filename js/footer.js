 	var $w = jQuery.noConflict();
	$w(document).ready(function(){
	//Right Click Protection
	//$w(document).bind("contextmenu",function(e){ return false;});
	
	//Content Area Mods
	$w(".pagecontainer > table:eq(1) tr:first td:first").addClass("estorepower-background");
	// $w("estorepower-background").attr("id","estorepower-background-main1"); // ID added
	$w(".estorepower-background table:eq(1)").addClass("estorepower-content");
	
	//Getting and Setting Store Categories
	if($w("#estorepower-categories").length > 0) {
		if($w("#LeftPanel .lcat").length > 0) {
			$w("#estorepower-categories").html($w("#LeftPanel .lcat").html());
		}
		$w("#estorepower-categories ul[class=lev1]").find("li:last").addClass("estorepower-lastitem");
	}
	
	//Search Box
	var stxt = $w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val();
	$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").focus(function(){
		if($w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val("");
		}
	});
	$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").blur(function(){
		if($w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val() == "") {
			$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$w("#estorepower-search #estorepower-submit").find("input").click(function(){
		if($w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#estorepower-search #estorepower-input").find("input[class=v4sbox]").val("");
		}
	});
	
	
	//Footer
	
	
	var d = new Date();
	var footer = '\n\r<footer><div class="features"><div class="features-content"><ul><li><div class="thumb"><img src="http://aqamcoventry.co.uk/ali/dnd/images/free-delivery-truck.svg" width="50"/></div><div class="text">FREE SHIPPING</div></li><li><div class="thumb"><img src="http://aqamcoventry.co.uk/ali/dnd/images/phone-auricular-and-a-clock.svg" width="50"/></div><div class="text">FAST SHIPPING</div></li><li><div class="thumb"><img src="http://aqamcoventry.co.uk/ali/dnd/images/calendar.svg" width="50"/></div><div class="text">30DAY MONEY BACK GUARENTEE</div></li></ul></div></div><div class="footer-top"><div class="footer-top-content"><div class="newsLetterText"><strong>Stay Informed:</strong> Join our newsletter and receive emails about new deals and promotions</div><div class="btnSection"><a href="http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=diamondsndeals&ssPageName=STRK:MEFS:ADDSTR&rt=nc" class="btn" target="_blank">SignUp Newsletter</a></div><div class="clear"></div></div></div><div class="org-wrapcens"><div id="org-footer"><div class="f-col2"><h1>Quick Links</h1><ul><li><a href="http://stores.ebay.com/diamondsndeals?_rdc=1" target="_blank">Shop Home</a></li><li><a href="#" target="_blank">Easy Payment</a></li><li><a href="http://stores.ebay.com/diamondsndeals/pages/shipping/" target="_blank">Shipping info</a></li><li><a href="http://stores.ebay.com/diamondsndeals/pages/returns/" target="_blank">Returns policy</a></li><li><a href="https://feedback.ebay.com/ws/eBayISAPI.dll?ViewFeedback2&userid=diamondsndeals&ftab=AllFeedback&myworld=true&rt=nc&_trksid=p2050430.m2531.l4585" target="_blank">Feedback</a></li><li><a href="https://contact.ebay.com/ws/eBayISAPI.dll?FindAnswers&frm=284&requested=diamondsndeals&iid=-1" target="_blank">Contact Us</a></li></ul></div><div class="f-col2"><h2>Categories</h2><ul><li><a href="#" target="_blank">Loose Diamonds</a></li><li><a href="http://stores.ebay.com/diamondsndeals/Rings-/_i.html?_fsub=2986259519&_sid=125703569&_trksid=p4634.c0.m322" target="_blank">Rings</a></li><li><a href="#" target="_blank">Earrings</a></li><li><a href="http://stores.ebay.com/diamondsndeals/Bracelet-/_i.html?_fsub=3018434819&_sid=125703569&_trksid=p4634.c0.m322" target="_blank">Bracelet</a></li><li><a href="#" target="_blank">Pendant</a></li></ul></div><div class="f-col2"><h3>Newsletter</h3><div id="org-newsletter"><div id="org-text">Get all the latest News,Updates and Special Offers about<br>OUR STORE.</div><div id="org-signup"><a href="http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=diamondsndeals&ssPageName=STRK:MEFS:ADDSTR&rt=nc" target="_blank">Subscribe</a> </div></div></div><div class="f-col4"><h4>Payment Options</h4><img src="http://aqamcoventry.co.uk/ali/dnd/images/footer-paypal.png" alt=""></div></div></div></footer>';
	{
		if($w(".estorepower-content").length > 0) {
			$w(".estorepower-content").after(footer);			
		}
	}

	
	// Prodcuts
	//$w.post("http://www.estorepower.com/estore/lux-market/store/Feature-products/get_item.php", function(data){
		//$w("#Feature-products").html(data);
	//});
	
	//$w.post("http://www.estorepower.com/estore/lux-market/store/Feature-products/get_item-best_match.php", function(data){
		//$w("#best_match-products").html(data);
	    //});

	$w(document).ready(function () {
	    $w('.bxslider').bxSlider({
	        pager: false,
	        auto: true
	    });
	});
	
});



	


// for hide blank boxes on category page
$w(window).load(function(){
$w(".pview .gallery").has('br').hide();
});



