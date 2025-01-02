import React from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation/index";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

function GeneralApp() {
  const theme = useTheme();
  const {slidebar} = useSelector((store) => store.app);
  return (
    <Stack direction="row" sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%", 
          width: slidebar.open ?  "calc(100vw - 740px)" : "calc(100vw - 420px)", 
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        {/* Conversational */}
        <Conversation />
      </Box>
      {/* Contact */}
      {slidebar.open && <Contact />}
    </Stack>
  );
}

export default GeneralApp;
