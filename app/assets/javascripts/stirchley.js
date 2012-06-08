function checkAttribute(element, attribute) { 
	var test = document.createElement(element);
	if (attribute in test) {
		return true;
	} else {
		return false;
	}
}

var spinner_opts = {
  lines: 9, // The number of lines to draw
  length: 3, // The length of each line
  width: 2, // The line thickness
  radius: 4, // The radius of the inner circle
  rotate: 0, // The rotation offset
  color: '#ffffff', // #rgb or #rrggbb
  speed: 2, // Rounds per second
  trail: 44, // Afterglow percentage
  shadow: false, // Whether to render a shadow
  hwaccel: false, // Whether to use hardware acceleration
  className: 'spinner', // The CSS class to assign to the spinner
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  top: 'auto', // Top position relative to parent in px
  left: 'auto' // Left position relative to parent in px
};

$(document).ready(function() {
	
	// Fallback validation for non-html5 browsers
	if (!checkAttribute('input', 'required')) {
		jQuery("#new_supporter").validate();
	}
	
	// Nice labels 
	$('.string').each(function(i,el){
		
		$(el).find('label').hide();
		label_text = $(el).find('label').text();
		$(el).find('input').val(label_text);
		$(el).find('input').data('label_text', label_text);
		
		$(el).find('input').on('focus',function(ev){
			if($(this).val()==$(this).data('label_text')) {
				$(this).val('')
			}
		});
		
		$(el).find('input').on('blur',function(ev){
			if($.trim($(this).val())=='') {
				$(this).val($(this).data('label_text'));
			}
		});
		
	});
	
	// AJAXy
	
	$('#new_supporter').on('ajax:error', function(event, xhr, status) {
	  //$(this).append('<p>'+xhr.responseText+'</p>')
		$(this).append('<p>Sorry, something went wrong. Please confirm your name and email and try again.</p>')
	});
	
	$('#new_supporter').on('ajax:before', function(event, xhr, status) {
	 	spinner = new Spinner(spinner_opts).spin();
		$('.spin').append(spinner.el);
		$(this).find('.button').attr('disabled','disabled');
	});
	
	$('#new_supporter').on('ajax:complete', function(event, xhr, status) {
		$('.spin').html();
		$(this).find('.button').removeAttr('disabled');
		
	});
	
});