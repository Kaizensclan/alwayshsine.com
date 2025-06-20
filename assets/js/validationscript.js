$(document).ready(function() {



	$.validator.addMethod("lettersonlys", function(value, element) {

		return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);

	}, "Letters only please");



	




	$('form[id="second_form"]').validate({

		rules: {



			name: {

				required: true,

			},

			contact: {

				required: true,

				maxlength: 10,

				minlength: 10,

			},

			friendContact: {

				maxlength: 10,

				minlength: 10,

			}

		},

		messages: {

			contact: {

				maxlength: 'contact should not be more than 10 digits',

				minlength: 'contact must be at least 10 digits'

			},

			friendContact: {

				maxlength: 'friend should not be more than 10 digits',

				minlength: 'friend contact must be at least 10 digits'

			}

		},

		submitHandler: function(form) {

			form.submit();

		}

	});



	$('form[id="forth_form"]').validate({

		rules: {





			name: {

				required: true,

				//   lettersonlys: true,

				maxlength: 50,

				minlength: 5,

			},

			contact: {

				required: true,

				maxlength: 10,

				minlength: 10,

			},

			friendContact: {

				required: true,

				maxlength: 10,

				minlength: 10,

			}

		},

		messages: {



			name: {

				//   lettersonlys :' name must be in characters only',

				maxlength: 'name should not be more than 50 characters',

				minlength: 'name must be at least 5 characters long'

			},

			friendContact: {

				maxlength: 'friend should not be more than 10 digits',

				minlength: 'friend contact must be at least 10 digits'

			}

		},

		submitHandler: function(form) {

			form.submit();

		}

	});



	


	$('form[id="six_form"]').validate({

		rules: {





			name: {

				required: true,

				//   lettersonlys: true,

				maxlength: 50,

				minlength: 5,

			},

			email: {

				required: true,

				email: true

			},



			message: {

				required: true,

				maxlength: 500,

				minlength: 5

			},

		},

		messages: {



			name: {

				//   lettersonlys :' name must be in characters only',

				maxlength: 'name should not be more than 50 characters',

				minlength: 'name must be at least 5 characters long'

			},

			message: {

				maxlength: 'message should not be more than 500 characters',

				minlength: 'message must be at least 5 characters long'

			}

		},

		submitHandler: function(form) {

			form.submit();

		}

	});



	






 });

/*16-03-2024 rent-for-property form validation */

$(document).ready(function($) {

$("#renturproperty").validate({
	rules: {
		name: "required", 
		businessName: "required",
		contact: {
			required: true,
			maxlength: 10,
			minlength: 10,
		},

		email: {
				required: true,
				email: true
				},

		address: "required",                   
		pincode: "required",
		country_name: "required",
		state_name: "required",
		city_name: "required",
		totalArea: "required",
		leaseDuration: "required",
		plotType: "required",
		propertyType: "required",
		surrounding: "required",
		aboutLocation: "required",
		actionProperty: "required",
	  
	 
	},

messages: {
	name: "Please enter  Name",
	businessName: "Please  businessName",
	contact: { 
		required: 'Please enter contact',
		maxlength: 'contact  Max 10 digits',
		minlength: 'contact Min 10 digits'

		},
		email: {
		required: "Please enter Email",

		},
	address: "Please enter address",
	pincode: "Please enter zipcode",            
	country_name: "Please enter country",
	state_name: "Please enter state",
	city_name: "Please enter city",
	totalArea: "please enter totalarea",
	leaseDuration: " please lease deed",
	plotType: "please enter Rawplot",
	propertyType: "select property type",
	surrounding: "please enter surrounding",
	aboutLocation: "select dealing outlets",
	actionProperty: "select above property",

 
},

 
submitHandler: function(form) {
	form.submit();
}

});

});

/*18-03-2024 carrer form validation */

$(document).ready(function($) {

	$("#careerForm").validate({
		rules: {
			name: "required", 


			contact: {
				        required: true,
						maxlength: 10,
						minlength: 10
					},

			email: {
					required: true,
					email: true
					},		
			address: "required",                   
			country_name: "required",
			state_name: "required",
			city_name: "required",
			applyPosition: "required",
			
		},
	
	messages: {
		name: "Please enter  Name",
		contact: { 
					required: 'Please enter contact',
					maxlength: 'contact  Max 10 digits',
					minlength: 'contact Min 10 digits'
		
					},
		email: {
			required: "Please enter Email",
			
		},
		address: "Please enter address",
		country_name: "Please enter country",
		state_name: "Please enter state",
		city_name: "Please enter city",
		totalArea: "please apply position",
		
	
	 
	},
	
	 
	submitHandler: function(form) {
		form.submit();
	}
	
	});
	
	});

/*20-03-2024 contact us form validation */

