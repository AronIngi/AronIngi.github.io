var language;
var currentHtmlPage;

function ChangeLanguage(languageIndex)
{	
	language = languageIndex
	sessionStorage.setItem("languageKey", language);
	if(language === 1)
	{
		// English
		English();
	}
	else if(language === 2)
	{
		//Icelandic
		Icelandic();
	}
	else if(language === 3)
	{
		//Danish
		Danish();
	}
}

function currentPage(page)
{
	currentHtmlPage = page;
}
function onLoadMain()
{	
	language = sessionStorage.getItem("languageKey");
	currentPage("index");
	if(language == null)
	{
		language = 1;
		sessionStorage.setItem("languageKey", language);
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
function onLoadAbout()
{	
	language = sessionStorage.getItem("languageKey");
	currentPage("About");
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
function onLoadBuying()
{	
	imageIndex = 1;
	url = sessionStorage.getItem("urlKey");
	previewImageUrl = sessionStorage.getItem("previewImageKey");
	language = sessionStorage.getItem("languageKey");	
	currentPage("Buying");
	currentClothing = sessionStorage.getItem("clothingKey");
	color = sessionStorage.getItem("colorKey");
	ss();
	arrowOpacity = sessionStorage.getItem("arrowOpacityKey");
	onSale = sessionStorage.getItem("onSaleKey");
	onSaleOpacity = sessionStorage.getItem("onSaleOpacityKey");
	document.getElementById("rightArrow").style.opacity = arrowOpacity;
	document.getElementById("leftArrow").style.opacity = arrowOpacity;
	document.getElementById("originalPriceText").style.opacity = onSaleOpacity;
	document.getElementById("offPercentageB").style.opacity = onSaleOpacity;
	if(color === "blue" || color === "yellow" || color === "white")
	{
		ChangePreviewImage();
		document.getElementById("previewImage").src = previewImageUrl;
	}
	else
	{
		document.getElementById("previewImage").src = url;
	}
	document.getElementById("medium").src = "Myndir/MediumDark.png";
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

function English()
{	
	if(currentHtmlPage === "index")
	{
		document.getElementById("aboutButtonText").innerHTML = "About Us";
		document.getElementById("hoodiesText").innerHTML = "Hoodies";
		document.getElementById("tShirtText").innerHTML = "T-Shirts";
	}
	else if(currentHtmlPage === "About")
	{
		document.getElementById("backButtonText").innerHTML = "Back";
		document.getElementById("aboutEmployees").innerHTML = "About Employees";
		document.getElementById("productionHeader").innerHTML = "How We Produce";
		document.getElementById("labourHeader").innerHTML = "Child Labour";
		document.getElementById("aronText").innerHTML = "My name is Aron I am fifteen years old and interested in programming. I was looking for a summer job with  school and when I saw that there was technician needed and someone to make a website for the TC clothing brand I had to apply.";
		document.getElementById("ingolfurText").innerHTML = "My name is Ingólfur and I am fifteen years old and I felt a need for a clothing company that manufactures its products from only natural products, but I was sure I would never reach my own company and then Eyþór came, we met in Vesturbæjar ís  I went and talked to him and he said there were far too many unnatural materials used in clothes. I totally agreed and we started talking about how we could fix it and he said he had created his own business and invited so we started to expand our business and offered several more.";
		document.getElementById("hlynurText").innerHTML = "My name is Hlynur and I am fifteen years old and I was born with a mental disorder I am very interested in clothes and did not want to wear clothes made were there was child slavery. I was new to hige school and was looking for work during the summer but one day i was reading the newspaper and i saw an advertisement for a job. there was a clothing company named TC clothing and loved how they were against child slavery and the product that they produced were 100 % natural and made in a professional way, I decided to apply for TC and got the job";
		document.getElementById("eydorText").innerHTML = "My name is Eyþór and I am fifteen years old and am very interested in companies. I decided to start my own business and with that I found TC clothing. I wanted to do a clothing company that didn't pollute and helped nature rather than damage it. But I didn't know where I would get stuff for this project.";
		document.getElementById("productionText").innerHTML = "We wanted to start this project because there is a lack of natural materials used in clothes. We started this brand on May 20, 2019 and we have tried to expand it since then. TC clothing stands for Thicc Clothing but here we only sell high quality t-shirts and hoodies in all kinds of sizes and colors. We only want the best for our customers. for our hoodies and t-shirts, we use high-quality cotton grown in America on specially selected fields where our professionals handpick the cotton. The cotton is then delivered to our factory where it is dried in our high quality electric furnaces. Then the cotton is separated from the seeds and cleaned. After that the cotton is made in to a thread, the thread is then put into a machine where it’s made into cotton fabric and is ready to work with. Professionals then take over and sew the hoodies and t-shirt together. When a customer orders a product, it’s shipped on an airplane and takes about a week to arrive at the retail outlet, but we also want to ensure that the product is delivered in an acceptable manner and will be in perfect condition for the customer. If these conditions are not fulfilled we offer a refund but hopefully you never have to use it in our service here at TC clothing. We also give 15% of the total income to mental health , which helps with mental illness. and remember: <b>Quality over Quantity</b>";
		document.getElementById("fairTradeText").innerHTML = "Fair trade shows that products are made in naturall and personal way and that companies are not cheating on people with slavery or unfair pay. Our products are supported  by fair trade and we are proud of it.";
		document.getElementById("labourText").innerHTML = "We as a company have always been against child labor and have decided to try and do something about it, therefore we are giving 15% of monthly profits to organizations that work against child labor. Childlabor is the illegal activity or slavery of minors.";

	}
	else if(currentHtmlPage === "Buying")
	{
		//Price
		document.getElementById("backButtonText").innerHTML = "Back";
		if(currentSize === "Small")
		{	
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "74.99 USD";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "56.99 USD";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "61.99 USD";
					document.getElementById("originalPriceText").innerHTML = "79.99 USD"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "43.99 USD";
					document.getElementById("originalPriceText").innerHTML = "56.99 USD"
				}
			}
		}
		else if(currentSize === "Medium")
		{
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "89.99 USD";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "59.99 USD";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "78.99 USD";
					document.getElementById("originalPriceText").innerHTML = "99.99 USD"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "47.99 USD";
					document.getElementById("originalPriceText").innerHTML = "59.99 USD"
				}
			}
		}
		else if(currentSize === "Large")
		{
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "109.99 USD";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "59.99 USD";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "92.99 USD";
					document.getElementById("originalPriceText").innerHTML = "119.99 USD"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "55.99 USD";
					document.getElementById("originalPriceText").innerHTML = "69.99 USD"
				}
			}
		}
	}
	
	//Info
	if(currentClothing === "Hoodie")
	{
		if(color === "blue")
		{
			document.getElementById("headerText").innerHTML = "Blue Hoodie";
			document.getElementById("infoText").innerHTML = "This Slate Blue Hoodie is very popular here in TC clothing. It's colored with the Woad color plant, which is cultivated in North America. The plant is grown in a 100% natural way and is boiled in a pot with our hoodies, where the colors leave the plant and go in to the hoodies, which absorbs all the liquid from the plant and reaches it this beautiful blue color.";
		}
		if(color === "yellow")
		{
			document.getElementById("headerText").innerHTML = "Yellow Hoodie";
			document.getElementById("infoText").innerHTML = "Our yellow hoodie is a special version and is only out for a few days, it does not have the usual TC logo on the left chest, but Instead it has a large TC label covering the entire back. This yellow color comes from the Marigold plant which is more expensive than other colors on the market. The plant is grown in North America and is boiled in a pot with our hoodies where the color moves from the plant to the hoodie.";
		}
		if(color === "white")
		{
			document.getElementById("headerText").innerHTML = "White Hoodie";
			document.getElementById("infoText").innerHTML = "This hoodie is very special here in TC. The white hoodie is not colored with any color. It just has the color that comes from the cotton itself, which gives this bone white color and it looks great.";
		}
		if(color === "black")
		{
			document.getElementById("headerText").innerHTML = "Black Hoodie";
			document.getElementById("infoText").innerHTML = "The black hoodie is classic and cool for any occasion. We use the Phyllanthus emblica plant, which is grown in America in a 100% natural way. To color the sweater, the seeds are placed in a pot with the hoodie in which it then drinks the black liquid and gets this classic black color.";
		}
	}
	else if(currentClothing === "TShirt")
	{
		if(color === "white")
		{
			document.getElementById("headerText").innerHTML = "White Shirt";
			document.getElementById("infoText").innerHTML = "The white shirt does not use any colors just like the white hoodie. the color that the cotton gives the body is very classy and looks great.";
		}
		else if(color === "black")
		{
			document.getElementById("headerText").innerHTML = "Black Shirt";
			document.getElementById("infoText").innerHTML = "Our black shirt is colored with a much stronger black color called Hopi Sunflower. The seed from the plant becomes a very dark black color, which is then placed in boiling water where the color leaves the plant and goes into the sweater.";
		}
			
	}
}

