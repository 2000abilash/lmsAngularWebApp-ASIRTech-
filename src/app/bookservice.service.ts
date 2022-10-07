import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import{DataserviceService} from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  public selectedBook:BehaviorSubject<any>=new BehaviorSubject<any>({});

  
public rdate:any = this.formatDate(new Date());
  public bdate: any = this.formatDate(new Date()); 
  //dataService: any;
  constructor(private dataserviceservice:DataserviceService) { }

  getBookBorrow(){
    return this.dataserviceservice.getData('Book');
  }

  formatDate(d: Date) {
    var month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
 
     if (month.length < 2) {
       month = '0' + month
     }
 
     if (day.length < 2) {
       day = '0' + day
     }
 
     return year + '-' + month + '-' + day
 
  }

  initSelectedBook(book:any){
    this.selectedBook.next(book);
  }

  books = [
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1001,
      imgurl: "assets/themahabaratasecret.jpg",
      bookname: "The Mahabarata Secret",
      author: "Christopher C.Doyle",
      year: "2013",
      description:"The Mahabharata Secret is the debut novel by Indian author Christopher C. Doyle and was released on 21 October 2013 by Om Books. The story follows Vijay and his friends, as they try to decipher a series of clues which would lead them to a devastating Secret hidden by a brotherhood known as the Nine Men.",    
    },

    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1002,
      imgurl: "assets/fearnottobestrong.jpg",
      bookname: "Fear not to be strong",
      author: "Swami Tathagatananda",
      year: "2013",
      description:"Fear Not Be Strong: Vivekananda's Message Of Strength And Fearlessness. Strength and fearlessness are the two prime virtues which are the markers of the health of a human being and society. Every crime and and antisocial and inhuman act is the outcome of lack of true strength and fearlessness.",
    },
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1003,
      imgurl: "assets/every(thfa)reason.jpg",
      bookname: "Everything for a Reason",
      author: "Kate Bowler Doyle",
      year: "2021",
      description:"A touching tale of battling cancer set against the backdrop of the prosperity gospel. Bowler (Duke Divinity School; Blessed: A History of the American Prosperity Gospel, 2013), a specialist in the study of the prosperity gospel, found her life turned upside down in her mid-30s with a diagnosis of stage 4 colon cancer.",
    },
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1004,
      imgurl: "assets/onedaylifewillchange.jpg",
      bookname: "One day Life will Change",
      author: "Saranya Umakanthan",
      year: "2020",
      description:" It is the story of a girl Samira who seems intent on running away from love, hope and her aspiration after the great jolt in her life. While Vivian is the successful and dynamic head of creative tanks and has dreams of being the top entrepreneur in India.",
    },
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1005,
      imgurl: "assets/psyccologyofmoney.jpg",
      bookname: "The Psychology of Money",
      author: "Morgan Housel Daniel",
      year: "2020",
      description:"Psychology of Money is a collection of tips from a two-time winner of the Best in Business award. This book highlights the importance of noticing the difference between being rich and being wealthy. People who are rich often make risky decisions based on historical data.",
    },
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1006,
      imgurl: "assets/thepowerofyoursubconsciousmind.jpg",
      bookname: "Power of your subconcious Mind",
      author: "Joseph Kiyosaki",
      year: "1963",
      description:"The Power Of Your Subconscious Mind is a spiritual self-help classic, which teaches you how to use visualization and other suggestion techniques to adapt your unconscious behavior in positive ways",
    },
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1007,
      imgurl: "assets/bagavatgita.jpg",
      bookname: " The Bagavad Gita (Holy Book)",
      author: "Gitapress Kolkata",
      year: "2018",
      description:"Bhagavadgita, (Sanskrit: “Song of God”) an episode recorded in the great Sanskrit poem of the Hindus, the Mahabharata. It occupies chapters 23 to 40 of Book VI of the Mahabharata and is composed in the form of a dialogue between Prince Arjuna and Krishna, an avatar (incarnation) of the god Vishnu.",
    },
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1008,
      imgurl: "assets/thesoundofsilence.jpg",
      bookname: "The Sound of silence",
      author: "Paul Simon Sadhu",
      year: "1964",
      description:"The book follows Yoshio, a young boy searching for or  the silence between sounds. Readers of all ages can appreciate the need to find quiet in a noisy world ... and the fact that Yoshio finally finds it by (***spoiler alert***) getting lost in the pages of a book will delight those book ",
    }, 
    {
      bdate:DatePipe,
      rdate:DatePipe,
      bookID:1009,
      imgurl: "assets/betterthanbestfriends.jpg",
      bookname: "Better than best Friends (Entertainment)",
      author: "Ahona Sadhu",
      year: "2020",
      description:"When Curt Townsend, a successful young DC lawyer, attends his first gay wedding, he doesn't expect anything more than a great evening out spent celebrating two lucky guys willing to commit to one another. He certainly doesn't anticipate meeting someone like Jack Farinelli.",
     },
    // {bookID:1010,
    //   imgurl: "assets/richdadpoordad.png",
    //   bookname: "Rich Dad Poor Dad (Money Handling)",
    //   author: "Robert Kiyosaki",
    //   year: "1997",
    // },
    // {bookID:1011,
    //   imgurl: "assets/the-complete-novels-of-sherlock-holmes-sir.jpg",
    //   bookname: "Comlete Novels of Sherlock Holmes",
    //   author: "Arthur Conan Doyle",
    //   year: "1892",
    // },
    // {bookID:1012,
    //   imgurl: "assets/theblueumbrella.jpg",
    //   bookname: "Ruskin Bond's The Blue Umbrella",
    //   author: "Ruskin BondMacmillan",
    //   year: "1974",
    // },
    // {bookID:1013,
    //   imgurl: "assets/thegirlwhodrankthemoon.jpg",
    //   bookname: "The Girl who Drank the Moon",
    //   author: "Kelly Barnhill Benjamin",
    //   year: "2016",
    // },
    // {bookID:1014,
    //   imgurl: "assets/theintelligentinvestor.jpg",
    //   bookname: "The Intelligent Investor",
    //   author: "Benjamin Graham",
    //   year: 1949,
    // },
    // {bookID:1015,
    //   imgurl: "assets/thetimemachine.jpg",
    //   bookname: "The Time Machine(Time Travel)",
    //   author: "Hendry Wells",
    //   year: "1895",
    // }
  ];

 getBooks(){
   return this.books;
  }
}
