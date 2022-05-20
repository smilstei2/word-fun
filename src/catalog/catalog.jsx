import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import scrabble_img from "../../src/images/scrabble_img.png";
import banana_img from "../../src/images/banana_img.jpg";
import wordical_img from "../../src/images/wordical_img.jpg";
import word_on_the_street_img from "../../src/images/word_on_the_street_img.jpg";
import zingo_img from "../../src/images/zingo_img.jpg";
import a_little_wordy_img from "../../src/images/a_little_wordy.jpg";
import online_crossword_img from "../../src/images/online_crossword_img.jpg";

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export function Catalog() {
  return (
    <div className="dictionary">
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
            id="Enter a word"
            label="Search Catalog"
            color="secondary"
            margin="normal"
            variant="outlined"
          />
          <Button variant="text">
            <SearchOutlinedIcon
              size="large"
              color="secondary"
            ></SearchOutlinedIcon>
          </Button>

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
                        Online Crosswords is a free word game that includes Word Connect, Word Cross, Word Score currently.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a href="https://www.amazon.com/Word-Games-Cross-Connect-Search/dp/B07CGCSKTJ/ref=sr_1_5?crid=QRL1UP36EZFJ&keywords=word+games&qid=1653007746&sprefix=word+games%2Caps%2C100&sr=8-5" target="_blank"><Button size="small" color="primary">
                        Follow Link
                      </Button></a>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
                        height="140"
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
                      <Button size="small" color="primary">
                        Follow Link
                      </Button>
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
