import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSideBarOpen: boolean = false;
  columnWidth: string = "col-lg-12 p-0";

  userCount: number = 0;
  blogCount: number = 0;
  commentCount: number = 0;
  reportCount: number = 0;

  latestMessages: any[] = [];
  topPosts: any[] = [];

  constructor(private router: Router, private api: ApiService) {}

  ngOnInit() {
    this.getBlogCount()
    this.getUserCount()
    this.getCommentCount()
    this.getReportCount()
  }

  menuBtnClick() {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.columnWidth = this.isSideBarOpen ? "col-lg-10 p-0" : "col-lg-12 p-0";
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

  getUserCount() {
    this.api.getAllUsers().subscribe((res: any) => {
      this.userCount = res.length;
    });
  }
  
  getBlogCount() {
    this.api.getAllPosts().subscribe((res: any) => {
      this.blogCount = res.length;
    });
  }
  
  getCommentCount() {
    this.api.getAllComments().subscribe((res: any) => {
      this.commentCount = res.length;
    });
  }
  
  getReportCount() {
    this.api.getReportedPosts().subscribe((res: any) => {
      this.reportCount = res.length;
      console.log(res)
    });
  }
  

  
  
  
}
