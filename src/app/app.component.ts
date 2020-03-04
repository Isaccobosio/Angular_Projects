import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = this.constructor.name;

  getTitle(): string { /* creazione di un metodo che ritorna il titolo come stringa */
    return this.title;
  }

  sum(a: number, b: number): number {
    return a + b;
  }

}
