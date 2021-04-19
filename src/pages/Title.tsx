import React from "react";
import Logo from "../images/logo192.png";
import "../styles/title.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.text.secondary,
      fontWeight: "bold",
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
  })
);

const Title: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="title">
      <img
        src={Logo}
        style={{ width: 400, padding: 30, display: "inline-block" }}
      />
      <List className={classes.root}>
        <ListItem>
          <ListItemText
            primary="COVID-19 TODAY"
            style={{
              marginLeft: "30%",
              fontFamily: "monospace",
              fontSize: "large",
            }}
          />
        </ListItem>
      </List>
    </div>
  );
};

export default Title;
