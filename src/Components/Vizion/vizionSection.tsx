
import styled from 'styled-components'
export const VizionSection = () => {
  return (
    <Container>
      <Infos>
        <Title data-aos="fade-right" data-aos-duration="600">
          Da visão à <strong>execução</strong>
        </Title>
        <SubTitle data-aos="fade-up-right" data-aos-duration="600">
        Sou <strong>Luuiz Developer</strong>, desenvolvedor fMobile/Low-Code e CEO da Four Coders. Minha missão é transformar conceitos em soluções digitais de alto desempenho.
        </SubTitle>
        <Button href='#links' data-aos="fade-up-right" data-aos-duration="600">
        Saiba Mais <img src="/icons/arrowDown.svg" alt="ícone de seta para baixo" />
        </Button>
      </Infos>

      <Image src='images/light.png'/>


    </Container>
  )
}

const Container = styled.section`
  min-height: 30vh;
  display: flex;
  position: relative;
  z-index: 1;
  padding: 2rem 0;
`;

const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.h2`
  font-size: 3.8rem;
  margin: 0;
  line-height: .8;
  letter-spacing: -1.1px;
  padding: 0;
  font-weight: 500;
  strong{
    font-weight: bolder !important;
  }
`;
const SubTitle = styled.p`
  font-size: 1.9rem;
  margin: 0;
  line-height: .9;
  padding: 0;
  color: ${(props) => props.theme.colors.gray500};
  font-weight: 300;
  padding: 0 2rem 0 0;
`;
const Button = styled.a`
all: unset;
  width: 50%;
  padding: 1rem 2rem;
  border: 1px solid;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bold;
  background-color: rgba(19, 237, 41, 0.05);
  transition: 0.3s ease ;
  img{
    width: 2.2rem;
    height: 2.2rem;
  }
  &:hover{
    transform: scale(1.02);
    box-shadow: 0 0 11px 2px rgba(19, 237, 41, 0.11);
  }
  @media screen and (min-width: 420px){
    padding: 1rem 0;
    font-size: 2rem;
    width: 50%;
  }
`;

const Image = styled.img`
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 359px){
    height: 210px;
    bottom: -44px;
    right: -55px;
  }
  @media screen and (min-width: 360px) and (max-width: 380px) {
    height: 244px;
    bottom: -82px;
    right: -78px;
  }

  @media screen and (min-width: 381px) and (max-width: 420px) {
    height: 244px;
    bottom: -79px;
    right: -55px;
  
  }

  @media screen and (min-width: 421px) and (max-width: 500px) {
    height: 311px;
    bottom: -155px;
    right: -81px;
  }
  @media screen and (min-width: 500px) and (max-width: 700px) {
    height: 411px;
    bottom: -111px;
    right: -81px;
  }

`;