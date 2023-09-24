import styled from "styled-components";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/video/${type}`);
      setVideos(res.data);
      console.log(res.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card video={video} key={video._id} />

        //if u r using map, u hv to give a unique key for each item.
      ))}
    </Container>
  );
};
