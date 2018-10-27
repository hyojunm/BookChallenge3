var name;
var age;
var gender;
var budget;

function enterTour() {
	name = $("#nickname").val();
	age = $("#age").val();
	gender = $("#gender").val();
	budget = 100;

	alert("Welcome, " + name);
	$("#form").hide();
	$("#next").show();

	$("#profile").html(name);
	$("#budget").html("Budget: $" + budget);

	if (gender.toLowerCase() == "m") {
		$("#avatar").html("<img src='./img/boy.png'>");
	} else if (gender.toLowerCase() == "f") {
		$("#avatar").html("<img src='./img/girl.png'>");
	} else {
		$("#avatar").html("Gender NULL");
	}
}

$("#enterTour").click(function() {
	enterTour();
});

function eatLaCocina() {
	budget = budget - 20;
	alert("You ate: Cuban Sandwich & Chicken Soup\nTotal: $20\nThank you for eating at La Cocina");
	$("#budget").html("Budget: $" + budget);
	$("#lacocina").hide();
	$("#next").show();
}

$("#eatLaCocina").click(function() {
	eatLaCocina();
});

function eatTwoScoops() {
	budget = budget - 5;
	alert("You ate: Chocolate & Vanilla Ice Cream\nTotal: $5\nThank you for choosing Two Scoops");
	$("#budget").html("Budget: $" + budget);
	$("#twoscoops").hide();
	$("#next").show();
}

$("#eatTwoScoops").click(function() {
	eatTwoScoops();
});

function gotoLaCocina() {
	$("#next").hide();
	$("#lacocina").show();
}

$("#LaCocina").click(function() {
	gotoLaCocina();
});

function gotoTwoScoops() {
	$("#next").hide();
	$("#twoscoops").show();
}

$("#TwoScoops").click(function() {
	gotoTwoScoops();
});

function gotoPipoOffice() {
	$("#next").hide();
	$("#pipooffice").show();
}

$("#PipoOffice").click(function() {
	gotoPipoOffice();
});

function gotoCityCouncil() {
	$("#next").hide();
	$("#citycouncil").show();
}

$("#CityCouncil").click(function() {
	gotoCityCouncil();
});

var workedatlacocina = false;

function workLaCocina() {
	if (workedatlacocina == false) {
		alert("You have been hired as a waiter/waitress at La Cocina. Answer this question correctly to earn $30.");
		alert("Orders:\nTable #1: Cuban Sandwich, Mango Juice (2)\nTable #2: Chicken Soup (4), Cuban Sandwich (3), Mango Juice (3), Water (4)");
		var q = prompt("How many orders of Mango Juices were there?");

		if (q == 5) {
			workedatlacocina = true;
			budget = budget + 30;
			alert("You earned $30!");
			$("#budget").html("Budget: $" + budget);
			$("#lacocina").hide();
			$("#next").show();
		} else {
			alert("Sorry, answer was incorrect. Please try again later.");
		}
	} else {
		alert("You have already worked at La Cocina. Please look for another place to work.");
	}
}

$("#workLaCocina").click(workLaCocina);

var workedattwoscoops = false;

function workTwoScoops() {
	if (workedatlacocina == false) {
		alert("You have been hired at Two Scoops. Answer this question correctly to earn $15.");
		var q = prompt("There is 14 pre-orders of ice cream today, and 1 bucket makes 4 ice cream. How many buckets do you have to buy?");

		if (q == 4) {
			workedattwoscoops = true;
			budget = budget + 15;
			alert("You earned $15!");
			$("#budget").html("Budget: $" + budget);
			$("#twoscoops").hide();
			$("#next").show();
		} else {
			alert("Sorry, answer was incorrect. Please try again later.");
		}
	} else {
		alert("You have already worked at Two Scoops. Please look for another place to work.");
	}
}

$("#workTwoScoops").click(workTwoScoops);

function partyLaCocina() {
	var q = prompt("What kind of party is this?\n1 - Birthday Party\n2 - Anniversary\n3 - Other");

	if (q == 1) {
		budget = budget - 50;
		alert("Happy Birthday!");
		$("#budget").html("Budget: $" + budget);
		$("#lacocina").hide();
		$("#next").show();
	} else if (q == 2) {
		budget = budget - 50;
		alert("Happy Anniversary!");
		$("#budget").html("Budget: $" + budget);
		$("#lacocina").hide();
		$("#next").show();
	} else {
		budget = budget - 50;
		alert("Enjoy your Party!");
		$("#budget").html("Budget: $" + budget);
		$("#lacocina").hide();
		$("#next").show();
	}
}

$("#partyLaCocina").click(partyLaCocina);

function goBack1() {
	$("#next").show();
	$("#lacocina").hide();
}

$("#goBack1").click(function() {
	goBack1();
});

function goBack2() {
	$("#next").show();
	$("#twoscoops").hide();
}

$("#goBack2").click(function() {
	goBack2();
});

function goBack3() {
	$("#next").show();
	$("#pipooffice").hide();
}

$("#goBack3").click(function() {
	goBack3();
});

function goBack4() {
	$("#next").show();
	$("#citycouncil").hide();
}

$("#goBack4").click(function() {
	goBack4();
});

function endTour() {
	if (budget >= 0) {
		$("#next").hide();
		$("#lacocina").hide();
		$("#twoscoops").hide();
		$("#pipooffice").hide();
		$("#form").show();
	} else {
		alert("You have a budget of $" + budget + ". Please pay off your loan before you quit the tour.")
	}
}

$("#endTour").click(function() {
	endTour();
});

function vote(vote) {
	if (vote == true) {
		alert("La Cocina wins the Vote!");
		$("#results").html("<hr>With La Cocina, your favorite restaurant, winning the vote, you can now go and eat without any waiting because of more dining space. The parties you host here is extra fun with more space! Since the restaurant can earn more money and people can eat more quickly, it's a win-win!")
	} else if (vote == false) {
		alert("Pipo Place wins the Vote!");
		$("#results").html("<hr>Pipo Place starts the construction as soon as the results are out. The loud machine noises disturbs your nice evening nap, and the huge building covers up the sunset you used the see every night. You try to move in the apartment, but after looking at the cost, you decide not to. Now Pipo Place is left alone with nobody living in it.");
	}
}

$("#voteLC").click(function() {
	vote(true);
});

$("#votePP").click(function() {
	vote(false);
});