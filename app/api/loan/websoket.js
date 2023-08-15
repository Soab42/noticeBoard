import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import WebSocket from "ws"; // Import WebSocket library

// ... (rest of your code)

export async function GET(request) {
  // ... (existing code)

  const wss = new WebSocket.Server({ noServer: true });

  wss.on("connection", (ws) => {
    console.log("WebSocket connection established");

    // Function to send log messages to UI
    const sendLogToUI = (message) => {
      ws.send(JSON.stringify({ type: "log", message }));
    };

    // Start scraping data and send log messages
    scrapeData(username, password, memberId, sendLogToUI)
      .then((tableData) => {
        if (tableData !== null) {
          console.log("complete collection .. wait for execute...");
          ws.send(JSON.stringify({ type: "data", data: tableData }));
        } else {
          ws.send(
            JSON.stringify({
              type: "error",
              message: "An error occurred while scraping data.",
            })
          );
        }
      })
      .catch((error) => {
        console.error("Error during scraping:", error);
        ws.send(
          JSON.stringify({
            type: "error",
            message: "An error occurred while scraping data.",
          })
        );
      });
  });

  return NextResponse.websocket({
    onConnect: (req) => {
      const socket = wss.handleUpgrade(
        req.raw,
        req.socket,
        Buffer.alloc(0),
        (ws) => {
          wss.emit("connection", ws, req);
        }
      );
      wss.emit("connection", socket, req);
      return socket;
    },
  });
}
const socket = new WebSocket("ws://your-server-url"); // Replace with your server URL

socket.addEventListener("open", (event) => {
  console.log("WebSocket connection opened");

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);

    if (message.type === "log") {
      // Display log messages on the UI
      console.log("Log message:", message.message);
      // Update UI with log messages
      // For example, append messages to a log container
    } else if (message.type === "data") {
      // Handle scraped data received from the server
      console.log("Scraped data:", message.data);
      // Update UI with scraped data
    } else if (message.type === "error") {
      console.error("Error:", message.message);
      // Display error message on the UI
    }
  });
});
