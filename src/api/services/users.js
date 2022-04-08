import { HttpClient } from "../HttpClient";

class UsersService extends HttpClient {
  constructor() {
    super("https://624f66218c5bf4a1054a4a6b.mockapi.io");
  }

  getAllUsers() {
    return this.get("users");
  }
  createUser(body) {
    return this.post("users", body);
  }
  updateUser(id, body) {
    return this.put("users", body, id);
  }
  deleteUser(id) {
    return this.delete("users", id);
  }
}

export const usersService = new UsersService();
