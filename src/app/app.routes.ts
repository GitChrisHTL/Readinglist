import { Routes } from '@angular/router';
import {ReadingListComponent} from "./reading-list/reading-list.component";
import {ReadingListManhwaComponent} from "./reading-list-manhwa/reading-list-manhwa.component";

export const routes: Routes = [
  {
    title: 'Reading List',
    component: ReadingListComponent,
    path: ''
  },
  {
    title: 'Reading Manhwa',
    component: ReadingListManhwaComponent,
    path: 'yourManhwa'
  }
];
