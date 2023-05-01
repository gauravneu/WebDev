import React, { useState } from 'react';
import '../static/css/Accordion.css'
function Accordion() {


  const [showInstagram, setShowInstagram] = useState(false);
  const [showNationality, setShowNationality] = useState(false);

  const toggleInstagramSection = () => {
    setShowInstagram(!showInstagram);
    setShowNationality(false);
  };

  const toggleNationalitySection = () => {
    setShowNationality(!showNationality);
    setShowInstagram(false);
  };

  return (
    <div className="accordion__container">
      <div className='accordion__title'>Know Me Better</div>
      <div className="accordion__header" onClick={toggleInstagramSection} aria-label={`Click here to check Gaurav's Instagram`}>
        <h3>Instagram</h3>
        {showInstagram && (
          <div className="accordion__content">
            <p>📷 @gauravxi</p>
          </div>
        )}
      </div>
      <div className="accordion__header" onClick={toggleNationalitySection} aria-label={`Click here to check Gaurav's Nationality`}>
        <h3>Nationality</h3>
        {showNationality && (
          <div className="accordion__content">
            <p>🇮🇳 Indian</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;