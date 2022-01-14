import { Component, Input, OnInit } from '@angular/core';
import { GalaxieService } from '../services/galaxie/galaxie.service';

@Component({
  selector: 'app-galaxie-list',
  templateUrl: './galaxie-list.component.html',
  styleUrls: ['./galaxie-list.component.scss']
})
export class GalaxieListComponent implements OnInit {
  galaxies!:any;

  constructor(
    private Galaxie: GalaxieService
  ) { }

  ngOnInit() {
    this.Galaxie.getAllGalaxie().subscribe((data: any) => {
      this.galaxies = data;
    });
  }


}
