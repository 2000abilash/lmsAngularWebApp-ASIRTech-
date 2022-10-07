import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { BookserviceService } from '../bookservice.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {
  // bookService: any;

  constructor(public bookservice:BookserviceService, private enrollmentService:EnrollmentService,
              private dataserviceservice:DataserviceService) { }

  books!:any;


  ngOnInit(): void {
   
    this.enrollmentService.books.subscribe((data)=>
    
    {
     
      this.getBookBorrow();
     
      console.log(this.books)
      this.books=data;
      console.log(this.books)

     //return this.books=data;
      // console.log("books" + this.books.entries)
    }
    
    );

  }
  delete(book:any){
  //   this.books.forEach((value:any,index:any)=>{
  //     if(value==element)
  //     this.books.splice(index,1)
  //     {
  //       alert("This goes to be Delete!")
  //     }
  //  })
  console.log(JSON.stringify(book))
   this.dataserviceservice.postData(`BookDetail/delete`,book);
  }

  setBookBorrow(data: any) {
    this.books = data
  }
  getBookBorrow() {
    this.enrollmentService.getBookBorrow().subscribe(
      (data: any) => {
      
        this.setBookBorrow(data);
        console.log(this.books);
      },
      (err) => console.error(err),
    );
  }

}
