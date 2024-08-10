import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getUserDetails = async (userId: number): Promise<void> => {
  const resposne = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      email: true,
      lastname: true,
      todos: true,
    },
  });
  console.log(resposne);
};

const getUserBasedOnEmail = async (email: string): Promise<void> => {
  const response = await prisma.user.findMany({
    where: {
      email,
    },
  });

  console.log(response);
};

getUserDetails(1);
getUserBasedOnEmail("harshil@gmail.com");
