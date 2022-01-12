import express from 'express';

const app = express()
app.use(express.json());

app.get("/", (request, response) => {
  return response.json({
    message: "SERVER IS RUNNING!",
  });
});

app.listen(3000, () => console.log("SERVER IS RUNNING!"))

