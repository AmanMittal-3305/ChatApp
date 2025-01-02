import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from "./MsgTypes";

function Message() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, index) => {
          switch (el.type) {
            case "divider":
              return <TimeLine key={index} el={el} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el = {el}/>
                case "doc":
                  return <DocMsg el = {el}/>
                case "link":
                  return <LinkMsg el = {el}/>
                case "reply":
                  return <ReplyMsg el = {el}/>
                default:
                  return <TextMsg key={index} el = {el} />
              }
              break;
            default:
              return (
                <TextMsg
                  key={index}
                  el={{ incoming: true, message: "Unknown Message Type" }}
                />
              );
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
