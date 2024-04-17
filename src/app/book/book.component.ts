import {Component, Input} from '@angular/core';
import {BookInterface} from "../book-interface";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  @Input() bookInterface! : BookInterface;
}
