import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HiraganaComponent} from "./hiragana/hiragana.component";
import {HiraganachartComponent} from "./hiraganachart/hiraganachart.component";
import {HiraganaquizComponent} from "./hiraganaquiz/hiraganaquiz.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hiragana',
    component: HiraganaComponent,
  },
  {
    path: 'hiraganachart',
    component: HiraganachartComponent,
  },
  {
    path: 'hiraganaquiz',
    component: HiraganaquizComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
