import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

import "../App.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    boxShadow: "1px 1px 1px #9E9E9E",
  },
});

function Slide({ slideItems }) {
  const classes = useStyles();

  return (
    <>
      {slideItems.map((item) => {
        return (
          <div className="container">
            <Card className={classes.root} variant="outlined">
              <CardMedia>
                <div
                  className="image"
                  dangerouslySetInnerHTML={{ __html: item.media_tag }}
                />
              </CardMedia>

              <CardContent>
                <Typography align="left" display="inline" variant="caption">
                  <div
                    className="caption"
                    dangerouslySetInnerHTML={{ __html: item.caption }}
                  />
                </Typography>
              </CardContent>

              <Divider />

              <CardActions>
                <Button variant="outlined" color="primary" size="small">
                  <a className="url" href={item.url} rel="noopener">
                    URL
                  </a>
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </>
  );

  // return <div dangerouslySetInnerHTML={{ __html: slideItem.media_tag }} />;
}

export default Slide;
