import React from 'react';

const LocationMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15553.888370957551!2d77.56681!3d12.941615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e34d2f%3A0x5f4adbdbab8bd80f!2sBMS%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1761149062664!5m2!1sen!2sin" // This is the updated link
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default LocationMap;
