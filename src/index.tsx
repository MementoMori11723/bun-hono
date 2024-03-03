import { elements, Hono, Home, About, NotFound } from "./imports";

const app = new Hono();

app.get("/", (c) => c.html(<Home />));
app.get("/about", (c) => c.html(<About />));
app.notFound((c) => c.html(<NotFound />));

export default app;
