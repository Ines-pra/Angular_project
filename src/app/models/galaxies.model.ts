export class Galaxies {
    id?: string;
    nom: string;
    active: boolean; //En astronomie, une galaxie active est une galaxie abritant un noyau actif. Ce noyau est une région compacte localisée au centre de la galaxie et dont la luminosité est beaucoup plus intense que la normale dans au moins quelque domaine du spectre électromagnétique.
    morphologie: string; //elliptiques/spirales/irrégulières
    morphologie_particuliere: string; //annulaires/lenticulaire/irréguliaires
    taille: string; //typique/naine/géantes
    description: string;
    picture: string;

constructor(){
    this.nom = '';
    this.active = false;
    this.morphologie = '';
    this.morphologie_particuliere = '';
    this.taille = '';
    this.description = '';
    this.picture = '';
}
}