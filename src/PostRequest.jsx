import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

function PostRequest() {
  const mutation = useMutation({
    mutationFn: () => {
      return axios.post("https://mjsonplaceholder.typicode.com/posts", {
        title: "foo",
        body: "bar",
        userId: 1,
      });
    },
    onSuccess: (data) => console.log(data.data),
    onError: (error) => console.log(error.message),
  });
  const { isPending, mutate } = mutation;
  if (isPending) return <h2>Adding Post...</h2>;

  return (
    <div>
      PostRequest
      <hr />
      <button onClick={() => mutate()}>Add Post</button>
    </div>
  );
}

export default PostRequest;
