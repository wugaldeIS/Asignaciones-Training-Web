/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: script.js
 */

window.addEventListener('load',getResult);

function getResult(){
	var pokemonRapidash = {
		name : "Rapidash",
		tipo : "fire",
		attack : "20",
		defense : "10"
	};

	var pokemonGyarados = {
		name : "Gyarados",
		tipo : "water",
		attack : "10",
		defense : "10"
	};

	var damageResult = damage(pokemonRapidash, pokemonGyarados);
}

/** This function computes the damage caused by the attack*/
function damage(pAttackerPokemon, pDefensivePokemon) {
	var effectiveness = getEffectiveness(pAttackerPokemon, pDefensivePokemon);
	var damageResult = 50 * (pAttackerPokemon.attack / pDefensivePokemon.defense) * effectiveness;

	return roundDamageResult(damageResult);
}

/** This function computes the effectiveness of the attack */
function getEffectiveness(pAttackerPokemon, pDefensivePokemon){
	var superEffective = 2;
	var neutralEffect = 1;
	var nonEffective = 0.5;
	var attackerType = pAttackerPokemon.tipo;
	var defensiveType = pDefensivePokemon.tipo;

	if (attackerType === "fire"){
		if (defensiveType === "fire") {
			return nonEffective;
		} else if (defensiveType === "water"){
			return nonEffective;
		} else if (defensiveType === "electric"){
			return neutralEffect;
		} else if (defensiveType === "grass"){
			return superEffective;
		}

	} else if (attackerType === "water"){
		if (defensiveType === "water") {
			return nonEffective;
		} else if (defensiveType === "fire"){
			return superEffective;
		} else if (defensiveType === "electric"){
			return nonEffective;
		} else if (defensiveType === "grass"){
			return nonEffective;
		}

	} else if (attackerType === "grass"){
		if (defensiveType === "grass") {
			return nonEffective;
		} else if (defensiveType === "fire"){
			return nonEffective;
		} else if (defensiveType === "water"){
			return superEffective;
		} else if (defensiveType === "electric"){
			return neutralEffect;
		}

	} else if (attackerType === "electric"){
		if (defensiveType === "electric") {
			return nonEffective;
		} else if (defensiveType === "fire"){
			return neutralEffect;
		} else if (defensiveType === "water"){
			return superEffective;
		} else if (defensiveType === "grass"){
			return neutralEffect;
		}
	}
}

function roundDamageResult(pDamage){
	return Math.round(pDamage);
}
