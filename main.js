const infoCard = [
  {
    image: "./images/humo-card-logo.png",
    code: "9860",
  },
  {
    image: "./images/uzcard-logo.png",
    code: "8600",
  },
  {
    image: "./images/master-card-logo.png",
    code: "5300",
  },
  {
    image: "./images/visa-card-logo.png",
    code: "4278",
  },
];

const infoNumber = [
  {
    name: "KAPITAL BANK",
    code: "1650",
  },
  {
    name: "NBU",
    code: "2742",
  },
  {
    name: "TBC",
    code: "3572",
  },
  {
    name: "OFB",
    code: "1660",
  },
  {
    name: "SQB",
    code: "7532",
  },
  {
    name: "XALQ BANK",
    code: "1135",
  },
];

const inputValues = [];

const input = document.querySelector(".input");
const cardImage = document.querySelector(".cardImage");
const cardTitle = document.querySelector(".cardTitle");

const Func = () => {
  input.addEventListener("input", (e) => {
    let inputValue = e.target.value;
    inputValues.push(inputValue);

    if (inputValue.length === 4) {
      const cardData = infoCard.find((elem) => elem.code === inputValue);
      if (cardData) {
        cardImage.src = cardData.image;
      }
    } else if (inputValue.length === 8) {
      const caseBank = infoNumber.find(
        (elem) => elem.code === inputValue.substring(4)
      );
      if (caseBank) {
        cardTitle.innerHTML = caseBank.name;
      }
    }
  });
};

Func();
