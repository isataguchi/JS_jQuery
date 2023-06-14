$(window).ready( function() {
	$('#postcode1').jpostal({
		postcode : [
			'#postcode',
		],
		address : {
			'#address1'  : '%3',
			'#address2'  : '%4%5',
		}
	});
});