function Icelandic()
{	
	if(currentHtmlPage === "index")
	{
		document.getElementById("aboutButtonText").innerHTML = "Um Okkur";
		document.getElementById("hoodiesText").innerHTML = "Hettupeysur";
		document.getElementById("tShirtText").innerHTML = "Stuttermabolir";
	}
	else if(currentHtmlPage === "About")
	{
		document.getElementById("backButtonText").innerHTML = "Til Baka";
		document.getElementById("aboutEmployees").innerHTML = "Um starfsmenn";
		document.getElementById("productionHeader").innerHTML = "Hvernig við framleiðum";
		document.getElementById("labourHeader").innerHTML = "Barnaþrælkun";
		document.getElementById("aronText").innerHTML = "Ég heiti Aron ég er fimmtán ára og hef áhuga á forritun. ég var að leita mér að vinnu með skóla og þegar ég sá að það vantaði tæknimann og einhvern til að gera vefsíðu fyrir fatamerkið TC clothing varð ég að sækja um.";
		document.getElementById("ingolfurText").innerHTML = "Ég heiti Ingólfur og ég er fimmtán ára gamall og mér fannst mikil þörf fyrir fatafyrirtæki sem framleiðir vörurnar sínar úr aðeins náttúrulegum afurðum en ég var viss um að ég myndi aldrei ná að stofna mitt eigið fyrirtæki og þá kom Eyþór, við hittumst í ísbúð Vesturbæjar ég fór og talaði við hann og hann sagði að það væru allt of mikið af ónáttúrulegum efnum notuð í föt. Ég var alveg sammála og við byrjuðum að tala um hvernig væri hægt að laga það og hann sagði að hann væri búinn að stofna sitt eigið fyrirtæki og bauð mér í það svo við byrjuðum að stækka fyrirtækið og buðum nokkrum fleirum.";
		document.getElementById("hlynurText").innerHTML = "Ég heiti Hlynur og er fimmtán og fæddist með Hreyfihömlun ég hef mikinn  áhuga á fötum og vill ekki klæðast fötum sem gerð eru af börnum á engum launum. Ég var ný búinn í grunnskóla og var að leita að við vinnu yfir sumarið og fór inn á Alfreð og leita að vinnu og las mig til um TC clothing og leist mjög vel á hvernig þeir fjölluðu um fyrirtækið og hönnunina á fötunum ég ákvað sækja um hjá TC og fékk starfið.";
		document.getElementById("eydorText").innerHTML = "Ég heiti Eyþór og ég er fimmtán ára gamall og er með mjög mikinn áhuga á fyrirtækjum. Ég ákvað að stofna mitt eigið fyrirtæki og með því fann ég uppá TC clothing. Mér langaði gera fatnaðar fyrirtæki sem mengaði ekki og hjálpaði náttúrunni frekar en skemmdi. En ég vissi ekki hvar ég myndi fá efnið í þetta verkefni.";
		document.getElementById("productionText").innerHTML = "Við vildum byrja þetta verkefni því okkur finnst vera gríðarlegur skortur á fötum úr náttúrulegum efnum. Við byrjuðum á þessu fatamerki 20 maí 2019 og höfum við reynt að stækka það síðan. TC clothing stendur fyrir Thicc Clothing en hér seljum við bara hágæða boli og hettupeysur í allskonar stærðum og litum. Við viljum aðeins það besta fyrir viðskiptavini okkar. Fyrir hettupeysurnar og bolina okkar notum við hágæða bómul sem ræktaður er í Ameríku á sér völdum ökrum þar sem fagmenn handtína bómulinn okkar. Bómullinn er síðan keyrður í verksmiðjuna okkar þar sem hann er þurrkaður í hágæða rafmagns ofnunum okkar. Síðan er bómullinn aðskilin frá fræunum og hreinsaður. Eftir það er hann gerður að þræði, þráðurinn er síðan settur í vél þar sem hann er gerður að bómul efni og er tilbúinn til að vinna með. Fagmenn taka síðan við og sauma hettupeysurnar og bolina. Þegar viðskiptavinur pantar sér vöru er hún flutt í flugvél og tekur u.þ.b viku að koma til viðskiptavinarins en viljum við einnig tryggja að varan sé flutt á viðunnandi hátt og komi í fullkomnu lagi til viðskiptavinarins. Ef þau skilyrði eru ekki uppfyllt þá bjóðum við upp á að þú getir fengið vöruna endurgreidda en vonandi þarftu þess aldrei og nýtur þjónustu okkar hér frá TC clothing einnig gefum við 15 % af heildar hagnaði til geðheilsu sem hjálpar við andleg veikindi. Og mundu: <b>Gæði yfir Magn</b>";
		document.getElementById("fairTradeText").innerHTML = "sanngjörn viðskipti sýna fram á að vörur séu gerðar á náttúru og persónu vænan hátt og að fyrirtæki séu ekki að svindla á fólki með þrælavinnu eða ósanngjörnum launum. vörurnar okkar eru studdar af fair trade og erum við stolltir af því.";
		document.getElementById("labourText").innerHTML = "Við í fyrirtækinu höfum alltaf verið á móti barnaþrælkun og höfum ákveðið að reyna að gera eitthvað í því, þess vegna erum við að gefa 15% af mánaðarhagnaði til samtaka sem vinna gegn barnaþrælkun. Barnaþrælkun er ólögleg starfsemi eða þrælahald barna undir lögaldri.";
	}
	else if(currentHtmlPage === "Buying")
	{
		//Price
		document.getElementById("backButtonText").innerHTML = "Til Baka";
		if(currentSize === "Small")
		{	
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "8.999 ISK";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "6.999 ISK";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "7.799 ISK";
					document.getElementById("originalPriceText").innerHTML = "9.999 ISK"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "5.499 ISK";
					document.getElementById("originalPriceText").innerHTML = "6.999 ISK"
				}
			}
		}
		else if(currentSize === "Medium")
		{
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "10.999 ISK";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "7.999 ISK";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "9.399 ISK";
					document.getElementById("originalPriceText").innerHTML = "11.999 ISK"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "5.999 ISK";
					document.getElementById("originalPriceText").innerHTML = "7.999 ISK"
				}
			}
		}
		else if(currentSize === "Large")
		{
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "13.999 ISK";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "8.999 ISK";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "11.699 ISK";
					document.getElementById("originalPriceText").innerHTML = "14.999 ISK"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "6.999 ISK";
					document.getElementById("originalPriceText").innerHTML = "8.999 ISK"
				}
			}
		}
		
		//Info
		if(currentClothing === "Hoodie")
		{
			if(color === "blue")
			{
				document.getElementById("headerText").innerHTML = "Blá Hettupeysa";
				document.getElementById("infoText").innerHTML = "Þessi Slate Blue hettupeysa er mjög vinsæl hjá okkur hér í TC clothing. Hún er lituð með litarplöntunni Woad sem er ræktuð í Bandaríkjunum, hún er ræktuð á 100 % náttúrulegan hátt og er síðan soðin í potti með hettupeysunum okkar þar sem liturinn fer úr plöntunni og í hettupeysuna sem drekkur í sig allan vökvann úr plöntunni og ná þær þannig þessum fallega bláa lit.";
			}
			if(color === "yellow")
			{
				document.getElementById("headerText").innerHTML = "Gul Hettupeysa";
				document.getElementById("infoText").innerHTML = "Gula hettupeysan hjá okkur er sérstök útgáfa og verður aðeins til í örfáa daga, hún er ekki með það vanalega TC merki á vinstri brjóstkassa heldur er hún með stórt TC merki sem þekur allt bakið. Þessi guli litur kemur frá Marigold plöntunni sem er dýrari en aðrir litir á markaðnum. Plantan er ræktuð í Bandaríkjunum og er hún soðin í vatni með hettupeysunum okkar þar sem liturinn færist frá plöntunni og yfir í hettupeysuna.";
			}
			if(color === "white")
			{
				document.getElementById("headerText").innerHTML = "Hvít Hettupeysa";
				document.getElementById("infoText").innerHTML = "Þessi hettupeysa er mjög sérstök hér hjá okkur í TC. Hvíta hettupeysan er ekki lituð með neinum lit. Hún er bara með þann lit sem kemur úr bómullinni sjálfri sem gefur peysunni þennan Bone lit og kemur það mjög vel út.";
			}
			if(color === "black")
			{
				document.getElementById("headerText").innerHTML = "Svört Hettupeysa";
				document.getElementById("infoText").innerHTML = "Svarta hettupeysan er klassísk og flott fyrir öll tilefni. Við notum Phyllanthus emblica plöntuna sem er ræktuð í Bandarínjunum á 100 % náttúrulegan hátt. Til að lita peysuna eru fræin sett í pott með hettupeysunni þar sem hún drekkur í sig svarta vökvann og fær þennan klassíska svarta lit.";
			}
		}
		else if(currentClothing === "TShirt")
		{
			if(color === "white")
			{
				document.getElementById("headerText").innerHTML = "Hvítur Bolur";
				document.getElementById("infoText").innerHTML = "Ekki er notaður neinn litur í hvíta bolinn okkar eins og í hvítu hettupeysuna. Liturinn sem bómullinn gefur bolnum er mjög flottur og kemur hann mjög vel út. ";
			}
			else if(color === "black")
			{
				document.getElementById("headerText").innerHTML = "Svartur Bolur";
				document.getElementById("infoText").innerHTML = "Svarti bolurinn okkar er litaður með miklu sterkari svörtum lit sem heitir Hopi Sunflower. Fræin úr plöntunni verða að mjög dökkum svörtum lit sem er síðan settur í sjóðandi pott þar sem liturinn fer úr plöntunni og yfir í peysuna.";
			}
			
		}
	}

}

