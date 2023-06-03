import { Component } from '@angular/core';

@Component({
  selector: 'app-cultural',
  templateUrl: './cultural.component.html',
  styleUrls: ['./cultural.component.css']
})
export class CulturalComponent {
  insights: CulturalInsight[] = [
    {
      title: 'Tea Ceremony',
      description: 'The Japanese tea ceremony, also known as "Sadō" or "Chadō," is a traditional ritual of preparing and serving matcha tea. It embodies harmony, respect, purity, and tranquility.',
      image: 'assets/images/tea_ceremony.jpg'
    },
    {
      title: 'Cherry Blossoms',
      description: 'Cherry blossoms, known as "Sakura," hold great cultural significance in Japan. The blooming of cherry blossoms symbolizes the beauty and fragility of life, and it is celebrated with hanami (flower-viewing) parties.',
      image: 'assets/images/cherry_blossoms.jpg'
    },
    {
      title: 'Kimono',
      description: 'The kimono is a traditional Japanese garment worn on special occasions. It is characterized by its T-shaped silhouette, wide sleeves, and vibrant patterns. Kimonos represent Japanese culture and elegance.',
      image: 'assets/images/kimono.jpg'
    }
  ];
}

interface CulturalInsight {
  title: string;
  description: string;
  image: string;

}
