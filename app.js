"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const harry = {
    name: "Harry Potter",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "31-07-1980",
    yearOfBirth: 1980,
    ancestry: "half-blood",
    eyeColour: "green",
    hairColour: "black",
    wand: "holly,phoenix feather,11",
    patronus: "stag",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Daniel Radcliffe",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/harry.jpg",
  };

  // Hermione Granger
  const hermione = {
    name: "Hermione Granger",
    species: "human",
    gender: "female",
    house: "Gryffindor",
    dateOfBirth: "19-09-1979",
    yearOfBirth: 1979,
    ancestry: "muggleborn",
    eyeColour: "brown",
    hairColour: "brown",
    wand: "vine,dragon heartstring",
    patronus: "otter",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Emma Watson",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/hermione.jpeg",
  };

  // Ron Weasley
  const ron = {
    name: "Ron Weasley",
    species: "human",
    gender: "male",
    house: "Gryffindor",
    dateOfBirth: "01-03-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "blue",
    hairColour: "red",
    wand: "willow,unicorn tail-hair,14",
    patronus: "Jack Russell terrier",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Rupert Grint",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/ron.jpg",
  };

  //Draco Malfoy
  const draco = {
    name: "Draco Malfoy",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "05-06-1980",
    yearOfBirth: 1980,
    ancestry: "pure-blood",
    eyeColour: "grey",
    hairColour: "blonde",
    wand: "hawthorn,unicorn tail-hair,10",
    patronus: "",
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: "Tom Felton",
    alive: true,
    image: "http://hp-api.herokuapp.com/images/draco.jpg",
  };

  // Severus Snape
  const severus = {
    name: "Severus Snape",
    species: "human",
    gender: "male",
    house: "Slytherin",
    dateOfBirth: "09-01-1960",
    yearOfBirth: 1960,
    ancestry: "half-blood",
    eyeColour: "black",
    hairColour: "black",
    wand: "",
    patronus: "doe",
    hogwartsStudent: false,
    hogwartsStaff: true,
    actor: "Alan Rickman",
    alive: false,
    image: "http://hp-api.herokuapp.com/images/snape.jpg",
  };

  showCharacter(harry);
  showCharacter(ron);
  showCharacter(hermione);
}

function showCharacter(character) {
  console.log(character["image"]);
  const myHTML =
    /*html*/
    `<article>
  <img src=${character["image"]}>
  <h2>${character["name"]}</h2>
  <p>${character["house"]}</p>
  <P>${character["ancestry"]}</P>
  <p>Date of Birth: ${character["dateOfBirth"]}</p>
  <p>Eye colour: ${character["eyeColour"]}</p>
  <p>Hair colour: ${character["hairColour"]}</p>
  <p>${character["name"]} is played by ${character["actor"]}</p>
  </article>`;

  document.querySelector("#characters").insertAdjacentHTML("beforeend", myHTML);

  //   const genderCapped = capitalize(gender);
  //   const newBirthdate = changeFormat(dateOfBirth);
  //   const banner = coatOfArms(house);

  //   const trElement = /*html*/ `
  //   <tr>
  //   <td><img src=${image}></td>
  //   <td>${name}</td>
  //   <td><img src=${house}></td>
  //   <td> ${genderCapped} </td>
  //   <td>${newBirthdate}</td>
  //   </tr>
  //   `;

  //   document
  //     .querySelector("#characterTables")
  //     .insertAdjacentHTML("beforeend", trElement);
  //

  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    document.querySelector("#dialogImage").src = character.image;
    document.querySelector("#dialogName").textContent = character.name;
    document.querySelector("#dialogHouse").textContent = character.house;
    document.querySelector("#dialogBirthdate").textContent =
      character.dateOfBirth;

    document.querySelector("#dialogCharacter").showModal();
  }
}

function capitalize(word) {
  const newWord = word[0].toUpperCase() + word.substring(1);
  return newWord;
}

function changeFormat(date) {
  const firstSign = date.indexOf("-");
  const day = date.substring(0, firstSign);
  const lastSign = date.lastIndexOf("-");
  const month = date.substring(firstSign + 1, lastSign);
  const year = date.substring(lastSign + 1);
  // const newdate = date.replace("-", " ");
  return `${day}/${month}/${year}`;
}

function coatOfArms(house) {
  let banner;
  if (house == "Gryffindor") {
    banner =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-gryffindor.png";
  } else if (house == "Slytherin") {
    banner =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-slytherin.png";
  } else if (house == "Racenclaw") {
    banner =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-ravenclaw.png";
  } else {
    banner =
      "https://cederdorff.github.io/dat-js/05-data/peters-potter-app/images/housecrest-hufflepuff.png";
  }
  return banner;
}

// function originalShowCharacter(
//   name,
//   gender,
//   house,
//   dateOfBirth,
//   ancestry,
//   eyeColour,
//   hairColour,
//   actor,
//   image
// ) {

//   // const articleElement = document.createElement("article");
//   // const nameElement = document.createElement("h2");
//   // const genderElement = document.createElement("p");
//   // const dateElement = document.createElement("p");
//   // const houseElement = document.createElement("p");
//   // const ancestryElement = document.createElement("p");
//   // const eyeColourElement = document.createElement("p");
//   // const hairColourElement = document.createElement("p");
//   // const actorElement = document.createElement("p");
//   // const imageElement = document.createElement("img");
//   // nameElement.textContent = name;
//   // genderElement.textContent = gender;
//   // houseElement.textContent = house;
//   // ancestryElement.textContent = ancestry;
//   // eyeColourElement.textContent = `Eye colour: ${eyeColour}`;
//   // hairColourElement.textContent = `Hair colour: ${hairColour}`;
//   // dateElement.textContent = `Date of Birth: ${dateOfBirth}`;
//   // actorElement.textContent = `${name} is played by ${actor}`;
//   // imageElement.src = image;
//   // console.log(actorElement);
//   // articleElement.appendChild(imageElement);
//   // articleElement.appendChild(nameElement);
//   // articleElement.appendChild(genderElement);
//   // articleElement.appendChild(houseElement);
//   // articleElement.appendChild(dateElement);
//   // articleElement.appendChild(ancestryElement);
//   // articleElement.appendChild(eyeColourElement);
//   // articleElement.appendChild(hairColourElement);
//   // articleElement.appendChild(actorElement);
//   // document.querySelector("#characters").appendChild(articleElement);
//   // console.log(articleElement);
// }
