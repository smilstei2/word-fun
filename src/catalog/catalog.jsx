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
  minWidth: "200px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const catalog_array = [
  {
    title: "Scrabble",
    description:
      "Scrabble, board-and-tile game in which two to four players compete in forming words with lettered tiles on a 225-square board.",
    link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
    image: scrabble_img,
  },
  {
    title: "Bananagrams",
    description:
      "Be the first to use all your letters. Words must read left to right horizontally, or top to bottom vertically.",
    link: "https://www.amazon.com/Winning-Moves-Tile-Lock-Scrabble/dp/1223063151/ref=sr_1_3?keywords=scrabble&qid=1653007600&sr=8-3",
    image: banana_img,
  },
  {
    title: "Wordical",
    description:
      "Roll the vowel dice and combine the letters with the consonant cards in your hand—build the highest-scoring word and you win the round.",
    link: "https://www.amazon.com/Educational-Insights-2865-Wordical/dp/B00ATWSRGI",
    image: wordical_img,
  },
  {
    title: "Word on The Street",
    description:
      "Easy-to-learn and fun-to-play word game helps to develop vocabulary skills, creative thinking skills, and encourages teamwork.",
    link: "https://www.amazon.com/Educational-Insights-EI-2830-Word-Street/dp/B01N6NEKSO",
    image: word_on_the_street_img,
  },
  {
    title: "Zingo",
    description:
      "Gameplay provides a stealth learning experience, where players build vocabulary and learn spelling patterns.",
    link: "https://www.amazon.com/ThinkFun-Zingo-Builder-Early-Reading/dp/B00GRV5JMU?th=1",
    image: zingo_img,
  },
  {
    title: "A Little Wordy",
    description:
      "Guess your opponent’s secret word from their letter tiles and clues. Their word could be complex and impressive, or maddeningly simple, and either could win.",
    link: "https://www.amazon.com/Little-Exploding-Kittens-Clever-Scramble/dp/B08Z785NKH/ref=sr_1_5?crid=23BFKY214IINV&keywords=word+games&qid=1653006165&s=toys-and-games&sprefix=%2Ctoys-and-games%2C129&sr=1-5",
    image: a_little_wordy_img,
  },
  {
    title: "Online Crosswords",
    description:
      "Online Crosswords is a free word game that includes Word Connect, Word Cross, Word Score currently.",
    link: "https://www.amazon.com/Word-Games-Cross-Connect-Search/dp/B07CGCSKTJ/ref=sr_1_5?crid=QRL1UP36EZFJ&keywords=word+games&qid=1653007746&sprefix=word+games%2Caps%2C100&sr=8-5",
    image: online_crossword_img,
  },
  {
    title: "Blank Slate",
    description:
      "Easy to learn, quick to play, and fun for the whole family; just grab a slate, write a word, and get ready to make a match.",
    link: "https://www.amazon.com/BLANK-SLATETM-Family-Friendly-Association/dp/B07G2VHPRW/ref=sr_1_1_sspa?crid=39CS5QP2Z6KID&keywords=word%2Bgames&qid=1653015737&sprefix=word%2Bgames%2Caps%2C123&sr=8-1-spons&smid=A1HLCWE9RXZA0X&th=1",
    image: blank_slate_img,
  },
  {
    title: "Boggle",
    description: "Shake up the letters, flip the timer and spot the words fast",
    link: "https://www.amazon.com/Hasbro-Gaming-C2187-Boggle-Classic/dp/B01N6PS4L0/ref=sr_1_5?crid=3NIZM7ONAX8HA&keywords=word%2Bgames&qid=1653015983&sprefix=word%2Caps%2C127&sr=8-5&th=1",
    image: boggle_img,
  },
  {
    title: "Upwords",
    description:
      "Play Words Across Or Down To Make New Words Or Stack On Top Of Tiles To Change A Word!",
    link: "https://www.amazon.com/Upwords-Challenging-Family-Stackable-Letter/dp/B07N3ZM4GQ/ref=sr_1_6?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-6",
    image: upwords_img,
  },
  {
    title: "Words Game",
    description:
      "Create 3-7 letter words from given random letters. Race against the clock in 5 different levels of difficulty.",
    link: "https://www.amazon.com/StylezSoft-Words-Game/dp/B005QNRJI2/ref=sr_1_9?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-9",
    image: words_game,
  },
  {
    title: "Quiddler",
    description:
      "The SHORT Word Game attracts non-word-game players as well as people who love word games!",
    link: "https://www.amazon.com/SET-Enterprises-5000-Quiddler-Card/dp/B00000IV95/ref=sr_1_11?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-11",
    image: quiddler_img,
  },
  {
    title: "Name That Word",
    description:
      "Fun and easy to play, the team that guesses the most words in the allotted time wins.",
    link: "https://www.amazon.com/After-Dinner-Amusements-Prompts-Family/dp/1452173761/ref=sr_1_18?crid=3NIZM7ONAX8HA&keywords=word%2Bgames&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-18&th=1",
    image: name_that_word_img,
  },
  {
    title: "Word Searches",
    description:
      "Strain your brain, not your eyes, as you solve the word searches.",
    link: "https://www.amazon.com/Brain-Games-Searches-Large-Print/dp/1450802281/ref=sr_1_19?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653016215&sprefix=word%2Caps%2C127&sr=8-19",
    image: word_searches_img,
  },
  {
    title: "Jabuka",
    description:
      "Boost your brain power with a word game where you bend rules and twist letters to make and steal words in a quick hit of fun!",
    link: "https://www.amazon.com/Jabuka-Word-Game-Spontaneous-Fast-Paced/dp/B07TZJTLYX/ref=sr_1_19?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653017587&sprefix=word%2Caps%2C127&sr=8-19",
    image: jabuka_img,
  },
  {
    title: "Codenames",
    description:
      " Codenames is a game of guessing which code names (words) in a set are related to a hint-word given by another player",
    link: "https://www.amazon.com/Czech-Games-00031CGE-Codenames/dp/B014Q1XX9S/ref=sr_1_30?crid=3NIZM7ONAX8HA&keywords=word+games&qid=1653017802&sprefix=word%2Caps%2C127&sr=8-30",
    image: codenames,
  },
];

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
            value={value}
            onChange={(e) => setValue(e.target.value)}
            sx={{
              width: "75%",
              margin: "auto",
              [`& fieldset`]: { borderRadius: 5 },
            }}
            InputProps={{
              endAdornment: (
                <Button variant="outline-secondary">
                  <SearchOutlinedIcon
                    sx={{ color: "secondary", margin: "auto" }}
                  />
                </Button>
              ),
            }}
          ></TextField>

          <div>
            {" "}
            <br />{" "}
          </div>
        </div>

        <br />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
          }}
          
        >
          {catalog_array
            ?.filter((a) => a.title.toLowerCase().includes(value.toLowerCase()))
            .map((c, i) => (
              <Grid item xs={8}>
                <Item>
                  <Card>
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
                        <Typography
                          height="40px"
                          variant="body2"
                          color="text.secondary"
                        >
                          {c.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <a href={c.link} target="_blank">
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
      </header>
    </div>
  );
}
