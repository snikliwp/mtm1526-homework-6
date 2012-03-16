$(document).ready(function () {
	
	var passStrength = 0;
	var passw = "";
	var passw2 = "";
	var countrycache = [];
	
	// On change: whenever a user commits a change to a text field by:
	//  1. moving to another field
	//  2. hitting return
	$('#username').on('change', function (ev) {
		
		var username = $(this).val();  // Gets the user input from the form field
		
		// Force our users to have a username at least 3 characters long
		if (username.length >= 3) {
			// By putting our AJAX request in a variable we can listen for when it is done
			// When the response is done, we can see the data PHP sent
			var ajax = $.post('check-username.php', {
				'username' : username
			});
			
			ajax.done(function (data) {
				$('.unstatus').removeClass('available unavailable');
				
				if (data == 'available') {
					// If you wanted to use an image instead of text:
					//  1. delete the `.html()` part
					//  2. use the class in your CSS to add a background-image
					$('.unstatus').html('✔ The Username is available.').addClass(data);
				} else {
					$('.unstatus').html('✖ The Username is already taken.').addClass(data);
				}
			});
		} else {
			$('.unstatus').html('✖ The Username must be a minimum of 3 characters.').removeClass('available').addClass('unavailable');
		}
		
	});
	
	$('#email').on('keyup', function (ev) {
		var mail = $(this).val();
		$('.emstatus').removeClass('available unavailable');
		
		// Regular expressions (Regex) are a sub programming language for dealing with text
		// They allow us to manipulate and search text
		if (mail.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ )) {
			$('.emstatus').removeClass('unavailable');
			$('.emstatus').html('✔ The email address is valid.').addClass('available');
			} else {
				$('.emstatus').removeClass('available');
				$('.emstatus').html('✖ The email address is not valid.').addClass('unavailable');
		}
	});
	
	$('#password').on('keyup', function (ev) {
		var pass = $(this).val();
		passw = $(this).val();
		passStrength = 0;
		
		if (pass.length > 5) {
			passStrength++;
			$('.req-length').addClass('met');
		} else {
			$('.req-length').removeClass('met');
		}
		
		// Regular expressions (Regex) are a sub programming language for dealing with text
		// They allow us to manipulate and search text
		if (pass.match(/[a-z]/)) {
			passStrength++;
			$('.req-low').addClass('met');
		} else {
			$('.req-low').removeClass('met');
		}
		
		if (pass.match(/[A-Z]/)) {
			passStrength++;
			$('.req-up').addClass('met');
		} else {
			$('.req-up').removeClass('met');
		}
		
		if (pass.match(/[0-9]/)) {
			passStrength++;
			$('.req-num').addClass('met');
		} else {
			$('.req-num').removeClass('met');
		}
		
		if (pass.match(/[^a-zA-Z0-9]/)) {
			passStrength++;
			$('.req-spec').addClass('met');
		} else {
			$('.req-spec').removeClass('met');
		}
	});
	
		$('#password2').on('keyup', function (ev) {
		var pass = $(this).val();
		$('.pwstatus').removeClass('available unavailable');
		console.log(passw);
		console.log(pass);
		// Regular expressions (Regex) are a sub programming language for dealing with text
		// They allow us to manipulate and search text
				passStrength = 0;
		
		if (pass.length > 5) {
			passStrength++;
			$('.req-length').addClass('met2');
		} else {
			$('.req-length').removeClass('met2');
		}
		
		// Regular expressions (Regex) are a sub programming language for dealing with text
		// They allow us to manipulate and search text
		if (pass.match(/[a-z]/)) {
			passStrength++;
			$('.req-low').addClass('met2');
		} else {
			$('.req-low').removeClass('met2');
		}
		
		if (pass.match(/[A-Z]/)) {
			passStrength++;
			$('.req-up').addClass('met2');
		} else {
			$('.req-up').removeClass('met2');
		}
		
		if (pass.match(/[0-9]/)) {
			passStrength++;
			$('.req-num').addClass('met2');
		} else {
			$('.req-num').removeClass('met2');
		}
		
		if (pass.match(/[^a-zA-Z0-9]/)) {
			passStrength++;
			$('.req-spec').addClass('met2');
		} else {
			$('.req-spec').removeClass('met2');
		}
		
		if (pass == passw) {
			$('.pwstatus').removeClass('unavailable');
			$('.pwstatus').html('✔ The passwords match.').addClass('available');
			} else {
				$('.pwstatus').removeClass('available');
				$('.pwstatus').html('✖ The passwords do not match.').addClass('unavailable');
		}
	});


		$('#canada').on('click', function (ev) {
			$('.canus').load('provinces.html')
/*			if (countrycache['canada']){
				console.log(countrycache['canada']);
			countrycache['canada'];
				
		} else {
			countrycache['canada'] = $('.canus').load('provinces.html');
				console.log(countrycache['canada']);
			countrycache['canada'];
		}
*/	});

		$('#us').on('click', function (ev) {
			$('.canus').load('states.html')
/*		var button = $(this).val();  // Gets the user input from the form field
			if (countrycache['us']){
			$('.canus').innerHTML = countrycache['us'];
		} else {
			countrycache['us'] = $('.canus').load('page'.concat('states.html'));
			$('.canus').innerHTML = countrycache['us'];
		}
*/	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$('form').on('submit', function (ev) {
		
		if (passStrength < 5 || $('.unstatus').hasClass('unavailable') || $('.emstatus').hasClass('unavailable') || $('.pwstatus').hasClass('unavailable')) {
			ev.preventDefault();
		}
		
	});
	
	
	
	
});























