import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  styled,
  Switch,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import useSettings from "../../hooks/useSettings";
import Logo from "../../assets/Images/logo.ico";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function SideBar() {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", width: "100vw" }}>
      {/* Sidebar */}
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 100,
        }}
      >
        <Stack alignItems={"center"} spacing={4} sx={{ height: "100%" }}>
          <Stack
            direction="column"
            alignItems={"center"}
            justifyContent="space-between"
            sx={{ height: "100%" }}
          >
            <Stack alignItems={"center"} spacing={4}>
              {/* Logo Section */}
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={Logo} alt="Chat app logo" style={{ width: "80%" }} />
              </Box>

              {/* Navigation Buttons */}
              <Stack
                direction="column"
                alignItems="center"
                spacing={3}
                sx={{ width: "max-content" }}
              >
                {Nav_Buttons.map((el) =>
                  el.index === selected ? (
                    <Box
                      key={el.index}
                      p={1}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5,
                      }}
                    >
                      <IconButton sx={{ width: "max-content", color: "#fff" }}>
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      key={el.index}
                      onClick={() => setSelected(el.index)}
                      sx={{
                        width: "max-content",
                        color:
                          theme.palette.mode === "light"
                            ? "#000"
                            : theme.palette.text.primary,
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  )
                )}
              </Stack>

              {/* Divider */}
              <Divider sx={{ width: "48px" }} />

              {/* Gear Button */}
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }}>
                    <Gear />
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  onClick={() => setSelected(3)}
                >
                  <Gear />
                </IconButton>
              )}
            </Stack>

            {/* Avatar Section */}
            <Stack sx={{ marginTop: "auto", alignItems: "center" }} spacing={4}>
              <AntSwitch onChange={() => onToggleMode()} defaultChecked />
              <Avatar
                id="basic-button"
                aria-controls={open ? "basic-button" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                src="https://i.pravatar.cc/300"
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical : "bottom",
                  horizontal : "right"
                }}
                transformOrigin={{
                  vertical : "bottom",
                  horizontal: "left"
                }}
              >
                <Stack spacing={1} px={1}>
                  {Profile_Menu.map((el) => {
                    return (
                      <MenuItem onClick={handleClick}>
                        <Stack
                          sx={{
                            width: 100,
                          }}
                          direction={"row"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <span>{el.title}</span>
                          {el.icon}
                        </Stack>
                      </MenuItem>
                    );
                  })}
                </Stack>
              </Menu>
            </Stack>
          </Stack>
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, backgroundColor: "#F8F8FF" }}></Box>
    </Box>
  );
}

export default SideBar;
