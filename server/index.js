const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const Document = require("./models/Document");
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to the database successfully");
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });

const DefaultValue = "";

const io = require("socket.io")(process.env.PORT || 3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("get-doc", async (id) => {
    const document = await findOrCreateDocument(id);
    socket.join(id);
    socket.emit("load-doc", document.data);

    socket.on("send-changes", (delta) => {
      socket.broadcast.to(id).emit("receive-changes", delta);
    });
    socket.on("save-doc", async (data) => {
      await Document.findByIdAndUpdate(id, { data });
    });
  });
});

async function findOrCreateDocument(id) {
  if (id == null) return;
  const document = await Document.findById(id);
  if (document) return document;
  return Document.create({ _id: id, data: DefaultValue });
}
