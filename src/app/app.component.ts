import { Component } from '@angular/core';
import { GalaxieService } from './services/galaxie/galaxie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  galaxies:any = [];

  constructor(
    private Galaxie: GalaxieService
  ) {}

  ngOnInit(){
    this.galaxies = this.Galaxie.galaxies;
  }
}
