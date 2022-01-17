import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Galaxies } from 'src/app/models/galaxies.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GalaxieService {
  private dbPath = "/galaxies";
  galaxiesRef: AngularFirestoreCollection<Galaxies>;
  galaxies?: any;
  galaxieSubject = new Subject<any[]>();

  constructor(
    private db : AngularFirestore
  ) { 
    this.galaxiesRef = db.collection(this.dbPath);
  }

  getAllGalaxie() : any{
    return this.galaxiesRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
            return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        })
      })
    );
  }

  getGalaxieById(id : number) {
    let tmp;
    for (const galaxie of this.galaxies) {
      if (galaxie.id == id) {
        tmp = galaxie;
      }
    }
    return tmp;
  }

  saveNewGalaxie( galaxie : Galaxies): any {
    return new Observable(obs => {
      this.galaxiesRef.add({...galaxie}).then(() => {
        obs.next();
      })
    })
  }

  get(id : any) : any {
    return new Observable(obs => {
      this.galaxiesRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()})
      });
    });
  }

  update(galaxie : Galaxies) {
    return new Observable(obs => {
      this.galaxiesRef.doc(galaxie.id).update(galaxie);
      obs.next();
    });
  }

  delete(id:any){
    this.db.doc(`galaxies/${id}`).delete();
  }

}
