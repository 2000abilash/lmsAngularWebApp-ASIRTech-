import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookserviceService } from '../bookservice.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-admindata',
  templateUrl: './admindata.component.html',
  styleUrls: ['./admindata.component.css']
})
export class AdmindataComponent implements OnInit {
  editedbook: any={};
  //getBookBorrow: any;

  constructor(private bookservice:BookserviceService,
              private dataserviceservice:DataserviceService ) { }

newBook:any={};

  books!:any[]
  ngOnInit(): void {
    this.getBookBorrow();
    // this.books = this.bookservice.getBooks()
  }
  onFormSubmit(bookForm:any){
    // this.books.push(this.newBook);
    // this.newBook={};
    console.log(JSON.stringify(this.newBook))
    this.dataserviceservice.postData(`Book`,this.newBook)
    this.newBook={};
  }

  editbookform=new FormGroup({
    bookID:new FormControl(''),
    imgurl:new FormControl(''),
    bookname:new FormControl(''),
    author:new FormControl(''),
    year:new FormControl(''),
    description:new FormControl('')
  })

  OneditbookForm(){

    this.editedbook.bookID=this.editbookform.controls['bookID'].value
    this.editedbook.imgurl=this.editbookform.controls['imgurl'].value
    this.editedbook.bookname=this.editbookform.controls['bookname'].value
    this.editedbook.author=this.editbookform.controls['author'].value
    this.editedbook.year=this.editbookform.controls['year'].value

console.log("a"+this.editedbook)

    this.dataserviceservice.postData('Book/edit',this.editedbook);
    this.editedbook={}
  }

edit(book:any){

  this.editbookform.controls['bookID'].setValue(book.bookID),
  this.editbookform.controls['imgurl'].setValue(book.imgurl),
  this.editbookform.controls['bookname'].setValue(book.bookname),
  this.editbookform.controls['author'].setValue(book.author),
  this.editbookform.controls['year'].setValue(book.year)
}

  delete(newBook:any){
    // this.books.forEach((value:any,index:any)=>{
    //   if(value==element)
    //   this.books.splice(index,1)
    // })
    console.log("A"+this.newBook.value);
    this.dataserviceservice.postData(`Book/delete`,newBook)
    
  }

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

}
