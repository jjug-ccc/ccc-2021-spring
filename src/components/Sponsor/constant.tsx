import { SponsorLogoProps, SponsorType } from './index';

export const SPONSORS = new Map<
  SponsorType,
  Array<SponsorLogoProps>
>([
    [ 'Gold',
      [
        { image: 'casareal.png', alt: '株式会社カサレアル', url: 'https://www.casareal.co.jp/' },
        { image: 'microsoft.png', alt: '日本マイクロソフト株式会社', url: 'https://azure.microsoft.com/ja-jp/developer/' },
        { image: 'line.png', alt: 'LINE株式会社', url: 'https://engineering.linecorp.com/' },
        { image: 'gmo_internet_group.png', alt: 'GMOインターネットグループ', url: 'https://developers.gmo.jp/' },
        { image: 'recruit.png', alt: '株式会社リクルート', url: 'https://recruit-saiyo.jp/' },
        { image: 'azul_systems.png', alt: 'Azul Systems', url: 'https://jp.azul.com/' },
        { image: 'jfrog.png', alt: 'JFrog', url: 'https://jfrog.co.jp/' },
        { image: 'techmatrix.png', alt: 'テクマトリックス株式会社', url: 'https://www.techmatrix.co.jp/index.html' },
        { image: 'ulsystems.png', alt: 'ウルシステムズ株式会社', url: 'https://www.ulsystems.co.jp' },
        { image: 'redhat.png', alt: 'レッドハット株式会社', url: 'https://www.redhat.com/ja/global/japan' },
      ]
    ],
    [
      'Silver',
      [
        { image: 'rakusu.png', alt: '株式会社ラクス', url: 'https://www.rakus.co.jp/' },
        { image: 'softbank.png', alt: 'ソフトバンク株式会社', url: 'https://recruit.softbank.jp/' },
        { image: 'm3.png', alt: 'エムスリー株式会社', url: 'https://jobs.m3.com/engineer/' }
      ]
    ]
  ]
);
