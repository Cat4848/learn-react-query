import { useQuery } from "@tanstack/react-query";
import Post from "@/lib/types/Post";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts: Post[] = await response.json();
  return posts;
}

export function useAllPosts() {
  return useQuery({
    queryKey: ["all-posts"],
    queryFn: fetchPosts
  });
}
