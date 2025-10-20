import React, { useState } from 'react';

const Schedule = () => {
  // 'day1' is the default active tab
  const [activeTab, setActiveTab] = useState('day1');

  return (
    <section id="schedule">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Event Schedule</h2>
        <div className="schedule-tabs" data-aos="fade-up" data-aos-delay="200">
          <button
            className={`tab-btn ${activeTab === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveTab('day1')}
          >
            Day 1 (Nov 8)
          </button>
          <button
            className={`tab-btn ${activeTab === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveTab('day2')}
          >
            Day 2 (Nov 9)
          </button>
        </div>

        {/* Day 1 Content */}
        <div id="day1" className={`tab-content ${activeTab === 'day1' ? 'active' : ''}`} data-aos="fade-up" data-aos-delay="300">
          <div className="schedule-item"><div className="schedule-time">9:00 AM - 9:30 AM</div><div className="schedule-details"><h4>Registration</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">9:30 AM - 10:00 AM</div><div className="schedule-details"><h4>Inauguration and Welcome address</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">10:00 AM - 10:30 AM</div><div className="schedule-details"><h4>Keynote Talk 1</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">10:30 AM - 11:00 AM</div><div className="schedule-details"><h4>Keynote Talk 2</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">11:00 AM - 11:15 AM</div><div className="schedule-details"><h4>Tea Break</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">11:15 AM - 12:30 PM</div><div className="schedule-details"><h4>IdeaCraft: It All Starts With a ‘What If?’</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">12:30 PM - 1:00 PM</div><div className="schedule-details"><h4>Ice Breaking Session</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">1:00 PM - 2:00 PM</div><div className="schedule-details"><h4>Lunch and Networking Session</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">2:00 PM - 3:00 PM</div><div className="schedule-details"><h4>Panel Discussion</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">3:00 PM - 3:30 PM</div><div className="schedule-details"><h4>Benefits of IEEE membership</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">3:30 PM - 4:00 PM</div><div className="schedule-details"><h4>Closing Remarks</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">4:00 PM - 4:30 PM</div><div className="schedule-details"><h4>Tea Break</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">5:00 PM - 6:00 PM</div><div className="schedule-details"><h4>Inauguration and Commencement of Hackathon</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">7:30 PM - 8:30 PM</div><div className="schedule-details"><h4>Dinner</h4></div></div>
        </div>

        {/* Day 2 Content */}
        <div id="day2" className={`tab-content ${activeTab === 'day2' ? 'active' : ''}`} data-aos="fade-up" data-aos-delay="300">
          <div className="schedule-item"><div className="schedule-time">5:00 AM</div><div className="schedule-details"><h4>Round 1 Submissions</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">6:00 AM - 8:00 AM</div><div className="schedule-details"><h4>First Round Evaluation</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">8:00 AM - 9:00 AM</div><div className="schedule-details"><h4>Breakfast</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">9:00 AM</div><div className="schedule-details"><h4>Announcement of Round 1 Results</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">1:00 PM - 2:00 PM</div><div className="schedule-details"><h4>Lunch</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">4:00 PM - 5:00 PM</div><div className="schedule-details"><h4>Final Round Presentations</h4></div></div>
          <div className="schedule-item"><div className="schedule-time">5:00 PM - 6:00 PM</div><div className="schedule-details"><h4>Results and Closing Ceremony</h4></div></div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;