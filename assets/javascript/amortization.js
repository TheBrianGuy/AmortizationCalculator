$(document).ready(function() {
	$("body").addClass("bg-primary");
	$("input").addClass("text-muted");
	$("form").on("submit", function(e) {		// Run this function when submitting form button
		e.preventDefault();		// Prevent default behavior when clicking submit button on form.
													// Run this function instead.
		var interest = $('form input[name="rate');	// variable records rate from text field as object
		var validateInterest = /^(\d{0,2}\.{0,1}\d{0,2})$/g; // regex to capture valid interest rates 00.00%
		if (interest.val() == '' || !validateInterest.test(interest.val())) // if value of interest rate is blank or doesn't follow regex rule
		{
			alert('Please enter a valid interest rate percentage');
			return false;		// exit function due to invalid interest rate
		}

		if (validateInterest.test(interest.val())) {
			$(this).val(function(index, old) { return old.replace(/[^0-9\.]/g, '') + '.00%'; });
		} else {
			$(this).val(function(index, old) { return old.replace(/[^0-9\.]/g, '') + '%'; });
		}

		calc();		// Calculator amortized loan information
	});

	$(':input#rate').change(function() {		// jquery run function when input rate textbox changes value
		var interest = $('form input[name="rate');
		console.log("interest: " + interest.val());
		var validateInterest = /^\d{1}%$/g;
		console.log(validateInterest.test(interest.val()));
		if (3 === 4) {
			console.log("true");
		} else {
			console.log("false");
		}
		// if (validateInterest.test(interest.val())) {
		// 	console.log("help!"); 
		// 	$(this).val(function(index, old) { return old.replace(/[^0-9\.]/g, '') + '.00%'; });
		// } else {
  //   		$(this).val(function(index, old) { return old.replace(/[^0-9\.]/g, '') + '%'; });
  // 		}
	});

	function calc() {
		var P = document.getElementById("principal").value;
		var n = 12;
		var t = document.getElementById("duration").value;
		var r = document.getElementById("rate").value.match(/^\d+(\.\d{0,2})?/g) / 100;
		var p = (r * P) / (n * (1 - (1 + r / n)**(-n * t)));

		document.getElementById("monthlyPayment").value = p;
		document.getElementById("totalPrincipal").value = P;
		document.getElementById("totalInterest").value = (n * p * t) - P;
		document.getElementById("total").value = n * p * t;
	}

});