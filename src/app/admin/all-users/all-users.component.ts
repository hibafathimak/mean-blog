import { Component } from '@angular/core';
import { Router } from 'express';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
isSideBarOpen: boolean = false;
  columnWidth: string = "col-lg-12 p-0";

  constructor() {}

  menuBtnClick() {
    this.isSideBarOpen = !this.isSideBarOpen;
    // Adjust column width based on sidebar state
    this.columnWidth = this.isSideBarOpen ? "col-lg-10 p-0" : "col-lg-12 p-0";
  }

}
