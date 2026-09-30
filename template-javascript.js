'use strict';

/**
 * @description Exécute un traitement standardisé avec gestion d'erreur.
 * @param {string} payload - Donnée d'entrée requise.
 * @returns {boolean} État de l'exécution.
 */
const processPayload = (payload) => {
    if (!payload) throw new Error("Le paramètre payload est requis.");
    
    try {
        console.log(`Traitement : ${payload}`);
        return true;
    } catch (error) {
        console.error("Échec du traitement :", error);
        return false;
    }
};

export { processPayload };
