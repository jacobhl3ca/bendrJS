// Modify so:
// 1) When​ ​the​ ​page​ ​first​ ​loads,​ ​a​ ​random​ ​beer​ ​is​ ​retrieved​ ​from​ ​the​ ​Punk​ ​API​ ​(documentation here:​ ​​https://punkapi.com/documentation/v2​).​ ​
// The​ ​beer's​ ​name​ ​and​ ​image​ ​should​ ​be loaded​ ​into​ ​the​ ​appropriate​ ​elements​ ​on​ ​the​ ​page:​ ​​current-beer-image​​ ​and current-beer-title
// 2) Whenever​ ​the​ ​'Thumbs​ ​Up'​ ​button​ ​is​ ​clicked:
	// a) The​ ​name​ ​of​ ​the​ ​currently​ ​displayed​ ​beer​ ​should​ ​be​ ​appended​ ​to​ ​the liked-beers-list​​ ​as​ ​a​ ​list​ ​item
	// b) A​ ​new​ ​beer​ ​should​ ​be​ ​retrieved​ ​to​ ​replace​ ​the​ ​currently​ ​displayed​ ​beer
// 3) Whenever​ ​the​ ​'Thumbs​ ​Down'​ ​button​ ​is​ ​clicked:
	// a) A​ ​new​ ​beer​ ​should​ ​be​ ​retrieved​ ​to​ ​replace​ ​the​ ​currently​ ​displayed​ ​beer
	// 4) While​ ​a​ ​new​ ​beer​ ​is​ ​being​ ​retrieved​ ​the​ ​image​ ​should​ ​be​ ​(temporarily)​ ​replaced​ ​with​ ​the provided​ ​​loader.svg​.

// While​ ​a​ ​new​ ​beer​ ​is​ ​being​ ​retrieved​ ​the​ ​Thumbs​ ​Up​ ​and​ ​Thumbs​ ​Down​ ​buttons​ ​should​ ​be disabled;​ ​
// clicking​ ​on​ ​them​ ​should​ ​produce​ ​no​ ​result.
--
//￼Be​ ​aware​ ​that​ ​the​ ​​Punk​ ​API​ ​is​ ​rate-limited​.​ ​
// If​ ​your​ ​IP​ ​address​ ​(which​ ​is​ ​likely​ ​to​ ​be​ ​shared​ ​within your​ ​residence)​ ​
// make​ ​too​ ​many​ ​requests​ ​(for​ ​beers)​ ​in​ ​a​ ​short​ ​period​ ​of​ ​time​ ​you​ ​may​ ​find​ ​that requests​ ​start​ ​to​ ​fail.​ ​​
// This​ ​is​ ​temporary​​ ​​and​ ​will​ ​resolve​ ​itself,​ ​ ​typically​ ​within​ ​an​ ​hour.