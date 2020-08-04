import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "../App.css";

function InfoBox({ title, cases, active, total, isRed, ...props }) {
  return (
    <Card onClick={props.onClick} className={`infobox ${active && 'infobox--selected'} ${isRed && 'infobox--red'}`}>
      <CardContent>
        <Typography classname="infobox__title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infobox__cases ${!isRed && 'infobox__cases--green'}`}>{cases}</h2>
        <Typography classname="infobox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
