import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonInput,
} from '@ionic/angular';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonInput,
  ],
})
export class CounterComponent {
  readonly saved = output<{ name: string; value: number }>();

  name = '';
  count = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset(): void {
    this.count = 0;
  }

  save(): void {
    if (!this.name.trim()) {
      return;
    }

    this.saved.emit({ name: this.name.trim(), value: this.count });

    this.name = '';
    this.count = 0;
  }
}
