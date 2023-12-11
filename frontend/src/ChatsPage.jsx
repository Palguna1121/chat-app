import { MultiChatWindow, MultiChatSocket, useMultiChatLogic } from "react-chat-engine-advanced";

import React from "react";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic("60567a86-938f-406f-b9cc-3d727b5bcc41", props.user.username, props.user.secret);
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
};

export default ChatsPage;
