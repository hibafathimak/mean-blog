import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgClass, NgFor } from '@angular/common';
interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NgxPaginationModule,NgClass,NgFor],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
  
export class AllPostsComponent {
  filtersVisible = true;

  blogs = [
    {
      title: "A Food Lover's Journey: Top Culinary Destinations",
      image: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Liam Taylor",
      authorAvatar: "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
      date: "Nov 29, 2024",
      category:"tech"
    },
    {
      title: "A Food Lover's Journey: Top Culinary Destinations",
      image: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Liam Taylor",
      authorAvatar: "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
      date: "Nov 29, 2024",
      category:"tech"
    },
    {
      title: "A Food Lover's Journey: Top Culinary Destinations",
      image: "https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg?auto=compress&cs=tinysrgb&w=600",
      author: "Liam Taylor",
      authorAvatar: "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
      date: "Nov 29, 2024",
      category:"tech"
    }
  ];

  toggleFilters() {
    this.filtersVisible = !this.filtersVisible;
  }

}
