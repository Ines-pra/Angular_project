import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalaxieComponent } from './galaxie/galaxie.component';
import { FormsModule } from '@angular/forms';

import { GalaxieService } from './services/galaxie/galaxie.service';
import { RouterModule, Routes } from '@angular/router';
import { GalaxieListComponent } from './galaxie-list/galaxie-list.component';
import { GalaxieUpdateComponent } from './galaxie-update/galaxie-update.component';
import { AccueilComponent } from './accueil/accueil.component';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { GalaxieNewComponent } from './galaxie-new/galaxie-new.component';

const appRoutes: Routes = [
  {
    path : "",
    component : AccueilComponent
  },
  {
    path : "galaxie-list",
    component : GalaxieListComponent
  },
  {
    path : "modif/:id",
    component : GalaxieUpdateComponent
  },
  {
    path : "new",
    component : GalaxieNewComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GalaxieComponent,
    GalaxieListComponent,
    GalaxieUpdateComponent,
    AccueilComponent,
    GalaxieNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    GalaxieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
