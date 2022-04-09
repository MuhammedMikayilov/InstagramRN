import { HttpClient } from "../HttpClient";

class DirectService extends HttpClient {
  constructor() {
    super("https://624f66218c5bf4a1054a4a6b.mockapi.io");
  }

  getAllDirects() {
    return this.get("chattings");
  }
}

export const directsService = new DirectService();
