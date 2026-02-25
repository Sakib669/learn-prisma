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
  const { page = 1, limit = 1 } = req.query;

  if (page <= 0) {
    page = 1;
  }

  if (limit <= 0 || limit >= 100) {
    limit = 10;
  }

  // count skips
  const skip = (page - 1) * limit;

  const movies = await prisma.movie.findMany({
    take: limit,
    skip: skip,
    include: {
      cast: {
        select: {
          name: true,
          description: true,
        },
      },
    },
  });

  const totalMovies = await prisma.movie.count();
  const totalPages = Math.ceil(totalMovies / limit);

  return res.json({
    status: 200,
    movies,
    metadata: {
      totalPages,
      currentPage: page,
      currentLimit: limit,
    },
  });
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
export const destroy = async (req, res) => {
  const { id } = req.params;

  const deleted = await prisma.movie.delete({
    where: {
      id: id,
    },
  });

  return res.json({
    status: 200,
    message: "movie deleted successfully !",
    deleted,
  });
};

// search movie
export const search = async (req, res) => {
  const query = req.query.q;
  const movies = await prisma.movie.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });

  return res.json({ status: 200, movies });
};
