import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { NextPage } from "next/types";

interface Props {
  data: string;
}

const Blog: NextPage<Props> = ({ data }) => {
  return <h1>Blog page - {data}</h1>;
};
export default Blog;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log("session:", session);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? "List of 100 personalized blogs" : "list of free blogs",
    },
  };
};
