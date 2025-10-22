const LocationMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.468762520862!2d77.5633448758156!3d12.941833087368037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158b11e445c5%3A0x247651a70335f2b!2sB.M.S.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1729448404838!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true} // Fixed: allowFullScreen (camelCase)
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Fixed: referrerPolicy (camelCase)
      ></iframe>
    </div>
  );
};

export default LocationMap;
