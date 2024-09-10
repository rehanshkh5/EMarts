import {
  faFacebookSquare,
  faLinkedin,
  faSquareInstagram,
  faSquarePinterest,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { mobile } from "../../utils/responsive";

const Container = styled.footer`
  background-color: #572064;
  color: #ffff;
`;

const Top = styled.div`
  padding: 1rem 0;
  margin: auto;
  display: flex;
  align-items: start;
  justify-content: center;

  ${mobile({ flexDirection: "column", alignItems: "center", gap: "1rem" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  ${mobile({
    paddingBottom: "10px",
    width: "100%",
    borderBottom: "1px solid white",
  })}
`;

const Image = styled.img`
  width: 120px;
  border-radius: 7px;
  cursor: pointer;
  border: 2px solid white;
`;

const Desc = styled.p`
  padding: 1rem;
  text-align: justify;
`;

const Center = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  ${mobile({ borderBottom: "1px solid white", paddingBottom: "10px" })}
`;

const Categorylinks = styled.p`
  margin-top: 10px;
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    text-decoration: underline;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

const SubscribeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Heading = styled.h3`
  color: white;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px 7px;
  color: #572064;
  font-family: inherit;
`;

const Button = styled.button`
  background-color: white;
  text-transform: uppercase;
  color: #572064;
  border-radius: 7px;
  border: none;
  cursor: pointer;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Bottom = styled.div`
  font-weight: 500;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-top: 1px solid white;
`;

const Footer = () => {
  return (
    <Container>
      <Top>
        <Left>
          <Image src="https://i.ibb.co/FhmM4wC/e-bazaar-logo.png" alt="logo" />
          <Categorylinks>About</Categorylinks>
          <Categorylinks>FAQ</Categorylinks>
          <Categorylinks>Careers</Categorylinks>
        </Left>
        <Center>
          <Heading>Shop</Heading>
          <Categorylinks>mens</Categorylinks>
          <Categorylinks>womens</Categorylinks>
          <Categorylinks>children</Categorylinks>
        </Center>
        <Right>
          <SubscribeBox>
            <Heading>Newsletter</Heading>
            <Input placeholder="Enter Email"></Input>
            <Button>Subscribe</Button>
          </SubscribeBox>
          <SocialContainer>
            <SocialIcon>
              <FontAwesomeIcon icon={faFacebookSquare} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faSquareInstagram} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faLinkedin} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faSquareXTwitter} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faSquarePinterest} />
            </SocialIcon>
          </SocialContainer>
        </Right>
      </Top>
      <Bottom>&copy; 2023 E-Bazaar, Inc. All Rights Reserved</Bottom>
    </Container>
  );
};

export default Footer;
