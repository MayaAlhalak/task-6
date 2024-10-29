fetch ('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res=> res.json())
    .then(res=> card(res))
const root = document.querySelector(".root")
function card( res) {
    console.log(res)
for (let index = 42 ; index < res.length; index++) {
       root.innerHTML += `
       <div class="image d-flex flex-column mx-3 mt-5 text-center ">
       <img src="${res[index].simple_thumb}" alt="" >
        <h3 class="mt-4 title">${res[index].title}</h3>
       <h5 class="text-black-50">${res[index].author}</h5>
       </div>
       ` 
    }
}

fetch ('https://wolnelektury.pl/api/books/studnia-i-wahadlo/')
.then(res=> res.json())
.then(res=> selling(res)) 

const DivOne = document.querySelector(".selling-left")
const DivTwo = document.querySelector(".selling-right")

function selling(res) {
    console.log(res)
    DivOne.innerHTML = `
    <img src="${res.cover}" alt="" style="height="500px">
    `
    DivTwo.innerHTML += `
    <h2 class= "d-flex align-items-start justify-content-center flex-column text-capitalize fs-1 line-under">best selling books</h2>
    <h5 class="text-black-50 my-5">by${res.authors[0].name}</h5>
    <h3>${res.title}</h3>
    <p class="text-black-50 lh-lg my-3"> ${res.fragment_data.html}</p>
    `
}

fetch ('https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/')
    .then(res=> res.json())
    .then(res=> popular(res))

const book = document.querySelector(".book")

function popular(res) {
    for (let index = 0; index < 8; index++) {
        book.innerHTML += `
            <div class="col-lg-3  col-md-4 col-sm-12 ">
            <img src="${res[index].simple_thumb}" alt="" class= "imge-book">
            <h3 class="mt-4 title">${res[index].title}</h3>
            <h5 class="text-black-50">${res[index].author}</h5>
            </div>
        ` 
    }
}

const Nav = document.querySelector(".navbar")
window.addEventListener('scroll' , function(){
    if (window.scrollY > 50) {
        Nav.classList.add('nav-white');
    } else {
        Nav.classList.remove('nav-white');
    }
})