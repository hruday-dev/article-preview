const sharebtn = document.querySelector('button');
const socialMedia = document.createElement('div');
const sharediv = document.querySelector(".sharebutton");
const mediaQuery = window.matchMedia('(max-width: 600px)');
socialMedia.setAttribute('class', 'socialmedia')
socialMedia.innerHTML=`
<p class="show">SHARE</p>
<img class="show" src="./images/icon-facebook.svg" alt="icon-facebook">
<img class="show" src="./images/icon-twitter.svg" alt="icon-twitter">
<img class="show" src="./images/icon-pinterest.svg" alt="icon-twitter">  
`;
sharebtn.before(socialMedia);
socialMedia.style.display='none';

sharebtn.addEventListener("click", () => {
    sharebtn.classList.toggle('active');
    if (sharebtn.classList.contains('active')) {
        sharebtn.style.display = 'flex';
        socialMedia.style.display = 'flex'
        if (mediaQuery.matches){
            sharediv.style.backgroundColor = 'hsl(217, 19%, 35%)';
        }
    }else{
        socialMedia.style.display = 'none';
        sharediv.style.backgroundColor = 'transparent';
    }
});