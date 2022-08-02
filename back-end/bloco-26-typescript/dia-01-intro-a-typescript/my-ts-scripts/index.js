"use strict";
// ./index.ts
var _a, _b;
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var Months_1 = require("./Months");
var Seasons_1 = require("./Seasons");
var monthsNames = Object.values(Months_1["default"]);
var choiceMonth = readline_sync_1["default"].keyInSelect(monthsNames, "Escolha um mês do ano");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
var seasonsSouth = (_a = {},
    _a[Seasons_1["default"].OUTONO] = [Months_1["default"].MARCO, Months_1["default"].ABRIL, Months_1["default"].MAIO, Months_1["default"].JUNHO],
    _a[Seasons_1["default"].INVERNO] = [Months_1["default"].JUNHO, Months_1["default"].JULHO, Months_1["default"].AGOSTO, Months_1["default"].SETEMBRO],
    _a[Seasons_1["default"].PRIMAVERA] = [Months_1["default"].SETEMBRO, Months_1["default"].OUTUBRO, Months_1["default"].NOVEMBRO, Months_1["default"].DEZEMBRO],
    _a[Seasons_1["default"].VERAO] = [Months_1["default"].DEZEMBRO, Months_1["default"].JANEIRO, Months_1["default"].FEVEREIRO, Months_1["default"].MARCO],
    _a);
// Criamos um objeto onde suas chaves são as estações
// e seus valores são os meses. Note abaixo um segundo
// objeto onde, sendo do hemisfério oposto, as estações
// são opostas também
var seasonsNorth = (_b = {},
    _b[Seasons_1["default"].PRIMAVERA] = seasonsSouth[Seasons_1["default"].OUTONO],
    _b[Seasons_1["default"].VERAO] = seasonsSouth[Seasons_1["default"].INVERNO],
    _b[Seasons_1["default"].OUTONO] = seasonsSouth[Seasons_1["default"].PRIMAVERA],
    _b[Seasons_1["default"].INVERNO] = seasonsSouth[Seasons_1["default"].VERAO],
    _b);
var hemispheres = {
    "Norte": seasonsNorth,
    "Sul": seasonsSouth
};
var choiceHemisphere = readline_sync_1["default"].keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
// O método .keyInSelect mostra uma interface
// de escolha para a pessoa usuária
var month = Object.values(Months_1["default"])[choiceMonth];
var hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log("M\u00EAs: \n".concat(month));
console.log("Hemisf\u00E9rio: \n".concat(hemisphere));
console.log("Esta\u00E7\u00F5es:");
var chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map(function (entry) {
    var seasons = entry[0];
    var months = entry[1];
    // São os meses de cada estação. Caso esteja
    // incluído em mais de uma estação, o console
    // abaixo irá adicionar
    if (months.includes(month))
        console.log(seasons);
});
