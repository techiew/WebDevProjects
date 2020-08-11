
window.onload = function() 
{
	
	var images = document.getElementsByTagName("img");
	
	for(var i = 0; i < images.length; i++)
	{
		
		images[i].addEventListener("click", function (e) 
		{
			window.location = (e.target.src);
		});
		
	}
	
}