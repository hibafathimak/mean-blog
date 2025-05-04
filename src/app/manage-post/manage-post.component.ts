import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-post',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './manage-post.component.html',
})
export class ManagePostComponent implements OnInit {
  @Input() id!: string;
  loading:boolean=false
  blogForm!: FormGroup;
  selectedcoverImg: File | null = null;
  coverImageUrl: string = '';

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.blogForm = this.fb.group({
      title: [''],
      content: [''],
      category: [''],
      tags: ['']
    });
  }

  ngOnInit() {this.getBlogDetails()}

  getBlogDetails() {
    this.loading=true
    if (this.id) {
      this.api.getSingleBlogApi(this.id).subscribe((res: any) => {
        this.blogForm.patchValue(res);
        if (res.coverImage) {
          this.coverImageUrl = `${this.api.serverUrl}/uploads/${res.coverImage}`;
        }
        this.loading=false
      });
    }
  }
  
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedcoverImg = file;
  
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.coverImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  

  submitForm() {
    if (this.blogForm.valid) {
      const formData = new FormData();
      formData.append('title', this.blogForm.value.title);
      formData.append('content', this.blogForm.value.content);
      formData.append('category', this.blogForm.value.category);
      formData.append('tags', this.blogForm.value.tags);

      if (this.selectedcoverImg) {
        formData.append('coverImage', this.selectedcoverImg);
      }

      if (this.id) {
        this.api.updateBlogApi(this.id, formData).subscribe({
          next: (res) => {
            alert('Blog updated successfully')
            console.log(res)
            this.router.navigateByUrl('/profile')
          },
          error: (err) => alert('Failed to update blog',)
        });
      } else {
        this.api.createBlogsApi(formData).subscribe({
          next: (res) => {
            alert('Blog created successfully')
            this.router.navigateByUrl('/profile')
          },
          error: (err) => alert('Failed to create blog')
        });
      }
    }
  }
}
