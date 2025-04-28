import { Component,  } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userProfile = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    bio: 'Frontend developer with 5+ years of experience specializing in Angular and React.'
  };

  // Track whether we are in edit mode or not
  isEditing = false;

  // Toggle between view and edit modes
  toggleEditMode(): void {
    this.isEditing = !this.isEditing;
  }

  // Handle form submission
  onSubmit(): void {
    console.log('Updated Profile:', this.userProfile);
    this.toggleEditMode(); // Switch back to view mode after saving
  }
}
