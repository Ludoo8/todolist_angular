import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  standalone: true,
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {
  taches: { todo: string; accomplie: boolean }[] = [];

  ngOnInit() {
    const tachesSauvegarde = localStorage.getItem('taches');
    if (tachesSauvegarde) {
      this.taches = JSON.parse(tachesSauvegarde);
    }
  }

  get nombreTachesEnCours(): number {
    return this.taches.filter(tache => !tache.accomplie).length;
  }

  get nombreTachesAccomplies(): number {
    return this.taches.filter(tache => tache.accomplie).length;
  }
}
