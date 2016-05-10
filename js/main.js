/**
 * Created by Rick on 2/20/2016.
 */

/* function iterates through all publications, allowing each to be viewed one at a time. */
(function () {
	"use strict";
	var numberBooks = 7;           // number of publications to be viewed.
	var indexCurrentViewing = 1;
	var indexLastViewing = 0;
	var timeBetweenFlips = 10000;   // time before changing to next publication.

	for(var i = 1; i < numberBooks; i++) {  // initialize all publications to hidden, except first.
		document.getElementById("pub" + i).style.zIndex = -1;
		document.getElementById("pub" + i).style.display = "none";
	}
	window.setInterval(function(){
		indexLastViewing = indexCurrentViewing - 1;
		if(indexCurrentViewing === numberBooks) {    //test if last book in sequence viewed.
			indexCurrentViewing = 0;                 // if last, set back to first.
		}
		document.getElementById("pub" + indexLastViewing).style.zIndex = -1;        // hide current book.
		document.getElementById("pub" + indexLastViewing).style.display = "none";
		document.getElementById("pub" + indexCurrentViewing).style.zIndex = 1;      // show next book.
		document.getElementById("pub" + indexCurrentViewing).style.display = "block";
		indexCurrentViewing++;
	}, timeBetweenFlips);
})();
