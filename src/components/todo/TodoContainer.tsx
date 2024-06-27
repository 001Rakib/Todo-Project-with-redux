import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between my-2">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {todos.length ? (
          <div className="bg-white w-full h-full rounded-lg p-5 space-y-3">
            {todos.map((item) => (
              <TodoCard
                key={item.id}
                id={item.id}
                title={item.task}
                isCompleted={item.isCompleted}
                description={item.description}
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
