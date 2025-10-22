document.addEventListener("DOMContentLoaded", function (){

	// 스크롤 여부에 따른 헤더 스타일 & 탑버튼 노출
	const topButton = document.querySelector(".btn_top");
	const pageHeader = document.querySelector("#header");

	window.addEventListener("scroll", function () {
		if (window.scrollY === 0) {
			topButton.style.display = "none";
			pageHeader.classList.remove("on");
		} else {
			topButton.style.display = "block";
			pageHeader.classList.add("on");
		}
	});


	// 스크롤 텍스트 효과
	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const el = entry.target;
			if (entry.isIntersecting) {
				el.classList.add('show');
			} else {
				el.classList.remove('show');
			}
		});
	}, {
		threshold: 0.1,
	});

	document.querySelectorAll('.scroll_text').forEach(el => {
		observer.observe(el);
	});
});


function scrollIntoStart(id) {
	const x = document.getElementById(id);
	x.scrollIntoView({ behavior: "smooth", block: "start" });
}


