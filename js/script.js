function highlightButtonOnDropdownActive() {
	var activeClass = 'header__nav-item--active';
	var dropdownButtonSelector = '.header__nav-item--dropdownButton'

	$(dropdownButtonSelector).on('mouseenter', function(){
		$(this).addClass(activeClass);
	});

	$('.header__nav-item:not(' + dropdownButtonSelector + ')').on('mouseenter', function(){
		$(dropdownButtonSelector).removeClass(activeClass);
	});

	$('.dropdown').on('mouseleave', function() {
		$(dropdownButtonSelector).removeClass(activeClass);
	});
}

$().ready(function(){
	highlightButtonOnDropdownActive();
});

$(document).ready(function() {
    $(".main h1").delay(1000).animate({ opacity: 1 }, 1500);
});