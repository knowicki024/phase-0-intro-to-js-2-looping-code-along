const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(name) {
   const thankYouMessages = [];
    for (let i = 0; i < name.length; i++) {
        thankYouMessages.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}
writeCards(names);

function countDown() {
for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown);
}
}

