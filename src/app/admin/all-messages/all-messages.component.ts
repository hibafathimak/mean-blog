import { Component } from '@angular/core';

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html',
  styleUrl: './all-messages.component.css'
})
export class AllMessagesComponent {
isSideBarOpen: boolean = false;
  columnWidth: string = "col-lg-12 p-0";

  constructor() {}

  menuBtnClick() {
    this.isSideBarOpen = !this.isSideBarOpen;
    // Adjust column width based on sidebar state
    this.columnWidth = this.isSideBarOpen ? "col-lg-10 p-0" : "col-lg-12 p-0";
  }
}
