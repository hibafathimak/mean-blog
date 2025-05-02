import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';
import { ApiService } from '../services/api.service';
import { DatePipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterLink, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  blogs: any[] = [];
  blogsPart1: any[] = [];
  blogsPart2: any[] = [];
  blogsPart3: any[] = [];

  dividePostsIntoParts() {}

  environment = environment;
  constructor(private api: ApiService) {}
  ngOnInit() {
    this.api.getFeaturedPost().subscribe((res: any) => {
      this.blogs = res;
      this.blogsPart1 = this.blogs.slice(0, 1);
      this.blogsPart2 = this.blogs.slice(1, 3);
      this.blogsPart3 = this.blogs.slice(3);
    });
  }

}
