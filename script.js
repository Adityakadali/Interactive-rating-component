var rating;
var ratingList = document.querySelectorAll(".rating");
var button = document.querySelector(".btn-primary");
var card = document.querySelector(".card");
// adding event listeners to the ul
ratingList.forEach((element) =>
  element.addEventListener("click", (event) => {
    rating = element.id;
  })
);
// submit button
button.addEventListener("click", (event) => {
  if (rating == undefined) {
  } else {
    card.innerHTML = `
    <div class="thank-you">
        <img src="./images/illustration-thank-you.svg" alt="" />
      </div>
      <div class="star-rating">
        <p>You selected ${rating} out of 5</p>
      </div>
      <h2 class="thankyou m-auto">Thank you!</h2>
      <p class="thank-content">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    `
  }
});
