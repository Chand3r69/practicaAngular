import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NegociosComponente } from './negocios-componente/negocios-componente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NegociosComponente, FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PracticaWeb');
  mensaje: string = "wenas 🚀🚀";

  usuario = {
    nombre: '',
    correo: '',
    edad: null as number | null
  }

  registrar() {
    if (!this.usuario.nombre || !this.usuario.correo)
      this.mensaje="Nombre y Correo son Necesarios! ✍️"
    else
      this.mensaje="se registro Correctly"

    console.log(this.usuario)
    //console.log("se registro Correctly")
  }



}
