import React from 'react';
import { SPONSORS } from './constant';

export type SponsorProps = {
  sponsorType: SponsorType,
};

export type SponsorLogoProps = {
  image: string,
  alt: string,
  url: string,
};

export type SponsorType = 'Gold' | 'Silver';

const Sponsor: React.FC<SponsorProps> = ({sponsorType}) => {
  const sponsors = SPONSORS.get(sponsorType);
  if (sponsors === undefined) {
    return (<div className="columns is-multiline is-mobile"/>);
  }

  return (
    <div className="columns is-multiline is-mobile">
      {
        sponsors.map(
          sponsor =>
            <div key={sponsor.image} className="column is-half-mobile is-one-fifth-desktop" style={{ borderRadius: '5px' }}>
              <figure className="image is-128x128">
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                  <img alt={sponsor.alt} src={'/static/images/sponsor/' + sponsor.image}/>
                </a>
              </figure>
            </div>
        )
      }
    </div>
  );
};

export default Sponsor;
