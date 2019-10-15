import { renderToNodeStream } from "react-dom/server";

const render = component => {
  return new Promise((resolve, reject) => {
    const body = [];
    const bodyStream = renderToNodeStream(component);
    bodyStream.on("data", chunk => {
      body.push(chunk.toString());
    });
    bodyStream.on("error", err => {
      reject(err);
    });
    bodyStream.on("end", () => {
      resolve(body.join(""));
    });
  });
};

export default render;
