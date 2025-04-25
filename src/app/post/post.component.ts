import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

}
