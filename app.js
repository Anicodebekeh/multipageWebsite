let navLinks=document.querySelector("#navLinks");
function showMenu(){
    navLinks.style.right ="0"
}

function hideMenu(){
    navLinks.style.right ="-200px"
}


// intersection obervers

// const courseCol = document.querySelectorAll('.course-col');
// const imgFadeIn = document.querySelectorAll('.img-fadeIn')

// const colOptions = {
//    threshold: 0,
//    rootMargin: "-250px 0px -250px 0px"
// }

// const colObserver =new IntersectionObserver(function (entries, colObserver){
//   entries.forEach(entry => {
//     if(!entry.isIntersecting){
//        return
//     } else{
//         entry.target.classList.add('appear');
//         entry.target.classList.remove('appear');
//         // colObserver.unobserve(entry.target);
//     }
//   })
// }, 
// colOptions);

// courseCol.forEach(course=>{
//     colObserver.observe(course)
// })

// imgFadeIn.forEach(img=>{
//     colObserver.observe(img)
// })

// --------------------------
document.addEventListener('DOMContentLoaded', () => {
    let options ={
        // root :null,
        rootMargin: "-200px 0px",
        threshold:0
    };

    let observer = new IntersectionObserver(beTouching, options); 
    const imageFadeIn=document.querySelectorAll(".img-fadeIn, .course-col")
    imageFadeIn.forEach(img => {
        observer.observe(img);
        // console.log(img)
    })
})

function beTouching (entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){ 
            console.log(entry.target)
            entry.target.classList.add("appear")
            // observer.unobserve(entry.target)
        }
        else{
            entry.target.classList.remove("appear") 
        }
    })
}




