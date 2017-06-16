import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog/blog.component';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './blog/home/home.component';
import { PostDetailComponent } from './blog/post-detail/post-detail.component';

 
const appRoutes: Routes = [
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: PostDetailComponent},
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
