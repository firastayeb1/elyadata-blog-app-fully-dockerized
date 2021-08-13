import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/components/home/home.component";
import { BlogDetailsComponent } from "../app/components/blog-details/blog-details.component";
import { BlogFormComponent } from "../app/components/blog-form/blog-form.component";

const routes: Routes = [
  {path: '', redirectTo : 'home/', pathMatch : 'full'},
  {path: 'home', redirectTo : 'home/', pathMatch : 'full'},
  { path: 'home/:filterWord', component: HomeComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'newBlog', component: BlogFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
