import { SponsorLogoProps, SponsorType } from './index';

export const SPONSORS = new Map<
  SponsorType,
  Array<SponsorLogoProps>
>([
    [ 'Gold',
      [
        { image: 'casareal.png', alt: '株式会社カサレアル', url: '' },
        { image: 'microsoft.png', alt: '日本マイクロソフト株式会社', url: '' },
        { image: 'line.png', alt: 'LINE株式会社', url: '' },
        // { image: 'gmo_internet.png', alt: 'GMOインターネット株式会社', url: '' },
        // { image: 'recruit.png', alt: '株式会社リクルート', url: '' },
        // { image: 'azul_systems.png', alt: 'Azul Systems', url: '' },
        { image: 'jfrog.png', alt: 'JFrog', url: '' },
        { image: 'techmatrix.png', alt: 'テクマトリックス株式会社', url: '' },
        { image: 'ulsystems.png', alt: 'ウルシステムズ株式会社', url: '' },
        { image: 'redhat.png', alt: 'レッドハット株式会社', url: '' },
      ]
    ],
    [
      'Silver',
      [
        { image: 'rakusu.png', alt: '株式会社ラクス', url: '' },
        { image: 'softbank.png', alt: 'ソフトバンク株式会社', url: '' },
        { image: 'm3.png', alt: 'エムスリー株式会社', url: '' }
      ]
    ]
  ]
);
