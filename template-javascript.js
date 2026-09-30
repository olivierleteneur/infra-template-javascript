// Module ES : le mode strict est implicite, 'use strict' est inutile.

/**
 * @description Exécute un traitement standardisé avec validation de l'entrée.
 * @param {string} payload - Donnée d'entrée requise, chaîne non vide.
 * @returns {string} Résultat du traitement.
 * @throws {TypeError} Si payload n'est pas une chaîne non vide.
 */
const processPayload = (payload) => {
    if (typeof payload !== 'string' || payload.trim() === '') {
        throw new TypeError('Le paramètre payload doit être une chaîne non vide.');
    }

    return `Traitement : ${payload}`;
};

export { processPayload };
