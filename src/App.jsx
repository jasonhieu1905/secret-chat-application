import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  const checkIfHasAnyGroupChat = (chats) => {
    if (chats.length === 0) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <ChatEngine
      projectID="1988cb47-faed-40c3-880d-4d66834ac1ab"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      onGetChats={(chats) => checkIfHasAnyGroupChat(chats)}
      height="100vh"
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
    />
  );
}

export default App;
