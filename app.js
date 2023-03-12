let navLinks=document.querySelector("#navLinks");
function showMenu(){
    navLinks.style.right ="0"
}

function hideMenu(){
    navLinks.style.right ="-200px"
}


// intersection obervers

const courseCol = document.querySelectorAll('.course-col');
const imgFadeIn = document.querySelectorAll('.img-fadeIn')

const colOptions = {
   threshold: 0,
   rootMargin: "0px 0px -250px 0px"
}

const colObserver =new IntersectionObserver(function (entries, colObserver){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
       return
    } else{
        entry.target.classList.add('appear');
        colObserver.unobserve(entry.target);
    }
  })
}, 
colOptions);

courseCol.forEach(course=>{
    colObserver.observe(course)
})

imgFadeIn.forEach(img=>{
    colObserver.observe(img)
})

// const options= {
//     threshold:0.5
//  }

// const imgobserver = new IntersectionObserver(function (entries, imgobserver){
//     entries.forEach(entry =>{
//         if(!entry.isIntersecting){
//             return
//         }else{
//             entry.target.classList.add('imgappear')
//             imgobserver.unobserve(entry.target)
//         }

//     })
// }, options);




