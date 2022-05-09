import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
        <TextField id="Enter a word" label="Enter a word" color= "secondary" margin="normal" variant="outlined" />   
        <Button variant="text"><SearchOutlinedIcon size="large" color="secondary"></SearchOutlinedIcon></Button>

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
