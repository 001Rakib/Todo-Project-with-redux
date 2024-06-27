import Container from "@/components/Container";
import TodoContainer from "@/components/todo/TodoContainer";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center text-3xl font-semibold py-5">My Todo's</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
