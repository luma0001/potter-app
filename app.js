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
  //   const newParagraph = document.createElement("p");
  //   newParagraph.textContent = "My new paragraph";
  //   document.querySelector("body").appendChild(newParagraph);
  const articleElement = document.createElement("article");
  const nameElement = document.createElement("h2");
  const genderElement = document.createElement("p");
  const dateElement = document.createElement("p");
  const houseElement = document.createElement("p");
  const ancestryElement = document.createElement("p");
  const eyeColourElement = document.createElement("p");
  const hairColourElement = document.createElement("p");
  const actorElement = document.createElement("p");
  const imageElement = document.createElement("img");

  nameElement.textContent = name;
  genderElement.textContent = gender;
  houseElement.textContent = house;
  ancestryElement.textContent = ancestry;
  eyeColourElement.textContent = eyeColour;
  hairColourElement.textContent = eyeColour;
  dateElement.textContent = `Date of Birth: ${dateOfBirth}`;
  actorElement.textContent = `${name} is played by ${actor}`;
  imageElement.src = image;
  console.log(actorElement);

  articleElement.appendChild(imageElement);
  articleElement.appendChild(nameElement);
  articleElement.appendChild(genderElement);
  articleElement.appendChild(houseElement);
  articleElement.appendChild(dateElement);
  articleElement.appendChild(ancestryElement);
  articleElement.appendChild(eyeColourElement);
  articleElement.appendChild(hairColourElement);
  articleElement.appendChild(actorElement);

  console.log(
    name,
    gender,
    house,
    dateOfBirth,
    ancestry,
    eyeColour,
    hairColour,
    actor,
    image
  );
}
