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

export const index = async (req, res) => {
  const movies = await prisma.movie.findMany({
    select: {
      name: true,
    },
  });

  return res.json({ status: 200, movies });
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updated = await prisma.movie.update({
    data: {
      name,
    },
    where: {
      id: id,
    },
  });

  return res.json({
    status: 200,
    message: "movie updated successfully !",
    updated,
  });
};
