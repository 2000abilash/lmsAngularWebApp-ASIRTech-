import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataserviceService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

public books:BehaviorSubject<any>=new BehaviorSubject<any>([]);

enroll(selectedBook:any){
  var book={
    book:selectedBook
  }

 
var booksTemp=this.books.getValue();
  booksTemp.push(book);

  this.books.next(booksTemp);
  console.log(this.books.getValue());
  
}


constructor( private dataserviceservice:DataserviceService) {}
getBookBorrow(){
  return this.dataserviceservice.getData('BookDetail');
}


}