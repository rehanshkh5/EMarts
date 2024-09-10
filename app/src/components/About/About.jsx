import styled from "styled-components";
import { medium, tablet } from "../../utils/responsive";

const Container = styled.div`
  padding: 4rem 3rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: #fae6fa;

  ${tablet({
    flexDirection: "column-reverse",
  })}
`;

const Info = styled.div`
  flex: 2;
  font-weight: 400;
`;

const Image = styled.img`
  flex: 1;
  border-radius: 7px;
  height: 300px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  ${tablet({
    width: "500px",
  })}

  ${medium({
    width: "300px",
  })}
`;

const Title = styled.h2`
  color: black;
  text-transform: uppercase;

  ${tablet({
    textAlign: "center",
  })}
`;

const Text = styled.p`
  text-align: justify;
  color: #572064;
`;
const About = () => {
  return (
    <Container>
      <Info>
        <Title>Everything, Everychoice , all at once</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          blanditiis voluptas harum placeat cum praesentium nisi quo optio
          nostrum dolores. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fuga, officia. Deleniti, ad iure? Eius mollitia harum in
          doloremque atque sed.
        </Text>
      </Info>
      <Image
        src="https://images.pexels.com/photos/6214388/pexels-photo-6214388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="About-image"
      />
    </Container>
  );
};

export default About;
