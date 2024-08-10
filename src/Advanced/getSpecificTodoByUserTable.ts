// USE CASES OF THE SELEC AND INCLUDE STATMENTS

// INCLUDE --->  This is used when you want to retrieve related data from other models that are connected via relationships. If your model has a relation to another model (like a Post model having a reference to an Author model), and you want to include the related data in the query result, you use include.

// SELECT ---> is used when you wanna select the fields or properties from your own table then you use select statement :)

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getSpecificTodoByUserTable(id: number): Promise<void> {
  const response = await prisma.user.findMany({
    where: {
      id,
    },

    // you cna use either include or select
    // include is used to Choose, which related nodes to fetch as well
    include: {
      todos: {
        // where is used when you wann fetch the data or documetns or the basis of somethings in this case its completed inside the todos of particular user :)
        where: {
          completed: false,
        },
      },
    },
  });
  for (let res of response) {
    if (res.todos) {
      res.todos.forEach((todo) => console.log(todo));
    }
  }
}

getSpecificTodoByUserTable(3);
