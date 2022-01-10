const reviews = [
	{
		id: 1,
		name: "susan smith",
		alt: "woman",
		job: "web developer",
		img: "img/testimonial-img-01.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "peter jones",
		alt: "man",
		job: "web designer",
		img: "img/testimonial-img-02.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "anna johnson",
		alt: "woman",
		job: "intern",
		img: "img/testimonial-img-03.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "betty sonders",
		alt: "woman",
		job: "the boss",
		img: "img/testimonial-img-04.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

// elements for include data
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// btn selectors
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");

currentPerson = 0;

window.addEventListener("DOMContentLoaded", () => {
	persons();
});

nextBtn.addEventListener("click", () => {
	currentPerson++;
	if (currentPerson > reviews.length - 1) {
		currentPerson = 0;
	}
	persons();
});
prevBtn.addEventListener("click", () => {
	currentPerson--;
	if (currentPerson < 0) {
		currentPerson = reviews.length - 1;
	}
	persons();
});
randomBtn.addEventListener("click", () => {
	currentPerson = Math.floor(Math.random() * reviews.length);
	persons();
});

const persons = () => {
	const value = reviews[currentPerson];
	img.src = value.img;
	img.alt = value.alt;
	author.textContent = value.name;
	job.textContent = value.job;
	info.textContent = value.text;
};
