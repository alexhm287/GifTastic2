// JavaScript Document
// finally finished ;)


var bear = {
	name: "Bear",
	moving: false
}

var owl = {
	name: "Owl",
	moving: false
}

var cats = {
	name: "Cats",
	moving: false
}

var fish = {
	name: "Fish",
	moving: false
}

var frog = {
	name: "Frog",
	moving: false 
}

var newAnArr = [bear,owl,cats,fish,frog];



function loadButton(anObj,animalIndex) {
	//console.log(anObj);
	
	$("#animalButtons").append("<button id='animal-" + animalIndex + "' type='button'>" + anObj.name + "</button>");

}



function loadButtons() {
	for (var i=0; i<newAnArr.length ; i++) {
		var anObj = newAnArr[i];
		loadButton(anObj,i);
		
		
	} 

}


function startUI() {
	loadButtons();
	$("#addAnimal").click(function () {
		var input = $("#animal-input").val();

		if (input) {
			var anObj = {name:input,moving:false};
			newAnArr.push(anObj);
			console.log(newAnArr);
			var animalIndex = newAnArr.length-1;
			loadButton(anObj,animalIndex);
			$('button').on('click', giphyClicker);	
		}


	});

}



startUI();


function genGiphyUrlFromAnimalName(name) {
	//the specific giphy url  
};

//this is my api key 
// DwvKwzo0OEUe9stMMFLqGVWOOiiz6pfL

function giphyClicker(arg) {
      // Example queryURL for Giphy API
      
      var cai = arg.currentTarget.id;
      
      var tai = cai.replace("animal-", "");
     
      var zai = newAnArr[tai];
     
      var aName = zai.name;
     

      var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=DwvKwzo0OEUe9stMMFLqGVWOOiiz6pfL&limit=10&q=";
      queryURL += aName;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        

        $("#animals").html("")

        response.data.forEach(function(gifObject) {
         


          var gid = gifObject.id;
          var rating = gifObject.rating;
          console.log(rating);

          var giphy = "https://giphy.com/embed/" + gid;
          /// $("#animals").append("<p><iframe src='" + giphy + "' width='390' height='480' frameBorder='0' class='giphy-embed' allowFullScreen></iframe> </p>");
          var div = $("<div style='width:20%'>");
          var img = $('<img>');
          var div2 = $("<div>");
          div.append("<div style='width:140px;'>Rating: " + rating + "</div>");
          div.append(div2);
          div2.append(img);

          img.attr('src', gifObject.images.fixed_height_still.url);
          $(img).click(function(){
          	if (zai.moving) {
          		$(img).attr("src",gifObject.images.fixed_height_still.url);
          		zai.moving = false;
          	}
          	else {
          		$(img).attr("src",gifObject.images.fixed_height.url);
          		zai.moving = true;
          	}
         
          	
          });
          $('#animals').prepend(div);
         } )
	})
}
 $('button').on('click', giphyClicker)	
