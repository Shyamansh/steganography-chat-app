import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './../components/ChatFeed';
import LoginForm from './../components/LoginForm';
import './Chat.css';

const projectID = '1fe988a6-5ebf-4697-bc89-c7215dd65811';

function handleLogout() {
  localStorage.clear();
  window.location.reload();
}

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">STEGANO CHAT</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>

      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
};

export default Chat;
