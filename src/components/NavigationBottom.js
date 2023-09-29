import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";

import InfoIcon from "@mui/icons-material/Info";
import MosqueIcon from "@mui/icons-material/Mosque";
import StoreIcon from "@mui/icons-material/Store";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export default function NavigationBottom() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label=" العبادات" icon={<MosqueIcon />} />
          <BottomNavigationAction label="شراء الجوائز" icon={<StoreIcon />} />
          <BottomNavigationAction
            label=" القرآن و التفسير"
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction label="عن المطور" icon={<InfoIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
