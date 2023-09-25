import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Search = () => {
  const [videos, setVideos] = useState([]);
  const query = useLocation().search; //see the comment below

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/video/search${query}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [query]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

//it is an inbuilt property of the useLocation hook from the React Router library. When you use useLocation() in your React component, it returns a location object that contains various properties, including search, which represents the query stri
//The useLocation Hook: When you import and use the useLocation hook in your React component, it returns a location object that represents the current URL's location. This location object contains information about the URL, such as the pathname, search parameters, hash, and more.

// search Property: The search property is one of the properties available in the location object. It specifically represents the query string portion of the URL. The query string is everything in the URL after the question mark (?), including any key-value pairs separated by ampersands (&).

// For example, if your URL is https://example.com/search?query=react&category=tutorials, then useLocation().search will be "?query=react&category=tutorials".
