import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForumComponent } from './forum/forum.component';
import { WikiComponent } from './wiki/wiki.component';

export const routes: Routes = [
    { path:"", component:HomeComponent },
    { path:"login", component:LoginComponent },
    { path:"register", component:RegisterComponent },
    { path:"forum", component:ForumComponent },
    { path:"wiki", component:WikiComponent }
];
