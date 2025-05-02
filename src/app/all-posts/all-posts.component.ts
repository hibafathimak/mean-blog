import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgClass, NgFor } from '@angular/common';
import { ApiService } from '../services/api.service';
import {environment}  from '../../environments/environment'; 
@Component({
  selector: 'app-all-posts',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NgxPaginationModule,NgClass,NgFor],
  templateUrl: './all-posts.component.html',
  styleUrl: './all-posts.component.css'
})
  
export class AllPostsComponent {
  filtersVisible = true;
  environment = environment;
  blogs:any = []

  toggleFilters() {
    this.filtersVisible = !this.filtersVisible;
  }

  constructor(private api: ApiService) {
    
  }
  ngOnInit() {
    this.api.getBlogsApi().subscribe((res: any) => {
      this.blogs = res
      console.log(this.blogs)
  })
}

}
