import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {HiraganaComponent} from "./hiragana/hiragana.component";
import {HiraganachartComponent} from "./hiraganachart/hiraganachart.component";
import {HiraganaquizComponent} from "./hiraganaquiz/hiraganaquiz.component";
import {HiraganatestComponent} from "./hiraganatest/hiraganatest.component";
import {KatakanaComponent} from "./katakana/katakana.component";
import {KatakanachartComponent} from "./katakanachart/katakanachart.component";
import {KatakanaquizComponent} from "./katakanaquiz/katakanaquiz.component";
import {KatakanatestComponent} from "./katakanatest/katakanatest.component";
import {VocabComponent} from "./vocab/vocab.component";
import {GrammarComponent} from "./grammar/grammar.component";
import {CulturalComponent} from "./cultural/cultural.component";
import {ReadingComponent} from "./reading/reading.component";

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
  {
    path: 'hiraganatest',
    component: HiraganatestComponent,
  },
  {
    path: 'katakana',
    component: KatakanaComponent,
  },
  {
    path: 'katakanachart',
    component: KatakanachartComponent,
  },
  {
    path: 'katakanaquiz',
    component: KatakanaquizComponent,
  },
  {
    path: 'katakanatest',
    component: KatakanatestComponent,
  },
  {
    path: 'vocab',
    component: VocabComponent,
  },
  {
    path: 'grammar',
    component: GrammarComponent,
  },
  {
    path: 'culture',
    component: CulturalComponent,
  },
  {
    path: 'reading',
    component: ReadingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
