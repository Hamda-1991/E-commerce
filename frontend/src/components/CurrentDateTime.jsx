import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const CurrentDateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  const days = formatTimeUnit(currentTime.getDate());
  const hours = formatTimeUnit(currentTime.getHours());
  const minutes = formatTimeUnit(currentTime.getMinutes());
  const seconds = formatTimeUnit(currentTime.getSeconds());

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="20px"
      p={2}
      color="rgba(0, 0, 0, 1)"
    >
      <Box textAlign="center">
        <Typography variant="h6" component="div">
          Days
        </Typography>
        <Typography variant="h4" component="div">
          {days} :
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h6" component="div">
          Hours
        </Typography>
        <Typography variant="h4" component="div">
          {hours} :
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h6" component="div">
          Minutes
        </Typography>
        <Typography variant="h4" component="div">
          {minutes} :
        </Typography>
      </Box>
      <Box textAlign="center">
        <Typography variant="h6" component="div">
          Seconds
        </Typography>
        <Typography variant="h4" component="div">
          {seconds}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentDateTime;
