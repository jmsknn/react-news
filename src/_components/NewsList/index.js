import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    margin: "auto",
  },
  paper: {
    padding: "25px 10px",
    width: "20%",
  },
}));

export default function NewsList(props) {
  const classes = useStyles();
  console.log("data props", props);
  const data = props.data;

  if (!data.length) {
    return <Typography variant="h5">No search result</Typography>;
  } else {
    return (
      <List className={classes.root}>
        {data.map((item, index) => (
          <ListItem className={classes.item} key={`news-${index}`}>
            <Paper className={classes.paper}>{item.title}</Paper>
          </ListItem>
        ))}
      </List>
    );
  }
}
