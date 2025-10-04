const sharebtn = document.querySelector('button');
const socialMedia = document.createElement('div');
const sharediv = document.querySelector(".sharebutton");
socialMedia.setAttribute('class', 'socialmedia')
socialMedia.innerHTML=`
<p class="show">SHARE</p>
<div class="drop"></div>
<img class="show" src="./images/icon-facebook.svg" alt="icon-facebook">
<img class="show" src="./images/icon-twitter.svg" alt="icon-twitter">
<img class="show" src="./images/icon-pinterest.svg" alt="icon-twitter">  
`;
sharebtn.before(socialMedia);
socialMedia.style.display='none';
sharediv.style.boxShadow = "none";

sharebtn.addEventListener("click", () => {
    sharebtn.classList.toggle('active');
    if (sharebtn.classList.contains('active')) {
        sharebtn.style.display = 'flex';
        socialMedia.style.display = 'flex'
        sharediv.style.backgroundColor = 'hsl(217, 19%, 35%)';
        sharediv.style.boxShadow = "5px 5px 5px hsl(210, 46%, 95%)";
        
    }else{
        socialMedia.style.display = 'none';
        sharediv.style.backgroundColor = 'transparent';
        sharediv.style.boxShadow = "none";
    }
});