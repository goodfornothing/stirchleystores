function checkAttribute(element, attribute) { 
	var test = document.createElement(element);
	if (attribute in test) {
		return true;
	} else {
		return false;
	}
}

$(document).ready(function() {
	if (!checkAttribute('input', 'required')) {
		jQuery("#new_supporter").validate();
	}
});