import { AlertProps } from "@mui/material";

export interface AlertItemType {
    id: string;
    message: string;
    variant?: AlertProps["variant"];
    severity?: AlertProps["severity"];
    duration?: number;
    action?: {
      label: string;
      onClick: () => void;
    },
  }