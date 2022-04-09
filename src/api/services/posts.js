import { HttpClient } from "../HttpClient";

class PostsService extends HttpClient {
  constructor() {
    super("https://624f66218c5bf4a1054a4a6b.mockapi.io");
  }

  getAllPosts() {
    return this.get("posts");
  }
  createPost(body) {
    return this.post("posts", body);
  }
  updatePost(id, body) {
    return this.put("posts", body, id);
  }
  deletePost(id) {
    return this.delete("posts", id);
  }
}

export const postsService = new PostsService();
