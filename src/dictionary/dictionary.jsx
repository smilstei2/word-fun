import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
    "X-RapidAPI-Key": "7d676f781cmsh8806bd263a88d7cp1ee533jsnad42e6e10466",
  },
};

const Item = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function Dictionary() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [synonyms, setSynonyms] = useState([]);
  const [usage, setUsage] = useState([]);

  const CardStyle = { width: 370, height: 360, overflow: "auto" };
  function searchWord(word) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "twinword-word-graph-dictionary.p.rapidapi.com",
        "X-RapidAPI-Key": "7d676f781cmsh8806bd263a88d7cp1ee533jsnad42e6e10466",
      },
    };

    fetch(
      `https://twinword-word-graph-dictionary.p.rapidapi.com/association/?entry=${word}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setSynonyms(response.assoc_word))
      .catch((err) => console.error(err));

    fetch(
      `https://twinword-word-graph-dictionary.p.rapidapi.com/definition/?entry=${word}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDefinition(response.meaning?.noun))
      .catch((err) => console.error(err));

    fetch(
      `https://twinword-word-graph-dictionary.p.rapidapi.com/example/?entry=${word}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setUsage(response.example))
      .catch((err) => console.error(err));
  }
  function onText(value) {
    setWord(value);
    setSynonyms([]);
    setDefinition("");
    setUsage([]);
  }
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
            onKeyDown={(event) => {
              if (event.code === "Enter") {
                searchWord(word);
              }
            }}
            onChange={(event) => onText(event.target.value)}
            id="Enter a word"
            label="Enter a word"
            color="secondary"
            margin="normal"
            variant="outlined"
            value={word}
          />
          <Button onClick={() => searchWord(word)} variant="text">
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
            justifyContent="space-around"
            marginTop={12}
          >
            <div
              id="Def"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={CardStyle}>
                    <CardContent>
                      <Typography variant="h4">Definition:</Typography>
                      <Typography
                        sx={{ fontSize: 48 }}
                        color="secondary"
                        gutterBottom
                      >
                        {definition && word}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        variant="h5"
                      >
                        {!definition ? "Definition will go here." : definition}
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            </div>
            <div
              id="AboutCard"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={CardStyle}>
                    <CardContent>
                      <Typography variant="h4">Synonyms:</Typography>
                      <Typography
                        sx={{ fontSize: 48 }}
                        color="secondary"
                        gutterBottom
                      >
                        {synonyms?.length > 0 && word}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        variant="h5"
                      >
                        {!synonyms?.length
                          ? "Synonyms will go here."
                          : synonyms.map((s, i) => <div key={i}>{s}</div>)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Item>
              </Grid>
            </div>

            <div
              id="AboutCard"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Grid item xs={8}>
                <Item>
                  <Card sx={CardStyle}>
                    <CardContent>
                      <Typography variant="h4">Usage:</Typography>
                      <Typography
                        sx={{ fontSize: 48 }}
                        color="secondary"
                        gutterBottom
                      >
                        {usage?.length > 0 && word}
                      </Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                        variant="h5"
                      >
                        {!usage?.length
                          ? "Usage examples will go here."
                          : usage.map((u, i) => <div key={i}>{u}</div>)}
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
