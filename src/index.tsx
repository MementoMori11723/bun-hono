import { elements, Hono, Home, About, Blog, Test, NotFound } from "./imports";

const app = new Hono();

app.get("/", (c) => c.html(<Home />));
app.get("/about", (c) => c.html(<About />));
app.get("/blog", (c) => c.html(<Blog />));
app.get("/test", (c) => c.html(<Test />));
app.notFound((c) => c.html(<NotFound />));

export default {
  port: process.env.PORT || 5000,
  fetch: app.fetch,
};
