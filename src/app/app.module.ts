import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { GrammarComponent } from './grammar/grammar.component';
import { CulturalComponent } from './cultural/cultural.component';
import { ReadingComponent } from './reading/reading.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { JapaneseTestComponent } from './japanese-test/japanese-test.component';
import { CourseComponent } from './course/course.component';
import { CourseGrammarComponent } from './course-grammar/course-grammar.component';
import { CourseVocabularyComponent } from './course-vocabulary/course-vocabulary.component';
import { CourseReadingComponent } from './course-reading/course-reading.component';

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
    VocabComponent,
    GrammarComponent,
    CulturalComponent,
    ReadingComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    ProfileComponent,
    ChatComponent,
    JapaneseTestComponent,
    CourseComponent,
    CourseGrammarComponent,
    CourseVocabularyComponent,
    CourseReadingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatListModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
