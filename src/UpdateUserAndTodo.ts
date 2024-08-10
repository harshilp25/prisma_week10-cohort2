import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Todo = {
  title?: string;
  description?: string;
  completed?: boolean;
  id: number;
};

const UpdateTodo = async ({
  title,
  description,
  completed,
  id,
}: Todo): Promise<void> => {
  const response = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      completed,
    },
  });
  console.log(response);
};

UpdateTodo({
  id: 2,
  title: " uodated todo of id 2 ",
  description: " enjoy buddy updated old todo ",
  completed: true,
});
