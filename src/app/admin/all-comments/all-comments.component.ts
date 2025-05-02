import { Component } from '@angular/core';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrl: './all-comments.component.css'
})
export class AllCommentsComponent {
  isSideBarOpen: boolean = false;
  columnWidth: string = "col-lg-12 p-0";

  constructor() {}

  menuBtnClick() {
    this.isSideBarOpen = !this.isSideBarOpen;
    // Adjust column width based on sidebar state
    this.columnWidth = this.isSideBarOpen ? "col-lg-10 p-0" : "col-lg-12 p-0";
  }
}
