import { Typography } from "@material-ui/core";

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <a color="inherit" href="https://upgrad.com/">
          Upgrad's most awesome batch
        </a>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
}