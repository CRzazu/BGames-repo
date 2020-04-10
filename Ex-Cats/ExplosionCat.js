let type = ["Attack", "Shuffle", "Nope", "Skip", "Favor", "SeeTheFuture"];
let count = [4, 4, 5, 4, 4, 5];
let deck = [];
let FirstPlayerCard = [];
let SecondPlayerCard = [];
let CheckPlayer = 1;
//"ExplosionCats", "Defuse"
// 4, 6
// 5x4
function CreateCard() {
  for (let i = 0 ; i < type.length ; i ++) {
    for (let j = 0 ; j < count[i];j++) {
	  let cards = {Value: type[i]};
	  CreateDeck(cards);
    }
  }


 // return deck;
}


function CreateDeck(cards){
  deck.push(cards);
}


function ShuffleDeck(){
   for(let i = 0; i < 1000; i++){
   	shuffle(deck);
   }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function Preparation() {

  CreateCard();
 
  ShuffleDeck();

  console.log(deck);

FirstPlayerCard.push({Value:"Defuse"});
SecondPlayerCard.push({Value:"Defuse"});

console.log(FirstPlayerCard);
console.log(SecondPlayerCard);

for(let i = 0; i < 3;i++) {
  FirstPlayerCard.push(deck.pop());
  SecondPlayerCard.push(deck.pop());
}

console.log(deck);

RenderPlayerCard();

}

function RenderPlayerCard() {


      document.getElementById("FirstPlayer").innerHTML = "";

  for(let i = 0; i < FirstPlayerCard.length; i++)
	{
		let type = document.createElement("div");
		type.className = FirstPlayerCard[i].Value;
		type.classList.add("card-container");
		type.setAttribute("onclick", "CardEffects(this)");
		type.innerHTML = FirstPlayerCard[i].Value;


		document.getElementById("FirstPlayer").appendChild(type);
	}

	   document.getElementById("SecondPlayer").innerHTML = "";

  for(let i = 0; i < SecondPlayerCard.length; i++)
	{
		let type = document.createElement("div");
		type.className = SecondPlayerCard[i].Value;
		type.classList.add("card-container");
		type.setAttribute("onclick", "CardEffects(this)");
		type.innerHTML = SecondPlayerCard[i].Value;


		document.getElementById("SecondPlayer").appendChild(type);
	}

	 
}

function CardEffects(link)
{
   let t = link.innerText || link.textContent;

  if(t  == "Attack") {
    Attack();
    RenderPlayerCard();
  }
  if(t == "Shuffle"){
  	ShuffleDeck();
  }

}


function Attack()
{
  if(CheckPlayer == 1)
  	return FirstPlayerCard.push(deck.pop());
  else 
  	return SecondPlayerCard.push(deck.pop());
}