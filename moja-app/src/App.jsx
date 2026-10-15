import Header from './components/Header.jsx';
import ParticipantCard from './components/ParticipantCard.jsx';
import participantsData from './components/participantsData.js';

export default function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header />
      {participantsData.map((participant) => (
        <ParticipantCard key={participant.id} participant={participant} />
      ))}
    </div>
  );
}