"use strict";

// ============ LOAD & INIT APP ============ //
window.addEventListener("load", initApp);

function initApp() {
  // Harry Potter
  const potterName = "Harry Potter";
  const potterGender = "male";
  const potterHouse = "Gryffindor";
  const potterDateOfBirth = "31-07-1980";
  const potterAncestry = "half-blood";
  const potterEyeColour = "green";
  const potterHairColour = "black";
  const potterActor = "Daniel Radcliffe";
  const potterImage = "http://hp-api.herokuapp.com/images/harry.jpg";

  //   console.log(
  //     potterName,
  //     potterGender,
  //     potterHouse,
  //     potterDateOfBirth,
  //     potterAncestry,
  //     potterEyeColour,
  //     potterHairColour,
  //     potterActor,
  //     potterImage
  //   );

  showCharacter(
    potterName,
    potterGender,
    potterHouse,
    potterDateOfBirth,
    potterAncestry,
    potterEyeColour,
    potterHairColour,
    potterActor,
    potterImage
  );

  showCharacter(
    "Ron Weasley",
    "male",
    "Gryffindor",
    "01-03-1980",
    "pure blood",
    "blue",
    "red",
    "Rupert Grint",
    "http://hp-api.herokuapp.com/images/ron.jpg"
  );

  showCharacter(
    potterName,
    potterGender,
    potterHouse,
    potterDateOfBirth,
    potterAncestry,
    potterEyeColour,
    potterHairColour,
    potterActor,
    potterImage
  );
}

function showCharacter(
  name,
  gender,
  house,
  dateOfBirth,
  ancestry,
  eyeColour,
  hairColour,
  actor,
  image
) {
  const myHTML =
    /*html*/
    `<article>
    <img src=${image}>
    <h2>${name}</h2>
    <p>${house}</p>
    <P>${ancestry}</P>
    <p>Date of Birth: ${dateOfBirth}</p>
    <p>Eye colour: ${eyeColour}</p>
    <p>Hair colour: ${hairColour}</p>
    <p>${name} is played by ${actor}</p>
    </article>`;

  // document.querySelector("#characters").insertAdjecentHTML(beforeedn, myHTML);

  const genderCapped = capitalize(gender);
  const newBirthdate = changeFormat(dateOfBirth);
  const banner = coatOfArms(house);

  const trElement = /*html*/ `
  <tr>
  <td><img src=${image}></td>
  <td>${name}</td>
  <td><img src=${house}></td>
  <td> ${genderCapped} </td>
  <td>${newBirthdate}</td>
  </tr>
  `;

  document
    .querySelector("#characterTables")
    .insertAdjacentHTML("beforeend", trElement);
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

function originalShowCharacter(
  name,
  gender,
  house,
  dateOfBirth,
  ancestry,
  eyeColour,
  hairColour,
  actor,
  image
) {
  // const articleElement = document.createElement("article");
  // const nameElement = document.createElement("h2");
  // const genderElement = document.createElement("p");
  // const dateElement = document.createElement("p");
  // const houseElement = document.createElement("p");
  // const ancestryElement = document.createElement("p");
  // const eyeColourElement = document.createElement("p");
  // const hairColourElement = document.createElement("p");
  // const actorElement = document.createElement("p");
  // const imageElement = document.createElement("img");
  // nameElement.textContent = name;
  // genderElement.textContent = gender;
  // houseElement.textContent = house;
  // ancestryElement.textContent = ancestry;
  // eyeColourElement.textContent = `Eye colour: ${eyeColour}`;
  // hairColourElement.textContent = `Hair colour: ${hairColour}`;
  // dateElement.textContent = `Date of Birth: ${dateOfBirth}`;
  // actorElement.textContent = `${name} is played by ${actor}`;
  // imageElement.src = image;
  // console.log(actorElement);
  // articleElement.appendChild(imageElement);
  // articleElement.appendChild(nameElement);
  // articleElement.appendChild(genderElement);
  // articleElement.appendChild(houseElement);
  // articleElement.appendChild(dateElement);
  // articleElement.appendChild(ancestryElement);
  // articleElement.appendChild(eyeColourElement);
  // articleElement.appendChild(hairColourElement);
  // articleElement.appendChild(actorElement);
  // document.querySelector("#characters").appendChild(articleElement);
  // console.log(articleElement);
}
