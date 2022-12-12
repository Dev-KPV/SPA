let http = new XMLHttpRequest();
http.open("get", "data.json", true);
http.send();
http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let myndir = JSON.parse(this.responseText);
    let output = "";
    for (let item of myndir) {
      output += `
				<div class="images">
					<img src="${item.img}">
					<p class="title">${item.painting}</p>
					<p class="price">${item.price}.kr</p>
          <p class="artist">${item.artist}</p>
				</div>`;
    }
    //
    document.querySelector(".myndir").innerHTML = output;
  }
};

let i = document.querySelector("input"),
  o = document.querySelector("output");
o.innerHTML = i.value;
i.addEventListener(
  "input",
  function () {
    o.innerHTML = i.value;
  },
  false
);

//Veit ekki afhverju þetta virkar ekki
const search = document.querySelector(".search");
search.addEventListener("input", () => {
  //ef search er ekki tóm
  if (search.value !== "") {
    //Loopa gegnum images
    myndir.forEach((images) => {
      const artist = images.querySelector("artist");
      const artistText = artist.innerHTML.toLowerCase();
      //Convert input value to lowercase letters
      const inputText = search.value.toLowerCase();
      //ef artist er ekki = input
      if (!artistText.includes(inputText)) {
        //fela
        artist.parentElement.style.display = "none";
      } else {
        //syna
        artist.parentElement.style.display = "block";
      }
    });
  } else {
    myndir.forEach((images) => {
      images.style.display = "block";
    });
  }
});
