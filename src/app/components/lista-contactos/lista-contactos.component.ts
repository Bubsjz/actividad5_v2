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
      //Juan Antonio, en el campo "URL de la imagen" en el formulario hay que introducir el protocolo "https://" para que funcione el vínculo una vez pintado en el listado
      html = html + 
      `<div class=news>
      <div><strong>Título: </strong>${eachNew.title}</div>
      <div><strong>Imagen: </strong><a href="${eachNew.image}"target="_blank">${eachNew.image}</a></div>
      <div><strong>Cuerpo: </strong>${eachNew.text}</div>
      <div><strong>Fecha: </strong>${eachNew.date}</div>
      </div>`
    })
    return html
  }
}
