import { Component, Input, OnInit } from '@angular/core';
import { Galaxies } from '../models/galaxies.model';
import { GalaxieService } from '../services/galaxie/galaxie.service';

@Component({
  selector: 'app-galaxie',
  templateUrl: './galaxie.component.html',
  styleUrls: ['./galaxie.component.scss']
})
export class GalaxieComponent implements OnInit {

  title = "Universe";
  @Input() galaxieName?: string;
  @Input() galaxieActive?: boolean;
  @Input() galaxieActiveString?: string;
  @Input() morphologie?: string;
  @Input() morphologie_particuliere?: string;
  @Input() taille?: string;
  @Input() description?: string;
  @Input() picture?: string;

  @Input() index?: number;
  @Input() id?: number;
  
  constructor(
    private Galaxie: GalaxieService
  ) { }

  ngOnInit(): void {
  }

  getActive() {
    return this.galaxieActive;
  }

  onWatch(){
    console.log('Vous avez cliqué sur la '+this.galaxieName );
  }

  changeColor(){
    return this.galaxieActive ? 'green' : 'red';
  }

  supp() : void{
    this.Galaxie.delete(this.id);
   }


}