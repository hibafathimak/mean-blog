import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';
import { ManagePostComponent } from './manage-post/manage-post.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path: 'admin',
        canActivate: [authGuard],
        loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule),
    },
    { path: '', component: HomeComponent, title: 'Home Page' },
    { path: 'login', component: LoginComponent, title: 'Login Page' },
    { path: 'register', component: RegisterComponent, title: 'Register Page' },
    { path: 'about', component: AboutComponent, title: 'About Us' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: 'all-blogs', component: AllPostsComponent, title: 'Blogs' },
    { path: 'blog/:id', component: PostComponent, title: 'Blog Page' },
    { path: 'profile', component: ProfileComponent, title: 'Profile Page' },
    { path: 'manage-post', component: ManagePostComponent, title: 'Manage Blogs' },
];
