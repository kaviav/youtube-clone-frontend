import styled from "styled-components";
import { Comment } from "./Comment";
// import whalepy from "../image/whalepy.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchFailure, fetchStart, fetchSuccess } from "../redux/commentsSlice";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
`;

export const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  // const { currentComments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();

  const [comments, setComments] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      dispatch(fetchStart());
      try {
        const res = await axios.get(`/comment/getall/${videoId}`);
        setComments(res.data);
        dispatch(fetchSuccess(res.data));
      } catch (err) {
        dispatch(fetchFailure());
      }
    };
    fetchComments();
  }, [videoId, dispatch]);

  //TODO: ADD NEW COMMENT FUNCTIONALITY

  const addComment = async () => {
    try {
      const res = await axios.post("/comment/add", {
        description,
        videoId,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    addComment();
  };

  return (
    <Container>
      <NewComment>
        <Avatar src={currentUser.image} />
        <Input
          placeholder="Add a comment..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleAdd}>ADD</Button>
      </NewComment>

      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </Container>
  );
};
