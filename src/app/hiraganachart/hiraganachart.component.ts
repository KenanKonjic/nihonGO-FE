import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hiraganachart',
  templateUrl: './hiraganachart.component.html',
  styleUrls: ['./hiraganachart.component.css']
})
export class HiraganachartComponent implements OnInit{
  constructor() {}

  ngOnInit() {
    this.setupAudio();
  }

  setupAudio() {
    const kanaElements = document.getElementsByClassName('kana');
    for (let i = 0; i < kanaElements.length; i++) {
      kanaElements[i].addEventListener('click', () => {
        const audioPath = kanaElements[i].getAttribute('data-audio');
        if (audioPath) {
          const audio = new Audio(audioPath);
          audio.play();
        }
      });
    }
  }
}
