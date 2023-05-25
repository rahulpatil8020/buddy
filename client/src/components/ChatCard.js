import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { alpha } from "@mui/material";
const ChatCard = ({ adventure }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.2),
        marginTop: 2,
        width: "100%",
      }}
    >
      <CardActionArea>
        <CardContent
          //   sx={{
          //     marginX: 1,
          //   }}
          onClick={() => console.log("Clicked")}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Avatar>
              {adventure?.title?.split(" ")[0][0]}
              {adventure?.title?.split(" ")[1][0]}
            </Avatar>
            <Box
              sx={{
                marginLeft: 1,
                display: "block",
                overflow: "hidden",
              }}
            >
              <Typography noWrap variant={"h6"}>
                {adventure?.title}
              </Typography>
              {/* <Typography noWrap>
            {user?.userId === postData?.createdBy
              ? "creator"
              : "participant"}
          </Typography> */}
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ChatCard;
