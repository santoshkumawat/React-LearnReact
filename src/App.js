import "./00-stylesheet/style.css";
import Component from "./01-components/Component";
import HorizontalLine from "./01-components/HorizontalLine";
import JSX from "./02-jsx/JSX";
import ToDoApp from "./03-todo-app/ToDoApp";
import PropsEx from "./04-props/Props";
import HooksEx from "./05-hooks/Hooks";
import Posts from "./06-api/Post";

function App() {
  return (
    <div className='learn-react'>
      <Component />
      <HorizontalLine />

      <JSX />
      <HorizontalLine />

      <ToDoApp />
      <HorizontalLine />

      <PropsEx />
      <HorizontalLine />

      <HooksEx />
      <HorizontalLine />

      <Posts />
      <HorizontalLine />
    </div>
  );
}

export default App;
