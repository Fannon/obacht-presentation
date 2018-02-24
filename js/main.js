var VIEWPORT_HEIGHT;
var VIEWPORT_WIDTH;

$(window).resize(function(){
	if($(window).width() > 950 && $(window).width() < 1050) {
		location.reload();
	}
});

if($(window).width() > 1000){
	
	/**
	 * Gets called when the document is fully loaded.
	 */
	$(document).ready(function() {
	    getViewportSize();
	    adjustLayout();
	    animateArrowUp();
	    handleArrow();
	});
	
	
	/**
	 * Gets called when the window is resized.
	 */
	$(window).resize(function() {
	    getViewportSize();
	    adjustLayout();
	});
	
	
	/**
	 * Gets called when the window is scrolled.
	 */
	$(window).scroll(function() {
	    handleArrow();
	});
	
	
	/**
	 * Gets the amount of pixels to the top of the page.
	 * Decides if arrow will be displayed.
	 */
	function handleArrow() {
	    scrollValue = $(window).scrollTop();
	    if (scrollValue <= 0) {
	        showArrow();
	    } else {
	        hideArrow();
	    }
	}
	
	
	/**
	 * Sets arrow visible.
	 * Checks if arrow is hidden.
	 */
	function showArrow() {
	    if ($('.arrow').css('display') === 'none') {
	        $('.arrow').fadeIn(200, 'linear');
	    } else {
	        return;
	    }
	}
	
	
	/**
	 * Hides arrow.
	 * Checks if arrow is visible.
	 */
	function hideArrow() {
	    if ($('.arrow').css('display') === 'block') {
	        $('.arrow').fadeOut(200, 'linear');
	    } else {
	        return;
	    }
	}
	
	
	/**
	 * Move arrow up.
	 * Call animateArrowDown().
	 */
	function animateArrowUp() {
	    $('.arrow').animate({'top': VIEWPORT_HEIGHT * 0.84}, 800, animateArrowDown);
	}
	
	
	/**
	 * Move arrow down.
	 * Call animateArrowUp().
	 */
	function animateArrowDown() {
	    $('.arrow').animate({'top': VIEWPORT_HEIGHT * 0.87}, 800, animateArrowUp);
	}
	
	
	/**
	 * Gets the size of the viewport.
	 */
	function getViewportSize() {
	    VIEWPORT_HEIGHT = $(window).height();
	    VIEWPORT_WIDTH = $(window).width();
	}
	
	
	/**
	 * Adjusts the layout grid according to viewport width and height.
	 * Minimal height: 620px
	 * Minimal width: 900px
	 */
	function adjustLayout() {
	
	    minHeight = 620;
	    minWidth = 900;
	
	    var width;
	    var height;
	
	    if (VIEWPORT_WIDTH < minWidth && VIEWPORT_HEIGHT > minHeight) {
	        width = minWidth;
	        height = VIEWPORT_HEIGHT;
	    }
	
	    if (VIEWPORT_HEIGHT < minHeight && VIEWPORT_WIDTH > minWidth) {
	        height = minHeight;
	        width = VIEWPORT_WIDTH;
	    }
	
	    if (VIEWPORT_WIDTH < minWidth && VIEWPORT_HEIGHT < minHeight) {
	        width = minWidth;
	        height = minHeight;
	    }
	
	    if (VIEWPORT_WIDTH > minWidth && VIEWPORT_HEIGHT > minHeight) {
	        height = VIEWPORT_HEIGHT;
	        width = VIEWPORT_WIDTH;
	    }
	
	    $('.wrapper').css({
	        'height': height,
	        'width': width
	    });
	
	    $('.content_box, .single_box').css({
	        'height': height,
	        'width': width
	    });
	
	    $('.content_box_left').css({
	        'height': height,
	        'width': width / 2
	    });
	
	    $('.content_box_right').css({
	        'height': height,
	        'width': width / 2
	    });
	
	    $('.content_box_left img, .content_box_right img').attr({
	        'height': width / 2,
	        'width': width / 2
	    });
	
	    $('.arrow').css({
	        'top': height * 0.85,
	        'left': function() { return (width / 2) - ($(this).width() / 2); }
	    });
	
	    // Places the content of ".conent_box_right/left" in the center vertically.
	    $('.content_box_left div, .content_box_right div, .content_box_left img, .content_box_right img').css('top', function() {
	        return (height / 2) - ($(this).height() / 2);
	    });
	
	    // Places the content of ".conent_box_right/left" in the center horizontally.
	    $('.content_box_left div, .content_box_right div').css('left', function() {
	        return (width / 4) - ($(this).width() / 2);
	    });
	
	    // Places the content of ".single_box" in the center vertically.
	    $('.single_box div').css('top', function() {
	        return ((height / 2) - ($(this).height() / 2)) * 0.9;
	    });
	
	    // Places the content of ".single_box" in the center horizontally.
	    $('.single_box div').css('left', function() {
	        return (width / 2) - ($(this).width() / 2);
	    });
	}

}
