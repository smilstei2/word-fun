import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, IconButton } from "@mui/material";
import scrabble_img from "../../src/images/scrabble_img.png";
import banana_img from "../../src/images/banana_img.jpg";
import wordical_img from "../../src/images/wordical_img.jpg";
import word_on_the_street_img from "../../src/images/word_on_the_street_img.jpg";
import zingo_img from "../../src/images/zingo_img.jpg";
import a_little_wordy_img from "../../src/images/a_little_wordy.jpg";
import online_crossword_img from "../../src/images/online_crossword_img.jpg";
import blank_slate_img from "../../src/images/blank_slate_img.jpg";
import boggle_img from "../../src/images/boggle_img.jpg";
import upwords_img from "../../src/images/upwords_img.jpg";
import words_game from "../../src/images/words_game.jpg";
import quiddler_img from "../../src/images/quiddler_img.jpg";
import name_that_word_img from "../../src/images/name_that_word_img.jpg";
import word_searches_img from "../../src/images/word_searches_img.jpg";
import jabuka_img from "../../src/images/jabuka_img.jpg";
import codenames from "../../src/images/codenames.jpg";
import { useState } from "react";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const catalog_array = [{
  title: "Scrabble",
  description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
  link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
  image : scrabble_img

},
{
  title: "Bananagrams",
  description: "Be the first to use all your letters. Words must read left to right horizontally, or top to bottom vertically.",
  link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
  image : banana_img

},
// {
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// },{
//   title: "scrabble",
//   description: "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
//   link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
//   image : scrabble_img

// }
]
//   0: Array.from({ Item: scrabble_img }).fill(""),
//   1: Array.from({ Item: banana_img }).fill(""),
//   2: Array.from({ Item: wordical_img }).fill(""),
//   3: Array.from({ Item: word_on_the_street_img }).fill(""),
//   4: Array.from({ Item: zingo_img }).fill(""),
//   5: Array.from({ Item: a_little_wordy_img }).fill(""),
//   6: Array.from({ Item: online_crossword_img }).fill(""),
//   7: Array.from({ Item: blank_slate_img }).fill(""),
//   8: Array.from({ Item: boggle_img }).fill(""),
//   9: Array.from({ Item: upwords_img }).fill(""),
//   10: Array.from({ Item: words_game }).fill(""),
//   11: Array.from({ Item: quiddler_img }).fill(""),
//   12: Array.from({ Item: name_that_word_img }).fill(""),
//   13: Array.from({ Item: word_searches_img }).fill(""),
//   14: Array.from({ Item: jabuka_img }).fill(""),
//   15: Array.from({ Item: codenames }).fill(""),
// ];



export function Catalog() {
  const [value, setValue] = useState("");



  return (
    <div className="catalog">
      <header className="dictionary-header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
          }}
          id="enterWord"
          className="Name-div"
        >
          <TextField
            id="outlined-basic"
            label="Search Catalog"
            variant="outlined"
            color="secondary"
            value= {value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              width: "75%",
              margin: "auto",
              [`& fieldset`]: { borderRadius: 5 },
            }}
            InputProps={{
              endAdornment: (
                <Button
                  variant="outline-secondary"
                  
                >
                  <SearchOutlinedIcon
                    sx={{ color: "secondary", margin: "auto" }}
                  />
                </Button>
              ),
            }}
          ></TextField>

          {/* <div style={{position: 'relative', display: 'inline-block'}}> */}
          {/* <SearchOutlinedIcon style={{color: 'secondary', size: 'large', position: 'absolute', right: 0, top: 20, width: 30, height: 50}}/>
      <TextField
          id="Enter a word"
          label="Search Catalog"
          color="secondary"
          margin="normal"
          variant="outlined"
          
           //onChange={_.debounce((event, value) => this.handleSearch(value), 500)}
        /> */}

          <div>
            {" "}
            <br />{" "}
          </div>
        </div>

        <br />
        <div>
          <Grid
            container
            spacing={4}
            columns={8}
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "100vh",
              }}
            >
              {catalog_array?.filter(a => a.title.toLowerCase().includes(value.toLowerCase())).map((c, i) =>(
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={c.image}
                        alt={`${c.title} image`} 
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {c.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {c.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href={c.link}
                        target="_blank"
                      >
                        {" "}
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
              ))}
            </div>
            </Grid>
            </div>
            
            </header>
    </div>
  );
}

           
  