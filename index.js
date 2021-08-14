// Code your solutions in this file
/*const gifts = ["teddy bear", 'drone', 'dog'];

function wrappingGifts (gifts){
    for(let i=0; i<gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrappingGifts (gifts);*/
const cards = [];

function writeCards(names, eventName){
    for(let i=0; i<names.length; i++){
        cards.push(`Merry ${eventName} ${names[i]}!`);
    }
    return cards
}

function countDown(numb){
    while(numb>=0){
        console.log(numb);
        numb--;
    }
}
countDown(0);

/*for(let age= 30; age<40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}*/
