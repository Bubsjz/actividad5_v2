import { Component, Input } from '@angular/core';
import { INews } from '../../interfaces/i-news';

@Component({
  selector: 'app-lista-contactos',
  standalone: true,
  imports: [],
  templateUrl: './lista-contactos.component.html',
  styleUrl: './lista-contactos.component.css'
})

export class ListaContactosComponent {

  @Input() news: INews[] = [] 

  ngOnInit() {     
  this.loadData()
  }

  loadData() : string {
    let html = ""
    this.news.forEach( (eachNew: INews)=> {
      html = html + 
      `<div class=news>
      <div><strong>Título:</strong> ${eachNew.title}</div>
      <div><strong>Imagen:</strong> ${eachNew.image}</div>
      <div><strong>Cuerpo:</strong> ${eachNew.text}</div>
      <div><strong>Fecha:</strong> ${eachNew.date}</div>
      </div>`
    })
    return html
  }
}
