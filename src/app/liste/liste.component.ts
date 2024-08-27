import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecapComponent } from "../recap/recap.component";

@Component({
  selector: 'app-liste',
  standalone: true,
  imports: [FormsModule, CommonModule, RecapComponent],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent {

  nouvelleTache: string = "";

  // tab taches
  taches: {
    accomplie: boolean; todo: string 
}[] = [];

  // localstorage
  ngOnInit() {
    const tachesSauvegarde = localStorage.getItem("taches");

    if (tachesSauvegarde) {
      this.taches = JSON.parse(tachesSauvegarde);
    }
  }

  // ajoute une tache en haut
  onClicAjouterTache() {
    if (this.nouvelleTache.trim()) {
      this.taches.unshift({ todo: this.nouvelleTache, accomplie: false });
      this.nouvelleTache = ''; // vide la saisie
      this.sauvegarde();
    }
  }
  

  // save
  sauvegarde() {
    localStorage.setItem("taches", JSON.stringify(this.taches));
    console.log("Sauvegarde effectuée !");
  }

  // bouge la tâche
  onClicChangementTache(indexTache: number, moins: boolean) {
    const nouvellePosition = indexTache + (moins ? 1 : -1);
    if (nouvellePosition >= 0 && nouvellePosition < this.taches.length) {
      const tache = this.taches.splice(indexTache, 1)[0];
      this.taches.splice(nouvellePosition, 0, tache);
      this.sauvegarde();
    }
  }

  // suppr
  onClicSupprime(indexTache: number) {
    this.taches.splice(indexTache, 1);
    this.sauvegarde();
  }

  onClicAccomplie(indexTache: number) {
    // change l'état du check V
    this.taches[indexTache].accomplie = !this.taches[indexTache].accomplie;
  
    // la bouger en bas quand validée
    if (this.taches[indexTache].accomplie) {
      const tacheAccomplie = this.taches.splice(indexTache, 1)[0];
      this.taches.push(tacheAccomplie);
    }
  
    // save
    this.sauvegarde();
  }
  
  
}
