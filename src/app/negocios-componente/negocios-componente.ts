import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-negocios-componente',
  imports: [],
  templateUrl: './negocios-componente.html',
  styleUrl: './negocios-componente.css',
})
export class NegociosComponente {
  nombre = signal ('Empanadas CocoBongo');
  categoria = signal ('Alimentacion');
  ubicacion = signal ('Av. 25 de Septiembre');
}
