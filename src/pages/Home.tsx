import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Container className="d-flex justify-content-center mt-4">
        <Link to="/CameraKit">
          <Button variant="dark" size="lg">
            View our AR lenses
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;
