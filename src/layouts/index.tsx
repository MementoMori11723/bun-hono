import { elements } from "../imports";
const Layouts = ({ children }: elements.Children) => {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A bun hono app" />
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
    ></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Hono App</title>
  </head>
  <body>
    ${children}
  </body>
  </html>`;
};

export default Layouts;
