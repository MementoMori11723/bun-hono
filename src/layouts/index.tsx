import { elements } from "../imports";

const Layouts = ({ children }: elements.Children) => {
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="A bun hono app" />
    <title>Document</title>
  </head>
  <body>
    ${children}
  </body>
  </html>`;
};

export default Layouts;
