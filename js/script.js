const sharebtn = document.querySelector('button');
const sharediv = document.querySelector('.sharebutton')
sharebtn.innerHTML=`
<p class="show">SHARE</p>
<img class="show" src="./images/icon-facebook.svg" alt="icon-facebook">
<img class="show" src="./images/icon-twitter.svg" alt="icon-twitter">
<img class="show" src="./images/icon-pinterest.svg" alt="icon-twitter">
`;

const show = document.querySelector('.show')
show.style.display = 'none';

sharebtn.addEventListener("click", () => {
    sharebtn.classList.toggle('active');
    if (sharebtn.classList.contains('active')) {
       sharebtn.style.display = 'flex'; // or 'block' as you need
    } 
});