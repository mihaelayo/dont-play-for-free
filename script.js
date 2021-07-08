// Sidenav

// window.addEventListener('DOMContentLoaded', () => {

// 	const observer = new IntersectionObserver(entries => {
// 		entries.forEach(entry => {
// 			const id = entry.target.getAttribute('id');
// 			if (entry.intersectionRatio > 0) {
// 				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
// 			} else {
// 				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
// 			}
// 		});
// 	});

// 	// Track all sections that have an `id` applied
// 	document.querySelectorAll('section[id]').forEach((section) => {
// 		observer.observe(section);
// 	});
	
// });

// var finalTotalIncome = document.getElementById("finalTotalResult").value;

function calcTotal() {
	var finalTotalIncome = parseFloat(totalConcertsResult.value) || 0 + parseFloat(totalDownloadsResult.value) || 0 + parseFloat(totalStreamingResult.value) || 0+ parseFloat(merchProfit.value) || 0;
	// finalTotalResult.innerHTML = finalTotalIncome.value;
	
}

// Concerts

function calcConcerts() {
 	var numberConcerts = document.getElementById("aConcerts").value;
 	var profitConcerts = document.getElementById("bConcerts").value;
 	var finalConcertIncome = numberConcerts * profitConcerts;
 	document.getElementById("totalConcertsResult").value = parseFloat(finalConcertIncome).toFixed(2);
 	finalConcertsResult.innerHTML = totalConcertsResult.value;
 	calcTotal();
}

// Downloads

function calcDownloads() {
 	var numberDownloads = document.getElementById("aDownloads").value;
 	var profitDownloads = document.getElementById("bDownloads").value;
 	var finalDownloadsIncome = numberDownloads * profitDownloads;
 	document.getElementById("totalDownloadsResult").value = parseFloat(finalDownloadsIncome).toFixed(2);
 	finalDownloadsResult.innerHTML = totalDownloadsResult.value;
 	calcTotal();
}

// Streaming

function calcStreaming() {
	var spotifyProfit = document.getElementById("spotifyProfit").value * 0.0035;
	var youtubeProfit = document.getElementById("youtubeProfit").value * 0.0006;
	var appleProfit = document.getElementById("appleProfit").value * 0.0060;
	var tidalProfit = document.getElementById("tidalProfit").value * 0.0010;
	var soundcloudProfit = document.getElementById("soundcloudProfit").value * 0.0025;
	var finalStreamingIncome = spotifyProfit + youtubeProfit + appleProfit + tidalProfit + soundcloudProfit;
	document.getElementById("totalStreamingResult").value = parseFloat(finalStreamingIncome).toFixed(2);
	finalStreamingResult.innerHTML = totalStreamingResult.value;
	calcTotal();
}

// Merch

	function calcMerch() {
		var finalMerchIncome = document.getElementById("finalTotalResult").value;
		var finalMerchIncome = document.getElementById("merchProfit").value;
		finalMerchResult.innerHTML = merchProfit.value;
		calcTotal();
}		

// Result


