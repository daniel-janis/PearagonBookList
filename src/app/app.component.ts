import { HttpClient } from '@angular/common/http';
import { SelectorMatcher } from '@angular/compiler';
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'booklist';
  inputText: string = '';
  inputNumber: string = '';
  titleMessage: string = '';
  authorMessage: string = '';
  constructor(
    private api:ApiService
  ) {
  }

  searchBook(){
    console.log(this.inputText)
    var title = `${this.inputText}`
    var url = 'https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api/books/search'
    this.api.post(url, title).subscribe((data:any) => {
      console.log(data)
      var response = '';
      if (data.id) {
        response = 'The book was found!'
        this.titleMessage = `${response}!<br>ID: ${data.id}<br>Title: ${data.title}<br>Description: ${data.description}<br>Authors: ${data.authors.join(', ')}`
      } else {
        response = 'This book was NOT found'
        this.titleMessage = `${response}!`
      }
      this.inputText = '';
      this.authorMessage = '';
    })
  }

  searchAuthor(){
    console.log(this.inputNumber)
    var id = this.inputNumber
    var url = `https://ejditq67mwuzeuwrlp5fs3egwu0yhkjz.lambda-url.us-east-2.on.aws/api/authors/${id}`
    this.api.get(url).subscribe((data:any) => {
      console.log(data)
      var response = '';
      if (data) {
        response = 'The author was found!'
        this.authorMessage = `${response}!<br>ID: ${this.inputNumber}<br>First Name: ${data.firstName}<br>Last Name: ${data.lastName}`
      } else {
        response = 'This author was NOT found'
        this.authorMessage = `${response}!`

      }
      this.inputNumber = '';
      this.titleMessage = '';
    })
  }  
}
