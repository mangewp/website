import Card from '../components/Card';
import myImage from '../assets/card.png';

function Projects() {
  return (
    <div className="cards-container" style={{ minHeight: '100vh' }}>
      <Card
        image={myImage}
        text="Cribbage"
        link="https://github.com/mangewp"
      />
    </div>
  )
}

export default Projects;