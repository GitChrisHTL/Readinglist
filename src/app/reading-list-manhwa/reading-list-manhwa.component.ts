import {Component, inject} from '@angular/core';
import {BookInterface} from "../book-interface";
import {BookService} from "../book.service";
import {BookComponent} from "../book/book.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reading-list-manhwa',
  standalone: true,
  imports: [
    BookComponent,
    NgForOf
  ],
  templateUrl: './reading-list-manhwa.component.html',
  styleUrl: './reading-list-manhwa.component.css'
})
export class ReadingListManhwaComponent {
  manhwaFromReadingList : BookInterface[] = [];
  booksService : BookService = inject(BookService);

  constructor() {
    this.manhwaFromReadingList = this.booksService.getManhwaFromReadingList();
  }
}
