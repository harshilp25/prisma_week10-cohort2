import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteUser(id: number): Promise<void> {
  try {
    const response = await prisma.user.delete({
      where: {
        id,
      },
    });
    console.log(response);
  } catch (error: any) {
    console.error("error at deleteUser " + error.message);
  }
}

async function deleteTodos(userId: number): Promise<void> {
  try {
    const response = await prisma.todo.deleteMany({
      where: {
        userId,
      },
    });
    console.log(response);
  } catch (error: any) {
    console.error("error at deleteTodos " + error.message);
  }
}

deleteTodos(1);
deleteUser(1);
