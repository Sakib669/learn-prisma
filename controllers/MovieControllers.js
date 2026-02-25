import prisma from "../DB/db.config.js";

export const store = async (req, res) => {
  const { name } = req.body;
  const movie = await prisma.movie.create({
    data: {
      name,
    },
  });

  return res.json({ status: 200, movie, message: "movie added successfully" });
};
