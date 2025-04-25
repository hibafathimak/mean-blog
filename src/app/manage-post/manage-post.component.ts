import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-manage-post',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './manage-post.component.html',
  styleUrl: './manage-post.component.css'
})
export class ManagePostComponent {
isEditing:boolean=false
}