$(document).ready(function($) {

	$("#contactForm").validate({
		rules: {
			name: "required", 
			lname: "required",
			contact: {
				required: true,
				maxlength: 10,
				minlength: 10
			},

			email: {
					required: true,
					email: true
					},	
			
			
			country_name: "required",
			state_name: "required",
			city_name: "required",
			address: "required",
			zipcode: "required",
			message: "required",
			
		},
	
	messages: {
		name: "Please enter  first Name",
		lname: "Please enter last Name",

		contact: { 
			required: 'Please enter contact',
			maxlength: 'contact  Max 10 digits',
			minlength: 'contact Min 10 digits'

			},
			email: {
				required: "Please enter Email",
				
			},
		address: "Please enter address",
		zipcode: "Please enter zipcode",
		country_name: "Please enter country",
		state_name: "Please enter state",
		city_name: "Please enter city",
		message: "Please enter message",
		
	
	 
	},
	
	 
	submitHandler: function(form) {
		form.submit();
	}
	
	});
	
	});

	$(document).ready(function($) {

		$("#applyfranchise").validate({
			rules: {

				name: {
					required: true,
					},
					email: {
	
					required: true,
					email: true
					},

					contact: {
	
						required: true,
						maxlength: 10,
						minlength: 10
		
					},
					
					country_name: "required",
						state_name: "required",
						city_name: "required",
					
					
					
						zipcode: {
							required: true,
							maxlength: 6,
							minlength: 5
							},	
				
				availableCapital: "required",
				readyTostart: "required",
				perferTocontact: "required",
				message: "required",
				
				},
		
			messages: {

				name: {
					 required: 'Please enter name',
				     maxlength: 'name should not be more than 50 characters',
					 minlength: 'name must be at least 5 characters long'
					},
					email: {
						required: "Please enter Email",
						
					},
				contact: {
					required: 'Please enter contact',
					maxlength: 'contact should not be more than 10 digits',
					minlength: 'contact must be at least 10 digits'
	
				},
				
				country_name: "Select Country names",
				state_name: "Select State names",
				city_name: "Select City names",
				
				zipcode: {
					required: 'Please enter zipcode',
					min:'min 6 digit allow',
					max:'max6 digit allow'

				} ,
				
				
				
				availableCapital: "Select Capital",
				readyTostart: "Select ReadyTostart",
				perferTocontact: "Select perference",
				message: {
					required: 'Please Write message',
	
					maxlength: 'message should not be more than 500 characters',
					minlength: 'message must be at least 5 characters long'
	
				}
	
			},
		
		 
		submitHandler: function(form) {
			form.submit();
		}
		
		});
		
		});
	

/*27-03-2024 become a dealer form validation */

$(document).ready(function($) {

	$("#becomeinstaller").validate({
		rules: {
			name: "required", 
			businessName: "required",
			contact: {
				required: true,
				maxlength: 10,
				minlength: 10,
			},
	
			email: {
					required: true,
					email: true
					},
	
			address: "required",                   
			zipcode: "required",
			country_name: "required",
			state_name: "required",
			city_name: "required",
			socialAccount: "required",
			paintExperience: "required",
			currentBusiness: "required",
			website: "required",
			brands: "required",
			aboutLocation: "required",
			actionProperty: "required",
		  
		 
		},
	
	messages: {
		name: "Please enter  Name",
		businessName: "Please  businessName",
		contact: { 
			required: 'Please enter contact',
			maxlength: 'contact  Max 10 digits',
			minlength: 'contact Min 10 digits'
	
			},
			email: {
			required: "Please enter Email",
	
			},
		address: "Please enter address",
		zipcode: "Please enter zipcode",            
		country_name: "Please enter country",
		state_name: "Please enter state",
		city_name: "Please enter city",
		socialAccount: "please enter socialAccount",
		paintExperience: " please paint Experience",
		currentBusiness: "please enter currentBusiness",
		website: "please enter website",
		brands: "Select Brands Name",
		aboutLocation: "select dealing outlets",
		actionProperty: "select above property",
	
	 
	},
	
	 
	submitHandler: function(form) {
		form.submit();
	}
	
	});
	
	});

/* 07-10-2024 Get a quote */
$(document).ready(function($) {

	$("#quote_form").validate({
		rules: {
			name: "required", 
			businessName: "required",
			contact: {
				required: true,
				maxlength: 10,
				minlength: 10,
			},
	
			email: {
					required: true,
					email: true
					},
	
			address: "required",                   
			zipcode: "required",
			country_name: "required",
			state_name: "required",
			city_name: "required",
			socialAccount: "required",
			paintExperience: "required",
			currentBusiness: "required",
			website: "required",
			brands: "required",
			aboutLocation: "required",
			actionProperty: "required",
		  
		 
		},
	
	messages: {
		name: "Please enter  Name",
		businessName: "Please  businessName",
		contact: { 
			required: 'Please enter contact',
			maxlength: 'contact  Max 10 digits',
			minlength: 'contact Min 10 digits'
	
			},
			email: {
			required: "Please enter Email",
	
			},
		address: "Please enter address",
		zipcode: "Please enter zipcode",            
		country_name: "Please enter country",
		state_name: "Please enter state",
		city_name: "Please enter city",
		socialAccount: "please enter socialAccount",
		paintExperience: " please paint Experience",
		currentBusiness: "please enter currentBusiness",
		website: "please enter website",
		brands: "Select Brands Name",
		aboutLocation: "select dealing outlets",
		actionProperty: "select above property",
	
	 
	},
	
	 
	submitHandler: function(form) {
		form.submit();
	}
	
	});
	
	});

	
/* 23-11-2024 BOOK A SERVICE NOW */	

$(document).ready(function($) {

$("#book_for_mafia_service").validate({

		

		rules: {
			packageName: "required",
			name: "required", 
			contact: {
				required: true,
				maxlength: 10,
				minlength: 10,
			},
			email: {
					required: true,
					email: true
					},

			country_name: "required",
			state_name: "required",
			city_name: "required",
			zipcode: "required",
			vehicleModel: "required",
			message: "required",
			
		  
		 
		},
	
	messages: {

		packageName: "Please Select Package",
		name: "Please Enter  Name",
		contact: { 
			required: 'Please Enter Contact',
			maxlength: 'Contact Max 10 digits',
			minlength: 'Contact Min 10 digits'
	
			},
			email: {
			required: "Please Enter Email",
	
			},
		    country_name: "Select Country name",
			state_name: "Select State name",
			city_name: "Select City name",
		zipcode: "Please Enter Zipcode",            
		vehicleModel: "Please Enter VechileModel",
		message: "Please Enter Message",

	 
	},
	
	 
	submitHandler: function(form) {
		form.submit();
	}
	
	});
	
	});