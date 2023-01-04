import React from "react";
import { useSession } from "next-auth/react";
import Status from "../components/homepage/status";
import LoginPrompt from "./loginprompt";

const Home = () => {
  const { data: session } = useSession();
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const imgClass = "py-2";

  if (session) {
    return (
      <>
        <Status session={session} />
      </>
    );
  } else {
    return <LoginPrompt />;
  }
};

export default Home;
