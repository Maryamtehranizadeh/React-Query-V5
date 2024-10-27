import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function GetRequest() {
  const fetchUsers = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };
  const { data, isPending } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isPending) return <h3>Loading...</h3>;
  console.log(data.data);
  return <div>GetRequest</div>;
}

export default GetRequest;
