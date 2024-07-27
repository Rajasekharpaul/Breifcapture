const body = document.body;
let title = document.head.children[2];
const explorescroll = document.getElementById('explore');
const bg = document.getElementById('bg');
const imageviewer = document.getElementById('image-viewer');
const themeToggle = document.getElementById('themeToggle');
const viewtitle = document.getElementById('viewer-title');
var link = document.getElementsByClassName('nav-dwn');
const viewdownload = document.getElementById('viewer-dwn');
const search = document.getElementById('Search');
const webpages = document.getElementById('webpages');
const login_page = document.getElementById('login-page');
const loginclose = document.getElementById('login-close');
const signup_page = document.getElementById('signup-page');
const signupclose = document.getElementById('signup-close');
const signuplink =document.getElementById('signup-link');
const loginlink =document.getElementById('login-link');

let index;

const images = [
    'url("Images/Background/Bg1.jpg")',
    'url("Images/Background/Bg2.jpg")',
    'url("Images/Background/Bg3.jpg")',
    'url("Images/Background/Bg4.jpg")',
    'url("Images/Background/Bg5.jpg")',
    'url("Images/Background/Bg6.jpg")',
    'url("Images/Background/Bg7.jpg")',
    'url("Images/Background/Bg8.jpg")',
    'url("Images/Background/Bg9.jpg")',
    'url("Images/Background/Bg10.jpg")',
    'url("Images/Background/Bg11.jpg")',
    'url("Images/Background/Bg12.jpg")',
];

const photos = [
    'Images/Explore/1.jpg',
    'Images/Explore/2.jpg',
    'Images/Explore/3.jpg',
    'Images/Explore/4.jpg',
    'Images/Explore/5.jpg',
    'Images/Explore/6.jpg',
    'Images/Explore/7.jpg',
    'Images/Explore/8.jpg',
    'Images/Explore/9.jpg',
    'Images/Explore/10.jpg',
    'Images/Explore/11.jpg',
    'Images/Explore/12.jpg',
];

//  theme toogle
document.addEventListener('DOMContentLoaded', (event) => {
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
        imageviewer.classList.toggle('dark-theme');
        imageviewer.classList.toggle('light-theme');
        viewdownload.classList.toggle('dark-theme');
        viewdownload.classList.toggle('light-theme');
        search.classList.toggle('dark-theme');
        search.classList.toggle('light-theme');
    });

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-theme');
        imageviewer.classList.add('dark-theme');
        viewdownload.classList.add('dark-theme');
        search.classList.add('dark-theme');
    } else {
        body.classList.add('light-theme');
        imageviewer.classList.toggle.add('light-theme');
        viewdownload.classList.toggle.add('light-theme');
        search.classList.toggle.add('light-theme');
    }
});

// Random hero backgroud
document.addEventListener("DOMContentLoaded", function () {
    const random = images[Math.floor(Math.random() * images.length)];
    document.getElementById('hero').style.backgroundImage = random;
});

// Login button function
const login = document.querySelectorAll('.login-btn');
login.forEach(e => {
    e.addEventListener("click", () => {
        webpages.style.display = 'flex';
        login_page.style.display = 'flex';
        title.innerHTML='Login | Briefcapture';
        body.style.overflow='hidden';
    });
});

loginclose.addEventListener('click', () => {
    webpages.style.display = 'none';
    login_page.style.display = 'none';
    title.innerHTML='Briefcapture | rajasekharpaul';
    body.style.overflow='auto';
});

loginlink.addEventListener('click',()=>{
    login_page.style.display='none';
    signup_page.style.display='flex';
    title.innerHTML='Signup | Briefcapture';
});

// Sign-up button function
const signup = document.querySelectorAll('.signup-btn');
signup.forEach(e => {
    e.addEventListener("click", () => {
        webpages.style.display = 'flex';
        signup_page.style.display = 'flex';
        title.innerHTML='Signup | Briefcapture';
        body.style.overflow='hidden';
    });
});

signupclose.addEventListener('click', () => {
    webpages.style.display = 'none';
    signup_page.style.display = 'none';
    title.innerHTML='Briefcapture | rajasekharpaul';
    body.style.overflow='auto';
});

signuplink.addEventListener('click',()=>{
    signup_page.style.display='none';
    login_page.style.display='flex';
    title.innerHTML='Login | Briefcapture';
});

// explore
explorescroll.addEventListener('click', () => {
    window.scrollBy({
        top: 500,
        behavior: "smooth"
    });
});

// image-viewer
const photo = document.querySelectorAll('.photo');
const close = document.getElementById('close');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

photo.forEach(e => {
    e.addEventListener("click", () => {
        var img = e.getElementsByTagName('img');
        var imgsrc = img[0].getAttribute('src');
        var pos = photos.indexOf(imgsrc);
        bg.style.display = 'flex';
        imageviewer.style.display = 'flex';
        document.getElementById('image').src = photos[pos];
        title.innerHTML = titles[pos];
        viewtitle.innerHTML = titles[pos];
        link[0].href = photos[pos];
        link[0].download = titles[pos];
        body.style.overflow='hidden';
        index = pos;
    });
});

close.addEventListener("click", () => {
    imageviewer.style.display = 'none';
    bg.style.display = 'none';
    title.innerHTML='Briefcapture | rajasekharpaul';
    body.style.overflow='auto';
});

prev.addEventListener("click", () => {
    index = (index == 0) ? photos.length - 1 : index - 1;
    document.getElementById('image').src = photos[index];
    title.innerHTML = titles[index];
    viewtitle.innerHTML = titles[index];
    link[0].href = photos[index];
    link[0].download = titles[index];
});

next.addEventListener("click", () => {
    index = (index == photos.length - 1) ? 0 : index + 1;
    document.getElementById('image').src = photos[index];
    title.innerHTML = titles[index];
    viewtitle.innerHTML = titles[index];
    link[0].href = photos[index];
    link[0].download = titles[index];
});

const alternate = document.getElementsByClassName('thumbnail');
let titles = [];
for (let i = 0; i < alternate.length; i++) {
    titles.push(alternate[i].getAttribute('alt'));
};

console.log(title);