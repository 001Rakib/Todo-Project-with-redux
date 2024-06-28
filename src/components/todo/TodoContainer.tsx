// import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // showing data from local state
  // const { todos } = useAppSelector((state) => state.todos);

  //showing data from server
  const { data: todos, isLoading } = useGetTodosQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between my-2">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {todos?.data.length ? (
          <div className="bg-white w-full h-full rounded-lg p-5 space-y-3">
            {todos?.data.map((item) => (
              <TodoCard
                key={item._id}
                id={item._id}
                title={item.task}
                isCompleted={item.isCompleted}
                description={item.description}
                priority={item.priority}
              ></TodoCard>
            ))}
          </div>
        ) : (
          <div className="bg-blue-200 p-3 text-center rounded-md text-2xl font-semibold">
            {" "}
            <p>There is no task Pending</p>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
