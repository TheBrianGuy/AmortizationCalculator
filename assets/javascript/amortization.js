$(document).ready(function() {
	$("body").addClass("bg-primary");
	$("input").addClass("text-muted");
	$("form").on("submit", function(e) {
		e.preventDefault();

		var interest = $('form input[name="rate');
		var validateInterest = /^\d+(\.\d{0,2})?/g;
		if (interest.val() == '' || !validateInterest.test(interest.val()))
		{
			alert('Please enter a valid interest rate percentage');
			return false;
		}

		calc();
	});

	$(':input#rate').change(function() {
		var interest = $('form input[name="rate');
		var validateInterest = /^\d{1}$/g;
		console.log(interest.val() == validateInterest.test(interest.val()));
		if (interest.val() == validateInterest.test(interest.val())) {
			$(this).val(function(index, old) { return old.replace(/[^0-9\.]/g, '') + '.00%'; });
		} else {
    		$(this).val(function(index, old) { return old.replace(/[^0-9\.]/g, '') + '%'; });
  		}
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