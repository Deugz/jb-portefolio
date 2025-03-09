window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script5 = function()
{
  var url = "https://script.google.com/macros/s/AKfycbz3Un2gvYiNtSPcthtMjYzl8VYYSd1NFC7g_wY7yrofj4uIzLZUENmZaFZvQ-uXlmiSIA/exec"; // Remplacez par votre URL Web App

fetch(url, { method: "POST" })
  .then(response => response.text())
  .then(data => {
    console.log("ID ajouté : " + data);
    var player = GetPlayer();
    player.SetVar("dernier_id", Number(data)); // Stocke l'ID dans Storyline
  })
  .catch(error => console.error("Erreur : " + error));
  
  
  
  
  
}

window.Script6 = function()
{
  // Récupérer la date du jour

var player = GetPlayer();
var today = new Date();

// Formater la date (exemple : "07/02/2025")
var jour = today.getDate().toString().padStart(2, '0'); // Ajoute un 0 si nécessaire
var mois = (today.getMonth() + 1).toString().padStart(2, '0'); // Janvier = 0, donc +1
var annee = today.getFullYear();

// Construire la date au format français (JJ/MM/AAAA)
var dateFormattee = jour + "/" + mois + "/" + annee;

// Stocker la date dans la variable Storyline
player.SetVar("DateDuJour", dateFormattee);
}

window.Script7 = function()
{
  // Favicon

var link = document.createElement("link");
link.rel = "icon";
link.type = "image/svg";
link.href = "story_content/external_files/perso-parle.svg"; // Mets le bon chemin ici
document.head.appendChild(link);
}

window.Script8 = function()
{
  var url = "https://script.google.com/macros/s/AKfycbzP6DXbQie7Nrh74wf0yyaITBffZFGVaS5bmNGZvuwmDa3E1PsQyzmEN6CZ2WGjhU23lg/exec"; // Remplacez par l'URL de votre Web App

fetch(url)
  .then(response => response.text())
  .then(data => {
    console.log("Dernier ID récupéré : " + data);
    var player = GetPlayer();
    player.SetVar("dernier_id", Number(data)); // Stocke l'ID dans Storyline
  })
  .catch(error => console.error("Erreur : " + error));
}

window.Script9 = function()
{
  // Récupérer le lecteur de Storyline
var player = GetPlayer();

// Définir les variables à exporter
var variables = [
"1C1Y", "1C2Y", "1C3Y", "1C4Y", "1C5Y", "1CAY", "1CBY", 
"2C1Y", "2C2Y", "2C3Y", "2C4Y", "2C5Y", "2CAY", "2CBY", "2CCY", 
"3C1Y", "3C2Y", "3C3Y", "3C4Y", "3C5Y", "3C6Y", "3C7Y", "3C8Y", "3C9Y", "3CAY", "3CBY", "3CCY", "3CDY", 
"4C1Y", "4C2Y", "4C3Y", "4C4Y", "4C5Y", "4C6Y", "4C7Y", "4CAY", "4CBY", "4CCY", 
"5C1Y", "5C2Y", "5C3Y", "5C4Y", "5C5Y", "5C6Y", "5CAY", "5CBY", "5CCY", 
"6C1Y", "6C2Y", "6C3Y", "6C4Y", "6C5Y", "6C6Y", "6CAY", "6CBY", 
"7C1Y", "7C2Y", "7C3Y", "7CAY", "7CBY", 
"8C1Y", "8C2Y", "8C3Y", "8C4Y", "8C5Y", "8C6Y", "8C7Y", "8C8Y", "8C9Y", "8C10Y", "8CAY", "8CBY", 
"9C1Y", "9C2Y", "9C3Y", "9C4Y", "9C5Y", "9CAY", "9CBY", "9CCY", 
"10C1Y", "10C2Y", "10C3Y", "10C4Y", "10C5Y", "10C6Y", "10C7Y", "10CAY", "10CBY", "10CCY", 
"11C1Y", "11C2Y", "11C3Y", "11C4Y", "11C5Y", "11C6Y", "11C7Y", "11CAY", "11CBY", "11CCY", 
"12C1Y", "12C2Y", "12C3Y", "12C4Y", "12C5Y", "12C6Y", "12C7Y", "12C8Y", "12CAY", "12CBY", "12CCY", 
"13C1Y", "13C2Y", "13C3Y", "13CAY", "13C5Y", 
"14C1Y", "14C2Y", "14C3Y", "14C4Y", "14C5Y", "14C6Y", "14C7Y", "14CAY", "14CBY", "14CCY", 
"15C1Y", "15C2Y", "15C3Y", "15C4Y", "15C5Y", "15C6Y", "15C7Y", "15C8Y", "15C9Y", "15CAY", "15CBY", "15CCY", 
"16C1Y", "16C2Y", "16C3Y", "16C4Y", "16C5Y", "16C6Y", "16C7Y", "16C8Y", "16C9Y", "16C10Y", "16CAY", "16CBY", 
"17C1Y", "17C2Y", "17C3Y", "17C4Y", "17C5Y", "17C6Y", "17C7Y", "17C8Y", "17C9Y", "17C10Y", "17C11Y", "17C12Y", "17C13Y", "17C14Y", "17C15Y", "17C16Y", "17C17Y", "17C18Y", "17C19Y"
    // Ajoutez toutes vos variables ici
];

// Créer une chaîne CSV avec les en-têtes et les valeurs
var csvContent = "data:text/csv;charset=utf-8,Nom de la variable, Valeur\n";

variables.forEach(function(variable) {
    var value = player.GetVar(variable); // Récupère la valeur de la variable
    csvContent += variable + "," + value + "\n"; // Ajouter la variable et sa valeur dans le CSV
});

// Encoder la chaîne en URI
var encodedUri = encodeURI(csvContent);

// Créer un lien de téléchargement
var link = document.createElement("a");
link.setAttribute("href", encodedUri);
link.setAttribute("download", "Exploration-ODD.csv"); // Nom du fichier
document.body.appendChild(link);

// Télécharger automatiquement le fichier
link.click();

// Supprimer le lien après utilisation
document.body.removeChild(link);

}

};
