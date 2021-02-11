import React from 'react'

export type SponsorProps = {
  image: string,
  alt: string,
  url: string,
};

const Sponsor: React.FC<Array<SponsorProps>> = (sponsors: Array<SponsorProps>) => (
  <div className='columns is-multiline is-mobile'>
    {sponsors.map(sponsor => (
      <div key={sponsor.image} className='column is-half-mobile is-one-quarter-desktop' style={{ borderRadius: '5px' }}>
        <div>
          <a href={sponsor.url} target="_blank" rel="noopener noreferrer"><img alt={sponsor.alt} src={sponsor.image}/></a>
        </div>
      </div>
    ))}
  </div>
);

export default Sponsor
