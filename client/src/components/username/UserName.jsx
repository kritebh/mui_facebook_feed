import React,{useState} from "react";
import {
  Stack,
  Grid,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
} from "@mui/material";

function UserName({setUsername}) {

    const [newusername,setNewUsername] = useState("")

    // Set New User
    function handleUsername(){
        if(newusername){
            localStorage.setItem("username",newusername.toLowerCase())
            setUsername(localStorage.getItem("username"))
        }
    }


  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh", backgroundColor: "#87ceeb" }}
    >
      <Card sx={{ margin: 5, width: "50%" }}>
        <CardHeader
          title="Choose Username"
          sx={{ textAlign: "center" }}
        ></CardHeader>
        <CardContent>
          <Stack alignItems="center" spacing={2}>
            <TextField
              variant="outlined"
              placeholder="Eg. Your First Name"
              size="small"
              fullWidth
              margin="dense"
              value={newusername}
              onChange={(e)=>{setNewUsername(e.target.value)}}
              helperText="Enter your old username or you can choose a new one"
            />
            <Button variant="contained" sx={{ height: 40,width:"30%" }} onClick={handleUsername}>Submit</Button>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default UserName;
