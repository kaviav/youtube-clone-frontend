import styled from "styled-components";
import image from "../image/log.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://greenhouse.hulu.com/app/uploads/sites/11/FearOfRain_KeyArt_600x338_ProgramTile.jpg" />
        <Details>
          <ChannelImage src={image} />
          <Texts>
            <Title>Test video</Title>
            <ChannelName>WhalePy</ChannelName>
            <Info>3455,678 views • 3 days ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};
