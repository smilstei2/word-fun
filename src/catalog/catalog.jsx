import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, IconButton} from "@mui/material";
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
import { useState } from 'react';

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



const catalog_array = {
      0: Array.from({ Item: scrabble_img}).fill(""),
      1: Array.from({ Item: banana_img }).fill(""),
      2: Array.from({ Item: wordical_img }).fill(""),
      3: Array.from({ Item: word_on_the_street_img }).fill(""),
      4: Array.from({ Item: zingo_img }).fill(""),
      5: Array.from({ Item: a_little_wordy_img }).fill(""),
      6: Array.from({ Item: online_crossword_img}).fill(""),
      7: Array.from({ Item: blank_slate_img }).fill(""),
      8: Array.from({ Item: boggle_img }).fill(""),
      9: Array.from({ Item: upwords_img }).fill(""),
      10: Array.from({ Item: words_game }).fill(""),
      11: Array.from({ Item: quiddler_img }).fill(""),
      12: Array.from({ Item: name_that_word_img }).fill(""),
      13: Array.from({ Item: word_searches_img }).fill(""),
      14: Array.from({ Item: jabuka_img }).fill(""),
      15: Array.from({ Item: codenames }).fill(""),
}

const searchItems = (item) => {
  
}

export function Catalog({searchItems}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    searchItems(value);
    setValue("");
  };
  // const { items, searchItems } = useContext(TodoContext);
  // const [itemSearched, setItemSearched] = useState(0);

  // useEffect(() => {
  //   setItemSearched(items.filter((item) => item.searched).length);
  // });
  
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
                onClick={() => searchItems(value)}
              >
                <SearchOutlinedIcon sx={{ color: "secondary", margin: "auto" }} />
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
            justifyContent="center"
          >
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={scrabble_img}
                        alt="scrabble image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Scrabble
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Scrabble, board-and-tile game in which two to four
                          players compete in forming words with lettered tiles
                          on a 225-square board.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3"
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
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={banana_img}
                        alt="bananagrams image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Bananagrams
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Be the first to use all your letters. Words must read
                          left to right horizontally, or top to bottom
                          vertically.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Bananagrams-65803-Word-Game/dp/B06WV7VMKH"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={wordical_img}
                        alt="wordical image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Wordical
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Roll the vowel dice and combine the letters with the
                          consonant cards in your hand—build the highest-scoring
                          word and you win the round.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Educational-Insights-2865-Wordical/dp/B00ATWSRGI"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={word_on_the_street_img}
                        alt="word on the street image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Word on The Street
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Easy-to-learn and fun-to-play word game helps to
                          develop vocabulary skills, creative thinking skills,
                          and encourages teamwork.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Educational-Insights-EI-2830-Word-Street/dp/B01N6NEKSO"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={zingo_img}
                        alt="zingo image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Zingo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Gameplay provides a stealth learning experience, where
                          players build vocabulary and learn spelling patterns.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/ThinkFun-Zingo-Builder-Early-Reading/dp/B00GRV5JMU?th=1"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={a_little_wordy_img}
                        alt="a little wordy image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          A Little Wordy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Guess your opponent’s secret word from their letter
                          tiles and clues. Their word could be complex and
                          impressive, or maddeningly simple, and either could
                          win.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Little-Exploding-Kittens-Clever-Scramble/dp/B08Z785NKH/ref=sr_1_5?crid=23BFKY214IINV&keywords=word+games&qid=1653006165&s=toys-and-games&sprefix=%2Ctoys-and-games%2C129&sr=1-5"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={online_crossword_img}
                        alt="onlinecrossword image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Online Crosswords
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Online Crosswords is a free word game that includes
                          Word Connect, Word Cross, Word Score currently.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Word-Games-Cross-Connect-Search/dp/B07CGCSKTJ/ref=sr_1_5?crid=QRL1UP36EZFJ&keywords=word+games&qid=1653007746&sprefix=word+games%2Caps%2C100&sr=8-5"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={blank_slate_img}
                        alt="blank slate image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Blank Slate
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Easy to learn, quick to play, and fun for the whole
                          family; just grab a slate, write a word, and get ready
                          to make a match.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/BLANK-SLATETM-Family-Friendly-Association/dp/B07G2VHPRW/ref=sr_1_1_sspa?crid=39CS5QP2Z6KID&keywords=word%2Bgames&qid=1653015737&sprefix=word%2Bgames%2Caps%2C123&sr=8-1-spons&smid=A1HLCWE9RXZA0X&th=1"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={boggle_img}
                        alt="boggle image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Boggle
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Shake up the letters, flip the timer and spot the
                          words fast
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Hasbro-Gaming-C2187-Boggle-Classic/dp/B01N6PS4L0/ref=sr_1_5?crid=3NIZM7ONAX8HA&keywords=word%2Bgames&qid=1653015983&sprefix=word%2Caps%2C127&sr=8-5&th=1"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={upwords_img}
                        alt="upwords image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Upwords
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Play Words Across Or Down To Make New Words Or Stack
                          On Top Of Tiles To Change A Word!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Upwords-Challenging-Family-Stackable-Letter/dp/B07N3ZM4GQ/ref=sr_1_6?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-6"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={words_game}
                        alt="words game image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Words Game
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Create 3-7 letter words from given random letters.
                          Race against the clock in 5 different levels of
                          difficulty.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/StylezSoft-Words-Game/dp/B005QNRJI2/ref=sr_1_9?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-9"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={quiddler_img}
                        alt="quiddler image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Quiddler
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          The SHORT Word Game attracts non-word-game players as
                          well as people who love word games!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/SET-Enterprises-5000-Quiddler-Card/dp/B00000IV95/ref=sr_1_11?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-11"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={name_that_word_img}
                        alt="name that word image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Name That Word
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Fun and easy to play, the team that guesses the most
                          words in the allotted time wins.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/After-Dinner-Amusements-Prompts-Family/dp/1452173761/ref=sr_1_18?crid=3NIZM7ONAX8HA&keywords=word%2Bgames&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-18&th=1"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={word_searches_img}
                        alt="word searches image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Word Searches
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Strain your brain, not your eyes, as you solve the
                          word searches.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Brain-Games-Searches-Large-Print/dp/1450802281/ref=sr_1_19?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-19"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={jabuka_img}
                        alt="jabuka image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Jabuka
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Boost your brain power with a word game where you bend
                          rules and twist letters to make and steal words in a
                          quick hit of fun!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Jabuka-Word-Game-Spontaneous-Fast-Paced/dp/B07TZJTLYX/ref=sr_1_19?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653017587&sprefix=word%2Caps%2C127&sr=8-19"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="280"
                        image={codenames}
                        alt="codename image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          Codenames
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Codenames is a game of guessing which code names
                          (words) in a set are related to a hint-word given by
                          another player
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a
                        href="https://www.amazon.com/Czech-Games-00031CGE-Codenames/dp/B014Q1XX9S/ref=sr_1_30?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653017802&sprefix=word%2Caps%2C127&sr=8-30"
                        target="_blank"
                      >
                        <Button size="small" color="primary">
                          Follow Link
                        </Button>
                      </a>
                    </CardActions>
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
