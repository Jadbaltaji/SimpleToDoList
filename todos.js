$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut("500ms",function(){
			$(this).remove()		
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(){
	if(event.which===13){
		//GRABS TEXT
		var todoText= $(this).val();
		$(this).val("");
		//CREATES NEW LI
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
	
})

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});