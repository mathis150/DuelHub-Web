import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForumComponent } from './forum/forum.component';
import { WikiComponent } from './wiki/wiki.component';
import { ForumPostsComponent } from './forum-posts/forum-posts.component';
import { ForumPostComponent } from './forum-post/forum-post.component';

export const routes: Routes = [
    { path:"", component:HomeComponent },
    { path:"login", component:LoginComponent },
    { path:"register", component:RegisterComponent },
    { path:"forum", component:ForumComponent },
    { path:"forum/all-posts", component:ForumPostsComponent },
    { path:"forum/post", component:ForumPostComponent },
    { path:"wiki", component:WikiComponent }
];
