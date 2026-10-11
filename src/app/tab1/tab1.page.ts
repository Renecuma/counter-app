import { Component } from '@angular/core';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { CounterComponent } from '../counter/counter.component';
import { SavedCounter } from '../models/saved-counter.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CounterComponent,
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonNote,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page {
  savedCounters: SavedCounter[] = [];
  private nextId = 1;

  onSaved(counter: { name: string; value: number }): void {
    this.savedCounters.push({
      id: this.nextId++,
      name: counter.name,
      value: counter.value,
    });
  }

  removeCounter(counter: SavedCounter): void {
    this.savedCounters = this.savedCounters.filter((c) => c.id !== counter.id);
  }
}
