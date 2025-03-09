window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script3 = function()
{
  // Récupérer le lecteur de Storyline
var player = GetPlayer();

// Définir les variables à exporter
var variables = [
"1C1Y", "1C2Y", "1C3Y", "1C4Y", "1C5Y", "1C6Y", "1C7Y", 
"2C1Y", "2C2Y", "2C3Y", "2C4Y", "2C5Y", "2C6Y", "2C7Y", "2C8Y", 
"3C1Y", "3C2Y", "3C3Y", "3C4Y", "3C5Y", "3C6Y", "3C7Y", "3C8Y", "3C9Y", "3C10Y", "3C11Y", "3C12Y", "3C13Y", 
"4C1Y", "4C2Y", "4C3Y", "4C4Y", "4C5Y", "4C6Y", "4C7Y", "4C8Y", "4C9Y", "4C10Y", 
"5C1Y", "5C2Y", "5C3Y", "5C4Y", "5C5Y", "5C6Y", "5C7Y", "5C8Y", "5C9Y", 
"6C1Y", "6C2Y", "6C3Y", "6C4Y", "6C5Y", "6C6Y", "6C7Y", "6C8Y", 
"7C1Y", "7C2Y", "7C3Y", "7C4Y", "7C5Y", 
"8C1Y", "8C2Y", "8C3Y", "8C4Y", "8C5Y", "8C6Y", "8C7Y", "8C8Y", "8C9Y", "8C10Y", "8C11Y", "8C12Y", 
"9C1Y", "9C2Y", "9C3Y", "9C4Y", "9C5Y", "9C6Y", "9C7Y", "9C8Y", 
"10C1Y", "10C2Y", "10C3Y", "10C4Y", "10C5Y", "10C6Y", "10C7Y", "10C8Y", "10C9Y", "10C10Y", 
"11C1Y", "11C2Y", "11C3Y", "11C4Y", "11C5Y", "11C6Y", "11C7Y", "11C8Y", "11C9Y", "11C10Y", 
"12C1Y", "12C2Y", "12C3Y", "12C4Y", "12C5Y", "12C6Y", "12C7Y", "12C8Y", "12C9Y", "12C10Y", "12C11Y", 
"13C1Y", "13C2Y", "13C3Y", "13C4Y", "13C5Y", 
"14C1Y", "14C2Y", "14C3Y", "14C4Y", "14C5Y", "14C6Y", "14C7Y", "14C8Y", "14C9Y", "14C10Y", 
"15C1Y", "15C2Y", "15C3Y", "15C4Y", "15C5Y", "15C6Y", "15C7Y", "15C8Y", "15C9Y", "15C10Y", "15C11Y", "15C12Y", 
"16C1Y", "16C2Y", "16C3Y", "16C4Y", "16C5Y", "16C6Y", "16C7Y", "16C8Y", "16C9Y", "16C10Y", "16C11Y", "16C12Y", 
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
link.setAttribute("download", "VariablesStoryline.csv"); // Nom du fichier
document.body.appendChild(link);

// Télécharger automatiquement le fichier
link.click();

// Supprimer le lien après utilisation
document.body.removeChild(link);

}

};
