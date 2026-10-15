import { useState } from 'react';

const ParticipantCard = ({ participant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isTeacher = participant.role === 'nauczyciel';

  return (
    <div 
      onClick={() => setIsOpen(!isOpen)}
      style={{
        border: '1px solid black',
        backgroundColor: isTeacher ? '#e6f2ff' : 'white',
        padding: '10px',
        margin: '10px 0',
        cursor: 'pointer'
      }}
    >
      <h3>{participant.firstName} {participant.lastName}</h3>
      <p>Role: <strong>{participant.role}</strong></p>
      
      {isOpen && <p style={{ borderTop: '1px solid gray', paddingTop: '5px' }}>{participant.info}</p>}
    </div>
  );
};
export default ParticipantCard;