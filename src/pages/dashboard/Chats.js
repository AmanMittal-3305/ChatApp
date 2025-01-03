import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
// import {faker} from "@faker-js/faker"
// import {SimpleBarStyle} from "../../components/Scrollbar"


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale( 0.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale( 2.4 )",
      opacity: 0,
    },
  },
}));

// const InvisibleScrollbar = styled(Stack)(({ theme }) => ({
//   flexGrow: 1,
//   overflowY: "scroll",
//   height: "100%",
//   /* Custom scrollbar styles */
//   "&::-webkit-scrollbar": {
//     display: "none", // Hide scrollbar for WebKit-based browsers
//   },
//   "&": {
//     scrollbarWidth: "none", // Hide scrollbar for Firefox
//     msOverflowStyle: "none", // Hide scrollbar for IE/Edge
//   },
// }));

const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const theme = useTheme()
  const avatarURL = `https://i.pravatar.cc/300?u=${Math.random()}`;
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:theme.palette.mode === "light"? "#fff" : theme.palette.background.default ,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={avatarURL} />
            </StyledBadge>
          ) : (
            <Avatar src={avatarURL} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0.5, 2),
}));

const SearchIconWrapper = styled("div")(() => ({
  marginRight: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    width: "100%",
  },
}));

function Chats() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: 320,
        backgroundColor:theme.palette.mode === "light"? "#F8FAFF" : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        position: "relative",
      }}
    >
      {/* Chat content */}
      <Stack padding={3} spacing={2} sx = {{height : "100vh"}}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>

        <Stack sx={{ width: "100%", marginTop: 2 }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack spacing= "16px"  direction={"column"} sx = {{flexGrow: 1, overflow : "scroll", height : "100%"}} >
          <SimpleBarStyle timeout={500} clickOnTrack = {false}>
          <Stack spacing={2.4} marginBottom={2}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => {
              return <ChatElement {...el} />;
            })}
          </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