function Danish()
{	
	if(currentHtmlPage === "index")
	{
		document.getElementById("aboutButtonText").innerHTML = "Om Os";
		document.getElementById("hoodiesText").innerHTML = "Hættetrøjer";
		document.getElementById("tShirtText").innerHTML = "T-Shirts";
	}
	else if(currentHtmlPage === "About")
	{
		document.getElementById("backButtonText").innerHTML = "Tilbage";
		document.getElementById("aboutEmployees").innerHTML = "Om medarbejdere";
		document.getElementById("productionHeader").innerHTML = "Hvordan vi producerer vores tøj";
		document.getElementById("labourHeader").innerHTML = "Børnearbejde";
		document.getElementById("aronText").innerHTML = "Jeg hedder Aron Jeg er femten år gammel, og jeg er meget interesseret i programmering. Jeg ledte efter et job hos min skole, men da kom jeg over noget på internettet, der var en tekniker, der var brug for i et beklædningsfirma, og de havde brug for nogen til at lave et websted for det TC-tøjmærke, jeg måtte anvende.";
		document.getElementById("ingolfurText").innerHTML = "Jeg hedder Ingólfur og jeg er femten år gammel, og jeg følte et behov for et beklædningsfirma, der fremstiller sine produkter fra kun naturlige produkter, men jeg var sikker på, at jeg aldrig kunne starte mit eget firma, og derefter kom Eyþór, vi mødte i Vesturbæjar ís I gik og talte til ham, og han sagde, at der var alt for mange unaturlige materialer, der blev brugt i tøj. Jeg var helt enig og vi begyndte at snakke om, hvordan vi kunne løse det, og han sagde, at han havde skabt sin egen virksomhed og inviteret mig, så vi kunne begynde at udvide vores forretning og gøre noget ud af det.";
		document.getElementById("hlynurText").innerHTML = "Jeg hedder Hlynur og jeg er femten år gammel, og jeg er født med en psykisk lidelse. Jeg er meget interesseret i tøj og ville ikke bære tøj lavet, hvor der var børne slaveri. Jeg var ny til hige skole og ledte efter arbejde i løbet af sommeren, men en dag læste jeg avisen og jeg så en annonce til et job. der var et beklædningsfirma ved navn TC tøj og elskede hvordan de var imod barn slaveri, og det produkt, de producerede var 100% naturlige og lavet professionelt, besluttede jeg at ansøge om TC og fik jobbet.";
		document.getElementById("eydorText").innerHTML = "Jeg hedder Eyþór, og jeg er femten år gammel og er meget interesseret i virksomheder. Jeg besluttede at starte min egen virksomhed og dermed fandt jeg TC clothing . Jeg ønskede at gøre et tøjfirma, der ikke forurenede og hjalp naturen i stedet for at skade det. Men jeg vidste ikke, hvor jeg ville få ting til dette projekt.";
		document.getElementById("productionText").innerHTML = "Vi ønskede at starte dette projekt, fordi der mangler naturlige materialer, der anvendes i tøj. Vi startede dette mærke den 20. maj 2019, og vi har forsøgt at udvide det siden da. TC tøj står for thicc clothing, men her sælger vi kun høj kvalitet t-shirts og hoodies i alle slags størrelser og farver. Vi vil kun have det bedste for vores kunder. For vores hoodies og t-shirts bruger vi højkvalitets bomuld dyrket i Amerika på specielt udvalgte felter, hvor vores professionelle hånd plukker bomulden. Bomulden leveres derefter til vores fabrik, hvor den tørres i vores højkvalitets elektriske ovne. Derefter adskilles bomulden fra frøene og rengøres. Derefter lægges tråden i en maskine, hvor den er lavet i bomuldsstof og er klar til at arbejde med. Fagfolk tager derefter over og syer hoodies og t-shirt sammen. Når en kunde bestiller et produkt, sendes det på et fly og tager cirka en uge at komme til kunden, men vi vil også sikre, at produktet leveres på en acceptabel måde og vil være i perfekt stand for kunden. Hvis disse betingelser ikke er opfyldt, tilbyder vi en refusion, men forhåbentlig skal du aldrig bruge den i vores service her på TC tøj. Vi giver også 15% af den samlede indkomst til mental sundhed som hjælper med psykisk sygdom. Og husk: <b>Kvalitet over Mængd</b>";
		document.getElementById("fairTradeText").innerHTML = "Fair trade viser, at produkter er fremstillet på en naturlig og personlig måde, og at virksomheder ikke snyder folk med slaveri eller uretfærdig løn. Vores produkter er understøttet af fair trade, og vi er stolter af det.";
		document.getElementById("labourText").innerHTML = "Vi som firma har altid været imod børnearbejde og har besluttet at forsøge at gøre noget ved det. Derfor giver vi 15% af det månedlige overskud til organisationer, der arbejder mod børnearbejde. Childlabor er den ulovlige aktivitet eller slaveri af mindreårige.";
	}
	else if(currentHtmlPage === "Buying")
	{	
		//Price
		document.getElementById("backButtonText").innerHTML = "Tilbage";
		if(currentSize === "Small")
		{	
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "479 DKK";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "369 DKK";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "419 DKK";
					document.getElementById("originalPriceText").innerHTML = "529 DKK"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "289 DKK";
					document.getElementById("originalPriceText").innerHTML = "369 DKK"
				}
			}
		}
		else if(currentSize === "Medium")
		{
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "579 DKK";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "429 DKK";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "529 DKK";
					document.getElementById("originalPriceText").innerHTML = "629 DKK"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "339 DKK";
					document.getElementById("originalPriceText").innerHTML = "429 DKK"
				}
			}
		}
		else if(currentSize === "Large")
		{
			if(onSale == 0)
			{
				if(currentClothing === "Hoodie")
					document.getElementById("priceText").innerHTML = "739 DKK";
				else if(currentClothing === "TShirt")
					document.getElementById("priceText").innerHTML = "469 DKK";
			}
			else if(onSale == 1)
			{
				if(currentClothing === "Hoodie")
				{
					document.getElementById("priceText").innerHTML = "619 DKK";
					document.getElementById("originalPriceText").innerHTML = "789 DKK"
				}
				else if(currentClothing === "TShirt")
				{
					document.getElementById("priceText").innerHTML = "369 DKK";
					document.getElementById("originalPriceText").innerHTML = "469 DKK"
				}
			}
		}
		
		//Info
		if(currentClothing === "Hoodie")
		{
			if(color === "blue")
			{
				document.getElementById("headerText").innerHTML = "Blå Hættetrøje";
				document.getElementById("infoText").innerHTML = "Denne Slate Blue Hoodie er meget populær her i TC tøj. Det er farvet med Woad-farveplanten, der dyrkes i Amerika, den dyrkes på en 100% naturlig måde og koges derefter i en gryde med vores hættetrøjer, hvor farverne forlader planten og går ind i hættetrøjerne, hvilket absorberer al væske fra planten og når den denne smukke blå farve.";
			}
			if(color === "yellow")
			{
				document.getElementById("headerText").innerHTML = "Gul Hættetrøje";
				document.getElementById("infoText").innerHTML = "Vores gule hættetrøje er en speciel version og er kun ude i et par dage, det har ikke det sædvanlige TC logo på venstre bryst, men i stedet har det en stor TC-etiket, der dækker hele ryggen. Denne gule farve kommer fra Marigold-anlægget, som er dyrere end andre farver på markedet. Planten dyrkes i Amerika og koges i en gryde med vores hoodies, hvor farven flytter fra planten til hættetrøje. hvid hættetrøje Denne hættetrøje er meget speciel her i TC. ";
			}
			if(color === "white")
			{
				document.getElementById("headerText").innerHTML = "Hvide Hættetrøje";
				document.getElementById("infoText").innerHTML = "er ikke farvet med nogen farve. Det har bare den farve, der kommer fra selve bomulden, hvilket giver denne knoglehvid farve og det ser godt ud.";
			}
			if(color === "black")
			{
				document.getElementById("headerText").innerHTML = "Sort Hættetrøje";
				document.getElementById("infoText").innerHTML = "Den sorte hættetrøje er klassisk og cool til enhver lejlighed. Vi bruger Phyllanthus emblica plante, som dyrkes i Amerika på en 100% naturlig måde. For at farve trøjen er frøene placeret i en gryde med hættetrøje, hvor den drikker den sorte væske og får denne klassiske sort farve.";
			}
			}
		else if(currentClothing === "TShirt")
		{
			if(color === "white")
			{
				document.getElementById("headerText").innerHTML = "Hvid T-Shirt";
				document.getElementById("infoText").innerHTML = "Den hvide skjorte bruger ikke nogen farver ligesom den hvide hoodie. den farve, som bomulden giver kroppen er meget flot og ser godt ud.";
			}
			else if(color === "black")
			{
				document.getElementById("headerText").innerHTML = "Sort T-Shirt";
				document.getElementById("infoText").innerHTML = "Vores sorte skjorte er farvet med en meget stærkere sort farve kaldet Hopi Sunflower. Frøet fra planten bliver en meget mørk sort farve, som";
			}
			
		}
	}
}

