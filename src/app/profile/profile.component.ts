import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../services/api.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import {environment}  from '../../environments/environment'; 

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink,DatePipe,NgFor,NgIf],
  templateUrl: './profile.component.html',

})
export class ProfileComponent {
  profileImg: string = 'https://www.vhv.rs/dpng/d/436-4363443_view-user-icon-png-font-awesome-user-circle.png'; // Make sure this path is correct for your assets structure
  userDetails: any = {};
  posts: any[] = [];
  environment = environment;
  loading: boolean = false;
  
  constructor(private api: ApiService, private router: Router) { }
  
  ngOnInit() {
    this.getProfile();
    this.getPosts()
  }
  
  getProfile() {
    this.loading=true
    this.api.getProfile().subscribe({
      next: (res: any) => {
        this.userDetails = res;
        console.log(this.userDetails)
          if (this.userDetails.profilePic) {
          this.profileImg = `${this.api.serverUrl}/uploads/${this.userDetails.profilePic}`;
        }
        this.loading=false
      },
      error: (err) => {
        console.error('Error loading profile:', err);
        this.loading=false
      }
    });
  }
  getPosts() {
    this.api.getUserBlogsApi().subscribe((res: any) => {
      this.posts = res
      console.log(res)
    });
  }
  deleteBlog(id:any) {
    this.api.deleteBlogApi(id).subscribe((res: any) => {
      alert(res)
      this.getPosts()
    })
  }
}