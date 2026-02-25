import prisma from "../DB/db.config.js";

export const store = async (req, res) => {
  const { name, movie_id, description } = req.body;
  const cast = await prisma.cast.create({
    data: {
      name,
      movieId :movie_id,
      description
    },
  });

  return res.json({ status: 200, cast, message: "cast added successfully" });
};

export const index = async (req, res) => {
  const casts = await prisma.cast.findMany({
    include:{
      movie: true
    }
  });

  return res.json({ status: 200, casts });
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { name, movie_id, description } = req.body;

  const updated = await prisma.cast.update({
    data: {
      name,
      description,
      movieId: movie_id
    },
    where: {
      id: id,
    },
  });

  return res.json({
    status: 200,
    message: "cast updated successfully !",
    updated,
  });
};
export const destroy = async (req, res) => {
  const { id } = req.params;

  const deleted = await prisma.cast.delete({
    where: {
      id: id,
    },
  });

  return res.json({
    status: 200,
    message: "cast deleted successfully !",
    deleted,
  });
};
