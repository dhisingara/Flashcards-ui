// ** MUI Imports
import IconButton from "@mui/material/IconButton";

// ** Icon Imports
import Icon from "../../../components/icon";

// ** Types Import
import { Mode } from "../../types";
import { Settings } from "../../../context/settingsContext";

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const ModeToggler = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props;

  const handleModeChange = (mode: Mode) => {
    saveSettings({ ...settings, mode: mode });
  };

  const handleModeToggle = () => {
    if (settings.mode === "light") {
      handleModeChange("dark" as Mode);
    } else {
      handleModeChange("light" as Mode);
    }
  };

  return (
    <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
      <Icon
        fontSize="1.5rem"
        icon={settings.mode === "dark" ? "tabler:sun" : "tabler:moon-stars"}
      />
    </IconButton>
  );
};

export default ModeToggler;
