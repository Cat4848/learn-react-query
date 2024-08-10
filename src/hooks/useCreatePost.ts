import { useMutation, useQueryClient } from "@tanstack/react-query";
import Post from "@/lib/types/Post";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (post: Post) => createPost(post),
    onMutate: () => console.log("mutate"),
    onError: () => console.log("error"),
    onSuccess: () => console.log("success"),
    onSettled: async (_, error) => {
      if (error) console.log(error);
      else await queryClient.invalidateQueries({ queryKey: ["all-posts"] });
    }
  });
}

async function createPost(post: Post) {
  const req = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    method: "POST",
    body: JSON.stringify(post)
  });
}
