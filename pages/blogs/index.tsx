import { BlogsAll } from "@/components/Blogs/BlogsAll";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

const index = () => {
  return (
    <div>
      <Layout>
        <BlogsAll />
      </Layout>
    </div>
  );
};

export default index;
