
//create an array of animals
var animals = ['Tiger', 'Lion', 'Monkey', 'Racoon','Elephant','leopard','Zebra','Horse','Dog','Cat',];
//create buttons
	function appendNewButton(animal){ 
	    var a = $('<button>')
	    a.addClass('animal');
	    a.attr('data-name', animal);
	    a.text(animal);
	    $('#buttonsView').append(a);
	}
//add name of animals in button
	function renderButtons(){ 
		for (var i = 0; i < animals.length; i++){
		    appendNewButton(animals[i])
		}
	}
	renderButtons();

	//------------------------
	//create click function
	$('.animal').on('click',function(){
		
		var animal = $(this).data('name');
		console.log(animal);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
                console.log(queryURL);
                console.log(response);
                
                //result
                var results = response.data;
                
                for (var i = 0; i < results.length; i++) {
                    
                    var animalDiv = $('<div>');
                    var p = $('<p>').text("Rating: " + results[i].rating);
                    var animalImage = $('<img>');
                    animalImage.attr('src', results[i].images.fixed_height.url);
                    
                   
                    animalDiv.append(p);

                    animalDiv.append(animalImage);
                    
                    $('#animalsView').prepend(animalDiv);

                    

                    
                }
            });
    });
	
	//to add new buttons

	$('#addAnimal').on('click', function(){

		var animal = $('#animal-input').val().trim();

		animals.push(animal);
		
		appendNewButton(animal);
		$('#animal-input').val("");

		return false;
		$('#addAnimal').val();
	});
	
	