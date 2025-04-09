import styled from "styled-components";
const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 4rem;
  padding: 2rem 0;
`;
const Card = styled.a`
  border: 2px solid;
  width: 100%;
  height: 144px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg,  rgba(19, 237, 41, 0.05), rgba(19, 237, 41, 0.15) );
transition: 0.3s ease-in-out;
box-shadow: 0 0 22px 2px  rgba(19, 237, 41, 0.05);

&:hover{
  transform: scale(1.02);
  box-shadow: 0 0 22px 2px  rgba(19, 237, 41, 0.22);
}
`;
const CardImage = styled.img`
width: 71%;
height: auto;
object-fit: cover;
`;

export const LinkSection = () => {
  return (
    <Container id="links">
      <Card href="https://fourcoders.com/" target="_blank" data-aos="fade-left" data-aos-duration="600">
        <CardImage src="images/10.png"/>
      </Card>
      <Card  href="https://wa.me/+5511964046267?text=oii%20vimpelo%20seu%20agregador%20de%20links%20do%20instagram%20e%20quero%20saber%20masis" data-aos="fade-right" data-aos-duration="600">
        <CardImage src="images/11.png" />
      </Card>
      <Card href="http://linkedin.com/in/luiz-antonio-7ab005215/" data-aos="fade-left" data-aos-duration="600">
        <CardImage src="images/12.png" />
      </Card>
    </Container>
  );
};
