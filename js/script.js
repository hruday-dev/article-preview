const sharebtn = document.querySelector('button');

const newdiv= document.createElement('div');
newdiv.innerHTML=`
<p>SHARE</p>
<img src="./images/icon-facebook.svg" alt="icon-facebook">
<img src="./images/icon-twitter.svg" alt="icon-twitter">
<img src="./images/icon-pinterest.svg" alt="icon-twitter">
`;

newdiv.classList.add('share');
newdiv.style.display = 'none';

// Insert once initially
sharebtn.before(newdiv);

sharebtn.addEventListener("click", () => {
  sharebtn.classList.toggle('active');
  if (sharebtn.classList.contains('active')) {
    newdiv.style.display = 'flex';
    sharebtn.style.zIndex = '1' // or 'block' as you need
  } else {
    newdiv.style.display = 'none';
  }
});