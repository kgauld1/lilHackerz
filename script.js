var iframe = document.getElementsByTagName('iframe')[0];
function switchVideo(vid){
	if (vid == 'Patrick Lofi'){
		iframe.src = "https://www.youtube.com/embed/76FlWN4Ha-s";
	}
	if (vid == 'Bubble Tea Orchestration'){
		iframe.src = "https://www.youtube.com/embed/VAWFGYRPID0";
	}
	if (vid == 'Scatman'){
		iframe.src = "https://www.youtube.com/embed/Hy8kmNEo1i8";
	}
	if (vid == 'Supalonely'){
		iframe.src = "https://www.youtube.com/embed/Rb6Scz-5YOs";
	}
	if (vid == 'Mayday') iframe.src = 'https://www.youtube.com/embed/DT61L8hbbJ4'
	if (vid == 'Pastel') iframe.src = 'https://www.youtube.com/embed/EHyoAXILbA8'
	if (vid == 'Lips Shut'){
		iframe.src = "https://www.youtube.com/embed/lIBl-BKEp7E";
	}
	if (vid == "Kevin's Torture Device") iframe.src = 'https://www.youtube.com/embed/4tjqrQRLGxg'
}