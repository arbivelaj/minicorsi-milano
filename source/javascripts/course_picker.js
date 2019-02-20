let main_card1 = document.querySelector(".card-main1");
let main_card2 = document.querySelector(".card-main2");
let main_card3 = document.querySelector(".card-main3");
let array_of_cards = [main_card1, main_card2, main_card3]

let section1 = document.querySelector(".Web");
let section2 = document.querySelector(".Product");
let section3 = document.querySelector(".API")
let array_of_sections = [section1, section2, section3]


array_of_cards.forEach(function(element) {

  element.addEventListener("click", event => {
    // activate span of clicked one
    document.querySelector("span.displayed").classList.remove("displayed");
    event.currentTarget.nextElementSibling.classList.add("displayed")
    // console.log(document.querySelector("span:not([display-none])"))
     // Product
    array_of_sections.forEach(function(element) {
      if (element.classList[0] == event.currentTarget.innerText.split(" ")[0] ) {
        document.querySelector("div.displayed").classList.remove("displayed");
        element.classList.add("displayed");
      }
      // console.log(element.classList[0])
      // console.log(event.currentTarget.innerText.split(" ")[0])
    })
  })
});
