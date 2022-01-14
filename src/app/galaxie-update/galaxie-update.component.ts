import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalaxieService } from '../services/galaxie/galaxie.service';

@Component({
  selector: 'app-galaxie-update',
  templateUrl: './galaxie-update.component.html',
  styleUrls: ['./galaxie-update.component.scss']
})
export class GalaxieUpdateComponent implements OnInit {
  
  change:boolean = false;
  galaxie:any = null;
  
  constructor(
    private Galaxie : GalaxieService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.Galaxie.get(id).subscribe((value: any) => {
      console.log(value);
      this.galaxie = value;
    })
  }

  modif() {
    this.Galaxie.update(this.galaxie).subscribe(() => {
      this.change = true ;
    })
  }

}
