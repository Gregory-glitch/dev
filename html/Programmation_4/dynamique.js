let numberOfCats = 2;

let numberOfDogs = 4;



let totalCDs = 67;
let totalVinyls = 34;

let totalMusic = totalCDs + totalVinyls;


let cookiesInJar = 10;
let cookiesRemoved = 2;

let cookiesTotal = cookiesInJar - cookiesRemoved;


let cookiesInJar = 10;

cookiesInJar -= 2; // peut-être lu comme 10-2=8 ou "cookiesInJar-2="//


let numberOfLikes = 10;

numberOfLikes++; //Les signes ++ correspondent à une "incrémentation", c'est
//donc égal à 11//

numberOfLikes--; //correspond une désincrémentation, on revient donc à
//10 qui est la valeur initiale de la variable//


let costPerProduct = 20;
let numberOfProducts =5;

let totalCost = costPerProduct * numberOfProducts;

let averageCostPerProduct = totalCost / numberOfProducts; 


let numberOfCats = 2;

numberOfCats *= 6; //c'est égal à 12//

numberOfCats /= 3; //c'est égal à 4//



let firstName = "Will";
let lastName = "Alexander";

let fullName = firstName + " " + lastName; //On réalise ce qu'on appelle une
//concanétation entre 2 chaînes de caractères//

//Les objets, les variables null et undefined//

let myBook = {
	title: 'The Story of Tau',
	author: 'Will Alexander',
	numberOfPages: 250,
	isAvailable: true
}; //Ce qui est entre l'accolade est un objet de la variable//
//ce qui est en blanc dans l'accolade sont des 'clés' et le reste des valeurs//
//objet permet de regrouper attributs d'une variable à un seul endroit//

let bookTitle = myBook.title; //The Story of Tau//
let bookPages = myBook.numberOfPages;//250//


//Les Classes//

//La notation des Objets noté comme ci-dessus conviennent bien à des Objets 
//simples et uniques mais lorsque c'est plus complexe et qu'on en a besoin
//plusieurs fois on utilise des Classes//

class Book{
	constructor (newTitle, newAuthor, newPages){
		this.title = newTitle;
		this.author = newAuthor;
		this.pages = newPages;
	}
}

/*Un constructor est une fonction*/

let myBook = new Book ("L'Histoire de Tao", "Will Alexander", 250);

/* En fait les mots clés "this" et "new" sont liés. Le premier "this" correspondra
toujours au premier éléments entre parenthèse du "new". De ce que je comprends
on pourrait donc mettre this.author au lieu de this.title et ça nous mettrait
quand même l'équivalent de title: "Histoire su Tao" car y'aurait le = title.*/

let guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"];

let firstGuest = guests [0];


let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];

let howManyGuests = guests.length;

guests.push("Tao Perkington"); /*Rajoute cette chaîne de caractère à la fin
du tableau*/

guests.unshift("Tao Perkington");//Rajoute au début du tableau//

guests.pop()//supprime dernier élément du tableau//



let userLoggedIn = true;

if (userLoggedIn) {
	console.log("Utilisateur connecté");
} else{
	console.log("Alerte intrus");
}

/*

Ci-dessous voici les différents éléments de comparaisons
- Le < correspond à "inférieur à"
- Le <= correspond à "inférieur ou égal à"
- Le == correspond à "égal en valeur à"
- Le === correspond  à "égal en valeur et en type à"
- Le > correspond à "supérieur à"
-Le >= correspond à "supérieur ou égal à"
-Le != correspond à "différent en valeur de"
-Le !== correspond à "différent en valeur et en type de"

*/

const numberOfSeats = 30;
let numberOfGuests = 25;

if (numberOfGuests < numberOfSeats) {
	//autorise plus d'invités//
} else {
	//ne pas autoriser plus d'invités//
}

if (numberOfGuests = numberOfSeats) {
	//tous les sièges sont occupés//
} else if (numberOfGuest < numberOfSeats) {
	//autoriser plus d'invités
} else {
	// ne pas autoriser nouveaux invités
}

/* 

On rajoute à ces éléments de comparaison des opérateurs logiques

-Le && correspond à un "ET logique" vérifiant si 2 conditions sont également 
vraies
-Le || correspond à un "OU logique" vérifiant si au moins une des 2 conditions
est vraie
- Le ! correspond à un "NON logique" vérifiant si une condition n'est pas vraie

*/

let userLoggedIn = true;
let userHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && userHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; //false

userLoggedIn || userHasPremiumAccount; //true
userLoggedIn || userHasMegaPremiumAccount; //true

!userLoggedIn; //false
!userHasMegaPremiumAccount; //true
// pour ces deux derniers le true et false sont inversé car on répond à la question
//"est-ce que c'est faux ?" plutôt qu'à celle "est-ce que c'est vraie ?"

