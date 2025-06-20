$(document).ready(function() {



	$.validator.addMethod("lettersonlys", function(value, element) {

		return this.optional(element) || value == value.match(/^[a-zA-Z\s]+$/);

	}, "Letters only please");



	


	$('form[id="first_form"]').validate({

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

				minlength: 10

			},

			email: {

				required: true,

				email: true

			},

			zipcode: {

				required: true,

				maxlength: 6,

				minlength: 6

			},

			state: {

				required: true,

			},

			city: {

				required: true,

			},

			vehicleModel: {

				required: true,

				maxlength: 50,

				minlength: 3,

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

			contact: {

				maxlength: 'contact should not be more than 10 digits',

				minlength: 'contact must be at least 10 digits'

			},

			vehicleModel: {

				maxlength: 'name should not be more than 50 characters',

				minlength: 'name must be at least 3 characters long'

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
	
				
				contact: {
	
					required: true,
					maxlength: 10,
					minlength: 10
	
				},

				mobile: {
	
					required: true,
					maxlength: 10,
					minlength: 10
	
				},

	
				email: {
	
					required: true,
					email: true
					},
	
				address: {
					required: true,
					},

					zipcode: {
						required: true,
						maxlength: 6,
						minlength: 5
						},	
					
				currentProfession: "required",
				owningBusiness: "required",
				availableCapital: "required",
				readyTostart: "required",
				perferTocontact: "required",
				franchiseLocation: "required",
				hearAboutus: "required",
				message: "required",
				country_name: "required",
				state_name: "required",
				city_name: "required",
				},
		
			messages: {

				name: {
					 required: 'Please enter name',
				     maxlength: 'name should not be more than 50 characters',
					 minlength: 'name must be at least 5 characters long'
					},
				contact: {
					required: 'Please enter contact',
					maxlength: 'contact should not be more than 10 digits',
					minlength: 'contact must be at least 10 digits'
	
				},
				mobile: {
					required: 'Please enter ALternate number',
					maxlength: 'contact should not be more than 10 digits',
					minlength: 'contact must be at least 10 digits'
	
				},
				email: {
						required: "Please enter Email",
						
					},
				address: "Please enter address",
				currentProfession: "Please enter currentProfession",
				owningBusiness: "Please enter owningBusiness",
				availableCapital: "Select Capital",
				readyTostart: "Select ReadyTostart",
				perferTocontact: "Select perference",
				franchiseLocation: "Please enter franchiseLocation",
				hearAboutus: "Please enter hearAboutus",
				zipcode: {
					required: 'Please enter zipcode',
					min:'min 6 digit allow',
					max:'max6 digit allow'

				} ,
				country_name: "Please enter country",
				state_name: "Please enter state",
				city_name: "Please enter city",


	
				
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
