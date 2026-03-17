import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('fabiangu');
  protected readonly reservado = signal(false);

  protected marcarReservado(event: Event): void {
    event.preventDefault();
    this.reservado.set(true);
  }
}
