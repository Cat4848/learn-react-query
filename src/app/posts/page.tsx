"use client";

import { useAllPosts } from "@/hooks/useAllPosts";
import { useForm, SubmitHandler } from "react-hook-form";
import Post from "@/lib/types/Post";
import { useCreatePost } from "@/hooks/useCreatePost";

export default function Posts() {
  const allPosts = useAllPosts();
  const { register, handleSubmit } = useForm<Post>();
  const createPostMutation = useCreatePost();

  const handleCreatePostSubmit: SubmitHandler<Post> = (post) =>
    createPostMutation.mutate(post);

  if (allPosts.isPending) return <p>Loading ...</p>;

  if (allPosts.error)
    return <p>{"An error has occurred: " + allPosts.error.message}</p>;

  return (
    <>
      <form onSubmit={handleSubmit(handleCreatePostSubmit)}>
        <h4>New Post</h4>
        <input placeholder="User ID" {...register("userId")} />
        <br />
        <input placeholder="ID" {...register("id")} />
        <br />
        <input placeholder="Title" {...register("title")} />
        <br />
        <input placeholder="Body" {...register("body")} />
        <br />

        <input
          type="submit"
          disabled={createPostMutation.isPending}
          value={createPostMutation.isPending ? "Creating..." : "Create Post"}
        />
      </form>
      <div>
        <h1>All Posts</h1>

        {allPosts.data.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            {/* <p>{post.body}</p>/ */}
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
