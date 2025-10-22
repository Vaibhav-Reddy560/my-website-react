import React, { useState } from 'react'; // This line is required

// Define a type for our schedule items to allow for JSX in titles
interface ScheduleItem {
  id?: string;
  time: string;
  title: string | JSX.Element;
  details?: string;
}

// --- Schedule Data ---
const day1Schedule: ScheduleItem[] = [
  { time: '9:00 AM - 9:30 AM', title: 'Registration' },
  { time: '9:30 AM - 10:00 AM', title: 'Inauguration and Welcome address' },
  {
    id: 'keynote1',
    time: '10:00 AM - 10:30 AM',
    title: <>Keynote Talk 1:{' '}<span className="quote-normal">Technology as a Catalyst for Change – Innovating with Purpose</span></>,
    details: 'Dive into the world of AI Ethics with our first speaker, who will discuss the challenges and opportunities in creating responsible AI systems for a better future.'
  },
  {
    id: 'keynote2',
    time: '10:30 AM - 11:00 AM',
    title: <>Keynote Talk 2:{' '}<span className="quote-normal">The Role of Youth in Driving Tech-Driven Social Impact</span></>,
    details: 'Our second keynote focuses on leveraging blockchain technology for transparent supply chains and its impact on global social good initiatives.'
  },
  { time: '11:00 AM - 11:15 AM', title: 'Tea Break' },
  {
    id: 'ideacraft',
    time: '11:15 AM - 12:30 PM',
    title: <>IdeaCraft:{' '}<span className="quote-normal">It All Starts With a ‘What If?’</span></>,
    details: 'An interactive workshop where participants will learn brainstorming techniques to transform nascent ideas into actionable, tech-for-good project concepts.'
  },
  { time: '12:30 PM - 1:00 PM', title: 'Ice Breaking Session' },
  { time: '1:00 PM - 2:00 PM', title: 'Lunch and Networking Session' },
  { id: 'panel', time: '2:00 PM - 3:00 PM', title: 'Panel Discussion', details: 'Industry leaders discuss the role of corporate social responsibility in the tech sector and how companies can drive meaningful change.' },
  { id: 'benefits', time: '3:00 PM - 3:30 PM', title: 'Benefits of IEEE membership', details: 'Discover the vast array of resources, networking opportunities, and career development tools available to all IEEE members.' },
  { time: '3:30 PM - 4:00 PM', title: 'Closing Remarks' },
  { time: '4:00 PM - 4:30 PM', title: 'Tea Break' },
  { id: 'hackathon', time: '5:00 PM - 6:00 PM', title: 'Inauguration and Commencement of Hackathon', details: 'The 24-hour hackathon officially begins! Participants will form teams, receive their problem statements, and start building innovative solutions for a better world.' },
  { time: '7:30 PM - 8:30 PM', title: 'Dinner' },
];

const day2Schedule: ScheduleItem[] = [
    { time: '5:00 AM', title: 'Round 1 Submissions' },
    { time: '6:00 AM - 8:00 AM', title: 'First Round Evaluation' },
    { time: '8:00 AM - 9:00 AM', title: 'Breakfast' },
    { time: '9:00 AM', title: 'Announcement of Round 1 Results' },
    { time: '1:00 PM - 2:00 PM', title: 'Lunch' },
    { time: '4:00 PM - 5:00 PM', title: 'Final Round Presentations' },
    { time: '5:00 PM - 6:00 PM', title: 'Results and Closing Ceremony' },
];


const Schedule = () => {
  const [activeTab, setActiveTab] = useState('day1');
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const renderSchedule = (scheduleData: ScheduleItem[]) => {
    return scheduleData.map((item, index) => (
      <div className="schedule-item" key={`${item.time}-${index}`}>
        <div className="schedule-time">{item.time}</div>
        <div className="schedule-details">
          <h4
            onClick={() => item.id && handleToggle(item.id)}
            className={item.id ? 'clickable' : ''}
          >
            {item.title}
            {item.id && <i className={`fas fa-chevron-down toggle-icon ${openItemId === item.id ? 'open' : ''}`}></i>}
          </h4>
          {item.id && openItemId === item.id && (
            <div className="dropdown-content">
              <p>{item.details}</p>
            </div>
          )}
        </div>
      </div>
    ));
  };

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

        <div id="day1" className={`tab-content ${activeTab === 'day1' ? 'active' : ''}`} data-aos="fade-up" data-aos-delay="300">
          {renderSchedule(day1Schedule)}
        </div>
        <div id="day2" className={`tab-content ${activeTab === 'day2' ? 'active' : ''}`} data-aos="fade-up" data-aos-delay="300">
          {renderSchedule(day2Schedule)}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
