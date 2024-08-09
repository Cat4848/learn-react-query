"use client";

import { useQuery } from "@tanstack/react-query";
import { useAllPosts } from "@/hooks/useAllPosts";

export default function Posts() {
  const allPosts = await useAllPosts();

  if (allPosts.isPending) return <p>Loading ...</p>;

  if (allPosts.error)
    return <p>{"An error has occurred: " + allPosts.error.message}</p>;

  return (
    <div>
      <h1>All Posts</h1>

      {allPosts.data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
