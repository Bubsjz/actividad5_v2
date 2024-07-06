import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { INews } from '../../interfaces/i-news';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  newNews: INews = {
    title:"",
    image:"",
    text:"",
    date:""
  }

  @Output() newsIssued : EventEmitter<INews> = new EventEmitter()

  saveNews() {
    console.log(this.newNews)
    //console.log(this.arrayProducts)

    if (this.newNews.title !== "" && this.newNews.image !== "" && this.newNews.text !== "" && this.newNews.date !== "") {

    this.newsIssued.emit(this.newNews)
    this.newNews = {title:"", image:"", text:"", date:""}
    
    } else {
      alert ("Todos los campos son obligatorios")
    }
}
}
