import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { INews } from './interfaces/i-news';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioComponent, ListaContactosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  arrayNews: INews[] =[
    {title: "Días sin fin", image: "https://via.placeholder.com/150", text: "Texto noticia", date: "2023-07-01"},
    {title: "Hecatombe", image: "https://via.placeholder.com/150", text: "Texto noticia", date: "2023-07-05"}
  ]

  onNewsIssued(event: INews) : void {
    //console.log(event)         
    this.arrayNews.push(event)
  }






}
