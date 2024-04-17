import {Component, inject} from '@angular/core';
import {BookInterface} from "../book-interface";
import {BookService} from "../book.service";
import {BookComponent} from "../book/book.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reading-list',
  standalone: true,
  imports: [
    BookComponent,
    NgForOf
  ],
  templateUrl: './reading-list.component.html',
  styleUrl: './reading-list.component.css'
})
export class ReadingListComponent {
  readingList : BookInterface[] = [];
  booksService : BookService = inject(BookService);

  constructor() {
    this.readingList = this.booksService.getReadinglist();
  }
}
