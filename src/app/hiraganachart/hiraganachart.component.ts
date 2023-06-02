import { Component } from '@angular/core';

@Component({
  selector: 'app-hiraganachart',
  templateUrl: './hiraganachart.component.html',
  styleUrls: ['./hiraganachart.component.css']
})
export class HiraganachartComponent {

  hiraganaCharacters: { pronunciation: string; symbol: string; }[] = [
    { pronunciation: 'a', symbol: 'あ' },
    { pronunciation: 'i', symbol: 'い' },
    { pronunciation: 'u', symbol: 'う' },
    { pronunciation: 'e', symbol: 'え' },
    { pronunciation: 'o', symbol: 'お' },
    { pronunciation: 'ka', symbol: 'か' },
    { pronunciation: 'ki', symbol: 'き' },
    { pronunciation: 'ku', symbol: 'く' },
    { pronunciation: 'ke', symbol: 'け' },
    { pronunciation: 'ko', symbol: 'こ' },
    { pronunciation: 'sa', symbol: 'さ' },
    { pronunciation: 'shi', symbol: 'し' },
    { pronunciation: 'su', symbol: 'す' },
    { pronunciation: 'se', symbol: 'せ' },
    { pronunciation: 'so', symbol: 'そ' },
    { pronunciation: 'ta', symbol: 'た' },
    { pronunciation: 'chi', symbol: 'ち' },
    { pronunciation: 'tsu', symbol: 'つ' },
    { pronunciation: 'te', symbol: 'て' },
    { pronunciation: 'to', symbol: 'と' },
    { pronunciation: 'na', symbol: 'な' },
    { pronunciation: 'ni', symbol: 'に' },
    { pronunciation: 'nu', symbol: 'ぬ' },
    { pronunciation: 'ne', symbol: 'ね' },
    { pronunciation: 'no', symbol: 'の' },
    { pronunciation: 'ha', symbol: 'は' },
    { pronunciation: 'hi', symbol: 'ひ' },
    { pronunciation: 'fu', symbol: 'ふ' },
    { pronunciation: 'he', symbol: 'へ' },
    { pronunciation: 'ho', symbol: 'ほ' },
    { pronunciation: 'ma', symbol: 'ま' },
    { pronunciation: 'mi', symbol: 'み' },
    { pronunciation: 'mu', symbol: 'む' },
    { pronunciation: 'me', symbol: 'め' },
    { pronunciation: 'mo', symbol: 'も' },
    { pronunciation: 'ya', symbol: 'や' },
    { pronunciation: 'yu', symbol: 'ゆ' },
    { pronunciation: 'yo', symbol: 'よ' },
    { pronunciation: 'ra', symbol: 'ら' },
    { pronunciation: 'ri', symbol: 'り' },
    { pronunciation: 'ru', symbol: 'る' },
    { pronunciation: 're', symbol: 'れ' },
    { pronunciation: 'ro', symbol: 'ろ' },
    { pronunciation: 'wa', symbol: 'わ' },
    { pronunciation: 'wo', symbol: 'を' },
    { pronunciation: 'n', symbol: 'ん' },
    {pronunciation: 'ga', symbol: 'が'},
    {pronunciation: 'gi', symbol: 'ぎ'},
    {pronunciation: 'gu', symbol: 'ぐ'},
    {pronunciation: 'ge', symbol: 'げ'},
    {pronunciation: 'go', symbol: 'ご'},
    {pronunciation: 'za', symbol: 'ざ'},
    {pronunciation: 'ji', symbol: 'じ'},
    {pronunciation: 'zu', symbol: 'ず'},
    {pronunciation: 'ze', symbol: 'ぜ'},
    {pronunciation: 'zo', symbol: 'ぞ'},
    {pronunciation: 'da', symbol: 'だ'},
    {pronunciation: 'ji', symbol: 'じ'},
    {pronunciation: 'zu', symbol: 'ず'},
    {pronunciation: 'de', symbol: 'で'},
    {pronunciation: 'do', symbol: 'ど'},
    {pronunciation: 'ba', symbol: 'ば'},
    {pronunciation: 'bi', symbol: 'び'},
    {pronunciation: 'bu', symbol: 'ぶ'},
    {pronunciation: 'be', symbol: 'べ'},
    {pronunciation: 'bo', symbol: 'ぼ'},
    {pronunciation: 'pa', symbol: 'ぱ'},
    {pronunciation: 'pi', symbol: 'ぴ'},
    {pronunciation: 'pu', symbol: 'ぷ'},
    {pronunciation: 'pe', symbol: 'ぺ'},
    {pronunciation: 'po', symbol: 'ぽ'},
  ];

}
