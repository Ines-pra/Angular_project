import { Component, OnInit } from '@angular/core';
import { Galaxies } from '../models/galaxies.model';
import { GalaxieService } from '../services/galaxie/galaxie.service';

@Component({
  selector: 'app-galaxie-new',
  templateUrl: './galaxie-new.component.html',
  styleUrls: ['./galaxie-new.component.scss']
})
export class GalaxieNewComponent implements OnInit {

  public galaxie!: Galaxies;

  constructor(
    private Galaxie : GalaxieService
  ) { }

  ngOnInit(): void {
    this.galaxie = new Galaxies();
  }

  add() {
    this.Galaxie.saveNewGalaxie(this.galaxie).subscribe(() => {
      this.galaxie = new Galaxies;
    })
  }
}
