var currentSize = "Medium";
var currentClothing;
var url;
var color;
var index;
var imageIndex;
var arrowOpacity;
var previewImageUrl;
var onSale;
var onSaleOpacity;

function SetClothing(clothing)
{
	currentClothing = clothing;
	sessionStorage.setItem("clothingKey", currentClothing);
}

function Sizes(path)
{
	if(path === "Myndir/SmallDark.png")
	{
		currentSize = "Small";
		document.getElementById("small").src = path;
		document.getElementById("medium").src = "Myndir/Medium.png";
		document.getElementById("large").src = "Myndir/Large.png";
	}
	else if(path === "Myndir/MediumDark.png")
	{
		currentSize = "Medium";
		document.getElementById("medium").src = path;
		document.getElementById("small").src = "Myndir/Small.png";
		document.getElementById("large").src = "Myndir/Large.png";
	}
	else if(path === "Myndir/LargeDark.png")
	{
		currentSize = "Large";
		document.getElementById("large").src = path;
		document.getElementById("small").src = "Myndir/Small.png";
		document.getElementById("medium").src = "Myndir/Medium.png";
	}
	if(language == 1)
	{
		// English
		English();
	}
	else if(language == 2)
	{
		//Icelandic
		Icelandic();
	}
	else if(language == 3)
	{
		//Danish
		Danish();
	}
}


function ss()
{
	if(color === "blue" || color === "yellow" || color === "white")
	{
		document.getElementById("rightArrow").addEventListener('click', function(){
			imageIndex++;		
			if(imageIndex > 4)
			{
				imageIndex = 1;
			}
			ChangePreviewImage();
			document.getElementById("previewImage").src = previewImageUrl;
			});
		document.getElementById("leftArrow").addEventListener('click', function(){
			imageIndex--;
			if(imageIndex < 1)
			{
				imageIndex = 4;
			}
			ChangePreviewImage();
			document.getElementById("previewImage").src = previewImageUrl;
			});
	}
	sessionStorage.setItem("previewImageKey",previewImageUrl);
}

function ChangePreviewImage()
{
	if(color === "blue")
	{	
		if(imageIndex === 1)
		{
			previewImageUrl = url;
		}
		else if(imageIndex === 2)
		{
			previewImageUrl = "Myndir/BlueHoodie1.png";
		}
		else if(imageIndex === 3)
		{
			previewImageUrl = "Myndir/BlueHoodie2.png";
		}
		else if(imageIndex === 4)
		{
			previewImageUrl = "Myndir/BlueHoodie3.png";
		}
	}
	else if(color === "yellow")
	{
		if(imageIndex === 1)
		{
			previewImageUrl = url;
		}
		else if(imageIndex === 2)
		{
			previewImageUrl = "Myndir/YellowHoodie1.png";
		}
		else if(imageIndex === 3)
		{
			previewImageUrl = "Myndir/YellowHoodie2.png";
		}
		else if(imageIndex === 4)
		{
			previewImageUrl = "Myndir/YellowHoodie3.png";
		}
	}
	else if(color === "white" && currentClothing === "TShirt")
	{
		if(imageIndex === 1)
		{
			previewImageUrl = url;
		}
		else if(imageIndex === 2)
		{
			previewImageUrl = "Myndir/TShirt1.png";
		}
		else if(imageIndex === 3)
		{
			previewImageUrl = "Myndir/TShirt2.png";
		}
		else if(imageIndex === 4)
		{
			previewImageUrl = "Myndir/TShirt3.png";
		}
	}
	else if(color === "white" && currentClothing === "Hoodie")
	{
		if(imageIndex === 1)
		{
			previewImageUrl = url;
		}
		else if(imageIndex === 2)
		{
			previewImageUrl = "Myndir/WhiteHoodie1.png";
		}
		else if(imageIndex === 3)
		{
			previewImageUrl = "Myndir/WhiteHoodie2.png";
		}
		else if(imageIndex === 4)
		{
			previewImageUrl = "Myndir/WhiteHoodie3.png";
		}
	}
}

for(i = 1;i<document.getElementsByClassName("cimage").length;i++)
{
	document.getElementById("cell" + i).addEventListener("click", function(e)
	{
		url = e.target.src;
		index = e.target.id;
		if(index === "cell1")
		{
			color = "blue";
			arrowOpacity = 1;
			onSale = 0;
			onSaleOpacity = 0;
		}
		else if(index === "cell2")
		{
			color = "yellow";
			arrowOpacity = 1;
			onSale = 1;
			onSaleOpacity = 0.6;
		}
		else if(index === "cell3")
		{
			color = "white";
			arrowOpacity = 1;
			onSale = 0;
			onSaleOpacity = 0;
		}
		else if(index === "cell4")
		{
			color = "black";
			arrowOpacity = 0;
			onSale = 0;
			onSaleOpacity = 0;
		}
		else if(index === "cell5")
		{
			color = "white";
			arrowOpacity = 1;
			onSale = 0;
			onSaleOpacity = 0;
		}
		else if(index === "cell6")
		{
			color = "black";
			arrowOpacity = 0;
			onSale = 0;
			onSaleOpacity = 0;
		}
		sessionStorage.setItem("onSaleOpacityKey", onSaleOpacity);
		sessionStorage.setItem("onSaleKey", onSale);
		sessionStorage.setItem("arrowOpacityKey", arrowOpacity);
		sessionStorage.setItem("colorKey", color);
		sessionStorage.setItem("urlKey", url);
	});
}

