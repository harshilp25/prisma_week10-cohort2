import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface User {
  email: string;
  lastname: string;
  password: string;
}

interface Todo {
  title: string;
  description: string;
  completed?: boolean;
  userId: number;
}

const InsertUser = async ({
  // object destructring
  email,
  lastname,
  password,
}: User): Promise<number> => {
  const resposne = await prisma.user.create({
    data: {
      email,
      lastname,
      password,
    },
    select: {
      id: true,
      email: true,
      lastname: true,
    },
  });
  return resposne.id;
};

const InsertTodo = async ({
  title,
  description,
  completed,
  userId,
}: Todo): Promise<void> => {
  const resposne = await prisma.todo.create({
    data: {
      title,
      description,
      completed,
      userId,
    },
    select: {
      userId: true,
      title: true,
      description: true,
      completed: true,
    },
  });
  console.log(resposne);
};

async function callers(): Promise<void> {
  // let user_id: number;

  // user_id = await InsertUser({
  //   email: "harshil12@gmail.com",
  //   lastname: "harshil patel",
  //   password: "harshil123",
  // });

  await InsertTodo({
    title: "lets learn prisma dev and nice hehe",
    description: " is a next - generation orm",
    userId: 3,
  });

  console.log(
    "both queries has been successfully finished and data gets added into your db"
  );
}

callers();
