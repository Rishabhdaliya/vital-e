import { BlogsAll } from "@/components/Blogs/BlogsAll";
import { Layout } from "@/components/Layout/Layout";
import React from "react";

const index = () => {
  return (
    <div>
      <Layout>
        <div className="mt-10 sm:mt-0">
          <BlogsAll />
        </div>
      </Layout>
    </div>
  );
};

export default index;
