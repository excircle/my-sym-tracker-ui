import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { signIn } from "next-auth/react";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Powered By "}
      <Link color="inherit" href="https://mui.com/">
        Google
      </Link>{" "}
    </Typography>
  );
}

const theme = createTheme();

export default function NewSignIn() {
  const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded text-center";
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            You Are Not Signed In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item></Grid>
            </Grid>
            <div className="pt-2">
              <button className={buttonClass} onClick={() => signIn()}>
                Login With Google
              </button>
            </div>
          </Box>
        </Box>
        <Copyright sx={{ mt: 3, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
