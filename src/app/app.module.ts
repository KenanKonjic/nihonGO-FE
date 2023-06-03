import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { HiraganaComponent } from './hiragana/hiragana.component';
import { HiraganachartComponent } from './hiraganachart/hiraganachart.component';
import { HiraganaquizComponent } from './hiraganaquiz/hiraganaquiz.component';
import { HiraganatestComponent } from './hiraganatest/hiraganatest.component';
import { KatakanaComponent } from './katakana/katakana.component';
import { KatakanaquizComponent } from './katakanaquiz/katakanaquiz.component';
import { KatakanatestComponent } from './katakanatest/katakanatest.component';
import { KatakanachartComponent } from './katakanachart/katakanachart.component';
import { VocabComponent } from './vocab/vocab.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HiraganaComponent,
    HiraganachartComponent,
    HiraganaquizComponent,
    HiraganatestComponent,
    KatakanaComponent,
    KatakanaquizComponent,
    KatakanatestComponent,
    KatakanachartComponent,
    VocabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
