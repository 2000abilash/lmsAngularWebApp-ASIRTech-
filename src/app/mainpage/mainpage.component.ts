import { Component, OnInit } from '@angular/core';

import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private bookservice: BookserviceService) { }

  books!: any[]

  setBookBorrow(data: any) {
    this.books = data
  }
  getBookBorrow() {
    this.bookservice.getBookBorrow().subscribe(
      (data: any) => {
      
        this.setBookBorrow(data);
        console.log(this.books);
      },
      (err) => console.error(err),
    );
  }


  ngOnInit(): void {
    //this.books = this.bookservice.getBooks()
  //  console.log("here")
   this.getBookBorrow();
  }

  selectedBook(book: any) {
    this.bookservice.initSelectedBook(book);
  }

}
