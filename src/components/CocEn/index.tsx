import React from 'react';
import { CONTACT } from '../../constant';

const CocEn = () => (
  <div>
    <p>
      All attendees, speakers, sponsors, and volunteers at JJUG CCC online are required to agree with the following code of conduct.
      <br />
      Japan Java User Group (JJUG) will enforce this code throughout the event.
    </p>
    <p>
      Participants asked to stop any harassing behavior are expected to comply immediately.
      <br />
      Harassment includes offensive verbal comments related to gender, race, physical appearance, stalking, or any behaviors of an offensive nature.
      <br/>
      If a participant engages in harassing behavior, JJUG may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.
    </p>
    <p>If you are being harassed, notice somebody else is being harassed, or have any other concerns, please contact a member of JJUG staff immediately.</p>
    <ul>
      <li>Email: {CONTACT.email}</li>
      <li>Web Form: <a href={CONTACT.cocForm} target="_blank" rel="noopener noreferrer">{CONTACT.cocForm}</a></li>
    </ul>
    <p>JJUG will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event.</p>
    <p>We value your attendance.</p>
  </div>
);

export default CocEn;
