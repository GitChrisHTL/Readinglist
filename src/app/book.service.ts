import { Injectable } from '@angular/core';
import {BookInterface} from "./book-interface";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  readingList : BookInterface[] = [
    {
      image: "https://cdnxyz.xyz/web/cover/82444/thumbnail.png",
      name: "Pick Me Up, Infinite Gacha",
      linkToWebsiteYouReadThisOn: "https://asuratoon.com/manga/1908287720-pick-me-up-infinite-gacha/",
      lastReadChapter: 89,
      lastReadOn: "15.03.24",
      type: "Manhwa",
      author: "HERMODE"
    },
    {
      image: "https://www.anime-planet.com/images/manga/covers/death-is-the-only-ending-for-the-villainess-49306.jpg?t=1588298843",
      name: "Villains Are Destined to Die",
      linkToWebsiteYouReadThisOn: "https://fanfox.net/manga/the_villain_s_ending_is_death/",
      lastReadChapter: 145,
      lastReadOn: "16.04.24",
      type: "Manhwa",
      author: "GWON Gyeoeul"
    },
    {
      image: "https://m.media-amazon.com/images/I/81GD2bI2ILL._AC_UF894,1000_QL80_.jpg",
      name: "Record of Ragnarok",
      linkToWebsiteYouReadThisOn: "https://earlym.org/manga/706/record-of-ragnarok",
      lastReadChapter: 88,
      lastReadOn: "14.04.24",
      type: "Manga",
      author: "Takumi Fukui - Shinya Umemura - Chika Aji"
    }
  ]

  getReadinglist() : BookInterface[] {
    return this.readingList;
  }

  getManhwaFromReadingList() : BookInterface[] {
    return this.readingList.filter(book => book.type === 'Manhwa');
  }

  constructor() { }
}
