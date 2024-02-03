document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');

	const allNavItems = document.querySelectorAll('.nav-link');
	const navList = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	allNavItems.forEach((item) =>
		item.addEventListener('click', () => navList.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
});

const msgStatus = document.querySelector('msg-status');

console.log(document.location.search);

if (document.location.search === '?mail_status=sent') {
	msgStatus.classList.add('success');
	msgStatus.textContent = 'Wiadomość wysłana!';

	setTimeout(() => {
		msgStatus.classList.add('success');
	}, 3000);
}
if (document.location.search === '?mail_status=error') {
	msgStatus.classList.add('error');
	msgStatus.textContent = 'Wystąpił błąd.';

	setTimeout(() => {
		msgStatus.classList.add('error');
	}, 3000);
}

const footeryear = document.querySelector('.footer__year');

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footeryear.innerText = year;
};

handleCurrentYear();

const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function () {
	mobileNav.classList.toggle('active');
	burgerIcon.classList.toggle('active');
});
