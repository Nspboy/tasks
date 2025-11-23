let images = [
    "https://picsum.photos/seed/a/1200/800",
    "https://picsum.photos/seed/b/1200/800",
    "https://picsum.photos/seed/c/1200/800"
];

let index = 0;

setInterval(() => {
    document.body.style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}, 3000);
