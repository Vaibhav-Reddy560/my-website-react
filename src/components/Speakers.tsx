// In a real app, this data would come from an API
const speakersData = [
  {
    name: 'Dr. Alistair Finch',
    title: 'AI Ethics & Governance Expert',
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    delay: '100'
  },
  {
    name: 'Priya Sharma',
    title: 'Founder, GreenCode Initiative',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    delay: '200'
  },
  {
    name: 'Ben Carter',
    title: 'Lead, Accessibility Engineering @ Innovate Inc.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    delay: '300'
  },
  {
    name: 'Elena Rodriguez',
    title: 'Data Scientist for Social Impact',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    delay: '400'
  }
];

const Speakers = () => {
  return (
    <section id="speakers">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Keynote Speakers</h2>
        <div className="speakers-grid">
          {speakersData.map((speaker) => (
            <div className="speaker-card" data-aos="fade-up" data-aos-delay={speaker.delay} key={speaker.name}>
              <div className="speaker-photo-wrapper">
                <img src={speaker.image} alt={speaker.name} />
                <div className="speaker-socials">
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <h3>{speaker.name}</h3>
              <p>{speaker.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// This was the missing line!
export default Speakers;
