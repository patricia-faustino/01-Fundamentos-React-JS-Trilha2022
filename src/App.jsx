import { Header } from "./components/Header";
import { Post } from "./Post";
import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Patricia Faustino"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Post
        author="Fernandinha Silva"
        content="Dia bacana, dia legal"
      />
    </div>
  );
}

export default App;
