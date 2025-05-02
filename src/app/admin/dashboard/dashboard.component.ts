import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isSideBarOpen: boolean = false;
  columnWidth: string = "col-lg-12 p-0";

  constructor(private router: Router, private api: ApiService) {}

  menuBtnClick() {
    this.isSideBarOpen = !this.isSideBarOpen;
    // Adjust column width based on sidebar state
    this.columnWidth = this.isSideBarOpen ? "col-lg-10 p-0" : "col-lg-12 p-0";
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
