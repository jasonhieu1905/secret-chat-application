import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  const currentUser = localStorage.getItem("username");
  if (!currentUser) return <LoginForm />;

  const checkIfHasAnyGroupChat = (chats) => {
    if (chats.length === 0) {
      localStorage.clear();
      window.location.reload();
    }
  };

  const checkNotification = (chatId, message) => {
    if (message.sender_username !== currentUser) {
      const audio = new Audio('https://drive.google.com/file/d/169fMntkoGQxIfReF163sy6E4HLIPpOnk/view?usp=sharing');
      audio.play();
    }
  }

  return (
    <ChatEngine
      projectID="1988cb47-faed-40c3-880d-4d66834ac1ab"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      onGetChats={(chats) => checkIfHasAnyGroupChat(chats)}
      height="100vh"
      renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
      onNewMessage={(chatId, message) => checkNotification(chatId, message)}
    />
  );
}

export default App;
