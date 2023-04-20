var creations = [];

function Creation(title, type, hero, url, date, caption, tags) {
	this.title = title; // data type: str
	this.type = type; // data type: str. image, text, audio?
	this.hero = hero; // data type: str. hero image url
	this.url = url; // data type: str
	this.date = date; // data type: str
	this.caption = caption; // data type: str
	this.tags = tags; // data type: array with tags enclosed in strings
}

function addEntry(title, type, hero, url, date, caption, tags) {
	var entry = new Creation(title, type, hero, url, date, caption, tags);
	creations.push(entry);
}

addEntry("Ruby Mae Clark",
	"image",
	"images/rubyportrait04022018.png",
	"images/rubyportrait04022018.png",
	"04-02-2018",
	"A portrait of my lovely dog in colored pencil",
	["colored pencil", "drawing", "visual"]);

addEntry("Sheer Pride Bomber",
	"image",
	"images/sheerpridejacket06292018.png",
	"images/sheerpridejacket06292018.png",
	"06-29-2018",
	"Sheer bomber jacket with rainbow trim for Pride 2018. Not pictured: The countless bugbites I got during the photoshoot.",
	["handmade", "sewing", "clothing"])

addEntry("cotton candy handspun yarn",
	"image",
	"images/cottoncandyhandspun08092018.png",
	"images/cottoncandyhandspun08092018.png",
	"09-20-2018",
	"Handspun wool yarn dyed with Kool-aid",
	["handmade", "handspun yarn"]);

addEntry("Kintsugi",
	"image",
	"images/kintsugi09212018.png",
	"images/kintsugi09212018.png",
	"09-21-2018",
	"graphite with gold ink",
	["graphite", "drawing", "visual"]);

addEntry("rainy girl",
	"image",
	"images/rainygirlselfportrait11252018.png",
	"images/rainygirlselfportrait11252018.png",
	"11-25-2018",
	"Self portrait. pen and marker.",
	["visual", "drawing", "ink"]);

addEntry("Ralsei amigurumi",
	"image",
	"images/ralseiplush11062018.png",
	"images/ralseiplush11062018.png",
	"11-06-2018",
	"Crochet plushie of Ralsei from Deltarune. Acrylic yarn.",
	["handmade", "crochet", "amigurumi"]);

addEntry("untitled",
	"image",
	"images/untitledsnakes04132019.png",
	"images/untitledsnakes04132019.png",
	"04-13-2019",
	"mixed media",
	["drawing", "mixed media", "visual"]);

addEntry("Midsommar's a Knife",
	"image",
	"images/midsommarsaknife09062019.png",
	"images/midsommarsaknife09062019.png",
	"09-06-2019",
	"graphite and ink.",
	["drawing", "graphite", "ink", "typography", "visual"]);

addEntry("Tigerlily",
	"image",
	"images/tigerlily01112020.png",
	"images/tigerlily01112020.png",
	"01-11-2020",
	"colored pencil and watercolor portrait of La Roux.",
	["drawing", "colored pencil", "watercolor", "visual"]);

addEntry("Tapestry",
	"image",
	"images/handspuntapestry01252020.png",
	"images/handspuntapestry01252020.png",
	"01-25-2020",
	"tapestry woven with handmade yarn.",
	["handmade", "handspun yarn", "woven"]);

addEntry("dirty",
	"image",
	"images/dirty03072020.png",
	"images/dirty03072020.png",
	"03-07-2020",
	"mixed media piece for an unpublished zine",
	["drawing", "mixed media", "collage", "visual"]);

addEntry("Grimoire",
	"image",
	"images/leathergrimoire06152020.png",
	"images/leathergrimoire06152020.png",
	"06-15-2020",
	"leather grimoire i never used. coptic binding with leather and watercolor paper.",
	["handmade", "book arts"]);

addEntry("pastel rainbow sweater",
	"image",
	"images/rainbowsweater11242020.png",
	"images/rainbowsweater11242020.png",
	"11-24-2020",
	"freehand crochet pastel rainbow sweater",
	["handmade", "crochet", "wearable"]);

addEntry("fucked in the head",
	"image",
	"images/fuckedinthehead01192021.png",
	"images/fuckedinthehead01192021.png",
	"01-19-2021",
	"champagne problems collage",
	["visual", "collage", "mixed media", "taylor swift"]);

addEntry("granny square top",
	"image",
	"images/grannysquaretop02092021.png",
	"images/grannysquaretop02092021.png",
	"02-09-2021",
	"freehand crochet hot pink granny square top",
	["handmade", "wearable", "crochet"]);

addEntry("long story short...",
	"image",
	"images/graduationcap05092021.png",
	"images/graduationcap05092021.png",
	"05-09-2021",
	"painted graduation cap from my bachelor's degree. the design is based on the tarot card 'the world' which represents completion and enlightenment, with the symbolism of the card's imagery reimagined to fit my life and reference motifs in my previous artwork. the text 'long story short, i survived' is a lyric from taylor swift's song, long story short, because that lyric feels like a perfect encapsulation of my hellish college experience. there are also other taylor swift references, some intentional, others not. this is honestly one of my favorite things i have ever made.",
	["visual", "acrylic paint", "wearable", "astrology", "taylor swift"]);

const feed = document.getElementById("feed");

for (let i = creations.length - 1; i >= 0; i--) {
	const creation = creations[i];
	const entry = document.createElement("div");
	entry.className = "box creation";
	const link = document.createElement("a");
	link.className = "entryLink";
	link.href = creation.url;
	link.target = "_blank";
	entry.appendChild(link);
	const hero = document.createElement("img");
	hero.className = "hero";
	hero.src = creation.hero;
	link.appendChild(hero);
	const title = document.createElement("h2");
	title.className = "title";
	title.innerHTML = creation.title;
	link.appendChild(title);
	const caption = document.createElement("p");
	caption.className = "caption";
	caption.innerHTML = creation.caption;
	entry.appendChild(caption);
	feed.appendChild(entry);
}

function toggleLayout(layout) {
	const btns = document.getElementsByClassName("toggleBtn");
	feed.className = layout;
	for (var i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", function() {
			var current = document.getElementsByClassName("active");
			current[0].className = current[0].className.replace(" active", "");
			this.className += " active";
		});
	}
}