if (minutesWatched === 0) {
      this.watchedText = 'Not yet watched';
      this.continueWatching = false;
    } else if (minutesWatched > 0 && minutesWatched < duration) {
      this.watchedText = 'Watching';
      this.continueWatching = true;
    } else if (minutesWatched === duration) {
      this.watchedText = 'Watched';
      this.continueWatching = false;
    }


/* Une variable déclarée dans un bloc de code n'est effective qu'à l'intérieur
de ce bloc et non en dehors de lui. */

// La solution peut dont être de la déclarer en dehors de ce bloc de code

let userLoggedIn = true;
let welcomeMessage = "";

if (userLoggedIn) {
	welcomeMessage = "Welcome Back";
} else {
	welcomeMessage = "Welcome new user";
}

console.log(welcomeMessage);


//l'instruction Switch

let firstUser = {
	name: "Will Alexander",
	age: 33,
	accountLevel: "normal"
};

let secondUser = {
	name:  "Sarah Kate",
	age: 21,
	accountLevel: "premium"
};

let thirdUser = {
	name: "Audrey Simon",
	age: 27,
	accountLevel: "mega-premium"
}

switch (firstUser.accountLevel) {
	case 'normal':
		console.log("You Have a normal account");
		break;
	case "premium" :
		console.log(You have a premium account)
		break;
	case "mega-premium" :
		console.log(You have a mega premium account)
		break;
	default:
		console.log("Unknom account type");
}


const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
	console.log("passager embarqué");
}

console.log("Tous les passagers sont embarqués");



const passagers = [
	"Will Alexander",
	"Sarah Kate",
	"Audrey Simon",
	"Tao Perkington"
]

for (let i in passagers){
	console.log("embarquement du passager " + passengers[i]); 
}
//l'indice i est au début égal à 0
//i[0] correspond à "Will Alexander"

const passagers = [
	"Will Alexander",
	"Sarah Kate",
	"Audrey Simon",
	"Tao Perkington"
]

for (let passenger of passengers)
	console.log("Embarquement du passager " + passenger )

//le code ci-dessus à la même effet que celui au-dessus de lui


const passengers = [
	{
		name: "Will Alexander",
		ticketNumber: 209542
	},
	{
		name: "Sarah Kate",
		ticketNumber: 169336
	},
	{
		name: "Audrey Simon",
		ticketNumber: 779042
	},
	{
		name: "Tao Perkington",
		ticketNumber: 703911
	},
]

for (let passenger of passengers) {
	console.log("Embarquement du passager " + pasenger.name + " avec le ticket numéro" + passenger.ticketNumber);

}


let seatsLeft = 10;//10 sièges
let passengersStillToBoard = 8;//8 passagers à faire embarquer

let passengersBoarded = 0;//0 passager d'encore embarqué

while (seatsLeft > 0 && passengersStillToBoard > 0) {
	passengersBoarded++; // un passager embarque
	passengersStillToBoard--; // un passagé en moins à faire embarquer

	seatsLeft--; //y'a un siège en moins de dispo
}

console.log(passengersBoarded); //renvoie 8, car il y a 8 passagers pour 10 sièges

//On utilise for pour un nombre d'itération fixe et while pour un nombre variable
//Chaque "passage dans la boucle" étant une itération



//Les fonctions

const add = (firstNumber, secondNumber) => { 
	return firstNumber + secondNumber;
}

const result = add(4,3);

console.log(result);

//first et secondNumber est la variable dont cette fonction a besoin pour fonctionner
//On définit ses paramètres
//on appelle la fonction avec "add()".
//Entre parenthèse on envoie des valeurs à la fonction, pour ses paramètres
//Ces valeurs sont ce que l'on appelle des "arguments d'appel"
//La fonction renvoie un résultat: c'est la "valeur de retour"
//le code exécute l'appel de la fonction avant la fonction.


const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0;
  }
  
  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }
  
  return sum / ratings.length;

}


//les méthodes d'instances 

class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}
	showBalance() {
		console.log("Solde: " + this.balance + " EUR");
	}
}

const newAccount = new BankAccount("Will Alexander", 500);

newAccount.showBalance();





class BankAccount {
	constructor(owner, balance) {
		this.owner = owner;
		this.balance = balance;
	}

	showBalance() {
		console.log("Solde: " + this.balance + " EUR");
	}

	deposit(amount) {
		console.log("Dépôt de " + amount + " EUR");
		this.balance += amount;
		this.showBalance;
	}

	withdraw(amount) {
		if (amount > this.balance) {
			console.log("Retrait refusé");
		} else {
			console.log("Retrait de " + amount + " EUR");
			this.balance -= amount;
			this.showBalance();
		}
	}
}




class Show {
  constructor(title, numberOfSeasons) {
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
  }
  
  addRating(rating) {
    this.ratings.push(rating);
    let sum = 0;
    for (let rating of this.ratings) {
      sum += rating;
    }
    
    this.averageRating = sum / this.ratings.length;
  }
}
