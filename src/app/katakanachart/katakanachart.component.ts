import { Component } from '@angular/core';

@Component({
  selector: 'app-katakanachart',
  templateUrl: './katakanachart.component.html',
  styleUrls: ['./katakanachart.component.css']
})
export class KatakanachartComponent {
  katakanaCharacters: { pronunciation: string; symbol: string; }[] = [
    { pronunciation: 'a', symbol: 'ア' },
    { pronunciation: 'i', symbol: 'イ' },
    { pronunciation: 'u', symbol: 'ウ' },
    { pronunciation: 'e', symbol: 'エ' },
    { pronunciation: 'o', symbol: 'オ' },
    { pronunciation: 'ka', symbol: 'カ' },
    { pronunciation: 'ki', symbol: 'キ' },
    { pronunciation: 'ku', symbol: 'ク' },
    { pronunciation: 'ke', symbol: 'ケ' },
    { pronunciation: 'ko', symbol: 'コ' },
    { pronunciation: 'sa', symbol: 'サ' },
    { pronunciation: 'shi', symbol: 'シ' },
    { pronunciation: 'su', symbol: 'ス' },
    { pronunciation: 'se', symbol: 'セ' },
    { pronunciation: 'so', symbol: 'ソ' },
    { pronunciation: 'ta', symbol: 'タ' },
    { pronunciation: 'chi', symbol: 'チ' },
    { pronunciation: 'tsu', symbol: 'ツ' },
    { pronunciation: 'te', symbol: 'テ' },
    { pronunciation: 'to', symbol: 'ト' },
    { pronunciation: 'na', symbol: 'ナ' },
    { pronunciation: 'ni', symbol: 'ニ' },
    { pronunciation: 'nu', symbol: 'ヌ' },
    { pronunciation: 'ne', symbol: 'ネ' },
    { pronunciation: 'no', symbol: 'ノ' },
    { pronunciation: 'ha', symbol: 'ハ' },
    { pronunciation: 'hi', symbol: 'ヒ' },
    { pronunciation: 'fu', symbol: 'フ' },
    { pronunciation: 'he', symbol: 'ヘ' },
    { pronunciation: 'ho', symbol: 'ホ' },
    { pronunciation: 'ma', symbol: 'マ' },
    { pronunciation: 'mi', symbol: 'ミ' },
    { pronunciation: 'mu', symbol: 'ム' },
    { pronunciation: 'me', symbol: 'メ' },
    { pronunciation: 'mo', symbol: 'モ' },
    { pronunciation: 'ya', symbol: 'ヤ' },
    { pronunciation: 'yu', symbol: 'ユ' },
    { pronunciation: 'yo', symbol: 'ヨ' },
    { pronunciation: 'ra', symbol: 'ラ' },
    { pronunciation: 'ri', symbol: 'リ' },
    { pronunciation: 'ru', symbol: 'ル' },
    { pronunciation: 're', symbol: 'レ' },
    { pronunciation: 'ro', symbol: 'ロ' },
    { pronunciation: 'wa', symbol: 'ワ' },
    { pronunciation: 'wo', symbol: 'ヲ' },
    { pronunciation: 'n', symbol: 'ン' },
    { pronunciation: 'ga', symbol: 'ガ' },
    { pronunciation: 'gi', symbol: 'ギ' },
    { pronunciation: 'gu', symbol: 'グ' },
    { pronunciation: 'ge', symbol: 'ゲ' },
    { pronunciation: 'go', symbol: 'ゴ' },
    { pronunciation: 'za', symbol: 'ザ' },
    { pronunciation: 'ji', symbol: 'ジ' },
    { pronunciation: 'zu', symbol: 'ズ' },
    { pronunciation: 'ze', symbol: 'ゼ' },
    { pronunciation: 'zo', symbol: 'ゾ' },
    { pronunciation: 'da', symbol: 'ダ' },
    { pronunciation: 'ji', symbol: 'ジ' },
    { pronunciation: 'zu', symbol: 'ズ' },
    { pronunciation: 'de', symbol: 'デ' },
    { pronunciation: 'do', symbol: 'ド' },
    { pronunciation: 'ba', symbol: 'バ' },
    { pronunciation: 'bi', symbol: 'ビ' },
    { pronunciation: 'bu', symbol: 'ブ' },
    { pronunciation: 'be', symbol: 'ベ' },
    { pronunciation: 'bo', symbol: 'ボ' },
    { pronunciation: 'pa', symbol: 'パ' },
    { pronunciation: 'pi', symbol: 'ピ' },
    { pronunciation: 'pu', symbol: 'プ' },
    { pronunciation: 'pe', symbol: 'ペ' },
    { pronunciation: 'po', symbol: 'ポ' },
  ];
}
