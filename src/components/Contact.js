import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Phone, VideoCamera, X } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../redux/slices/app";
import { faker } from "@faker-js/faker";

function Contact() {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              height: "100%",
              p: 2,
            }}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={3}
        >
          <Stack slignItems={"center"} direction={"row"} spacing={2}>
            <Avatar
              src="https://i.pravatar.cc/300"
              alt={faker.name.firstName}
              sx={{ height: 64, width: 64 }}
            />
            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                {"+91 9876543210"}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
            <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                    <Phone />
                </IconButton>
                <Typography variant = "overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={"center"}>
                <IconButton>
                    <VideoCamera />
                </IconButton>
                <Typography variant = "overline">Video</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Contact;
