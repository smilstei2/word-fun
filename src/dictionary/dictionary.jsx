import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';




//function searchWord({ setWord }){
  
//   const message = {
//     // required, must be an existing chat id //this has to be from the onclick thing that sets the current chat to what it is
//     username: userName, // required //after create a username - this should be set to that
//     text: title,
//     chatId: currentChat.id,
//   };
//   fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
//     },
//     body: JSON.stringify(message),
//   }).then(console.log("its working"));
// };

// let [searchQuery, setSearchQuery] = useState('');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com',
		'X-RapidAPI-Key': '7d676f781cmsh8806bd263a88d7cp1ee533jsnad42e6e10466'
	}
};



// const [userWord, setUserWord] = useState("");
// let handleSearchChange = (e) => {
//   userWord = setUserWord(e.target.value);

//   fetch('https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=${userWord}', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

// };
const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export function Dictionary() {
  return (

    <div className="dictionary">
      <header className="dictionary-header">
        
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}} id="enterWord" className="Name-div">
        <TextField  id="Enter a word"label="Enter a word" color= "secondary" margin="normal" variant="outlined" />   
        <Button variant="text" ><SearchOutlinedIcon size="large" color="secondary"></SearchOutlinedIcon></Button> 
        {/* onChange={(event) => handleSearchChange(event.target.value)} 
        onClick={() => setWord(userWord)} */}
          <div>
            {" "}
            <br />{" "}
          </div>
        </div>
        
       
        <br />
        <div >
        <Grid 
        container spacing={4} 
        columns={8}        
        direction="row"
        alignItems="center"
        justifyContent="center"
        >
        <div id="Def" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
        <Grid item xs={8}>
        <Item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              
              <Typography  variant="h4">
               Definition:
              </Typography>
              <Typography
                sx={{ fontSize: 48 }}
                color="secondary"
                gutterBottom
              >
                Word
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary"  variant="h5">
                Definition will go here.
              </Typography>
              
            </CardContent>
          </Card>
          </Item>
          </Grid>
        </div>
        <div id="AboutCard" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
        <Grid item xs={8}>
        <Item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              
              <Typography variant="h4">
               Synonyms:
              </Typography>
              <Typography
                sx={{ fontSize: 48  }}
                color="secondary"
                gutterBottom
              >
                Word
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
                Synonyms will go here.
              </Typography>
              
            </CardContent>
          </Card>
          </Item>
          </Grid>
        </div>
        <div id="AboutCard" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
        <Grid item xs={8}>
        <Item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              
              <Typography variant="h4">
               Antonyms:
              </Typography>
              <Typography
                sx={{ fontSize: 48  }}
                color="secondary"
                gutterBottom
              >
                Word
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
                Antonyms will go here.
              </Typography>
              
            </CardContent>
          </Card>
          </Item>
          </Grid>
        </div>
        <div id="AboutCard" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
        <Grid item xs={8}>
        <Item>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              
              <Typography variant="h4">
               Usage:
              </Typography>
              <Typography
                sx={{ fontSize: 48  }}
                color="secondary"
                gutterBottom
              >
                Word
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary" variant="h5">
                Usage examples will go here.
              </Typography>
              
            </CardContent>
          </Card>
          </Item>
          </Grid>
        </div>
        </Grid>
        </div>
       
      </header>
      
    </div>
  );
}
