import { useLoaderData } from "react-router-dom";

const Users = () => {
  const signUpUsers = useLoaderData();
  return <div>total users: {signUpUsers.length}</div>;
};

export default Users;
