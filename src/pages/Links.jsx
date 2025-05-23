import Card from '../components/Card';
import myImage from '../assets/github.png';
import myImage2 from '../assets/itch.png';

function Links() {
  return (
    <div className="cards-container" style={{ minHeight: '100vh' }}>
      <Card
        image={myImage}
        text="Github"
        link="https://github.com/mangewp"
      />
      <Card
        image={myImage2}
        text="itch.io"
        link="https://moronicmango.itch.io/"
      />
    </div>
  )
}

export default Links;