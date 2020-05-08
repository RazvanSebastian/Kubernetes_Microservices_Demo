import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Grid, FormControl, InputLabel, Input } from "@material-ui/core";

const PATH = "/api";

const App = (props) => {
  const [items, setItems] = useState([]);

  return (
    <Grid container spacing={1}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <ItemForm />
      </Grid>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <ItemList items={items} setItems={setItems} />
      </Grid>
    </Grid>
  );
};

const ItemForm = () => {
  const [model, setModel] = useState({ value: "" });

  async function saveItem() {
    await fetch(PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(model),
    });
    window.location.reload();
  }

  return (
    <>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="my-input">Model value</InputLabel>
          <Input
            id="my-input"
            onChange={(event) =>
              setModel({ ...model, "value": event.target.value })
            }
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <Button variant="contained" color="primary" onClick={saveItem}>
            Add new value
          </Button>
        </FormControl>
      </Grid>
    </>
  );
};

const ItemList = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(PATH)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          props.setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {props.items.map((item) => (
          <li key={item.name}>
            {item.id} {item.value}
          </li>
        ))}
      </ul>
    );
  }
};

export default App;
