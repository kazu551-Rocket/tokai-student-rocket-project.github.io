import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/" as={Link}>
          <a>
            <img
              src="/images/logo.svg"
              height="46px"
              width="auto"
              alt="Tokai Student Rocket Project"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ps-md-5">
            <Link href="/about" passHref>
              <Nav.Link>ABOUT</Nav.Link>
            </Link>
            <Link href="/rocket" passHref>
              <Nav.Link>ROCKET</Nav.Link>
            </Link>
            <Link href="/project" passHref>
              <Nav.Link>PROJECT</Nav.Link>
            </Link>
            <Link href="/news" passHref>
              <Nav.Link>NEWS</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link>CONTACT</Nav.Link>
            </Link>
            <Link href="/link" passHref>
              <Nav.Link>LINK</Nav.Link>
            </Link>
          </Nav>
          <Navbar.Text className="ms-auto pe-md-5">
            <a
              href="https://twitter.com/Tokai_SRP"
              target="_brank"
              rel="noreferrer noopener"
            >
              <FaTwitter className={styles["react-icon"]} />
            </a>
            <a
              href="https://www.instagram.com/tokai_srp/"
              target="_brank"
              rel="noreferrer noopener"
            >
              <FaInstagram className={styles["react-icon"]} />
            </a>
            <a
              href="https://www.youtube.com/c/TokaiSRP"
              target="_brank"
              rel="noreferrer noopener"
            >
              <FaYoutube className={styles["react-icon"]} />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
