import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { DatePipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, DatePipe,NgIf],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  blogs: any[] = [];
  blogsPart1: any[] = [];
  blogsPart2: any[] = [];
  loading: boolean = false;
  dividePostsIntoParts() {}

  environment = environment;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.getBlogs()
  }

  getBlogs() {
    this.loading=true
    this.api.getFeaturedPost().subscribe((res: any) => {
      this.blogs = res;
      this.blogsPart1 = this.blogs.slice(0, 3);
      this.blogsPart2 = this.blogs.slice(3);
      this.loading=false
    });
  }
}
