import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

// const styles = require("../style/cards.css");
// import * as style from "../styles/cards.css";

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}: any): JSX.Element => {
  if (!confirmed) {
    return <h1>404 NOT FOUND</h1>;
  }

  return (
    <div className="App">
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          // className={cx(styles.card, styles.infected)} 
        >
          <CardContent
            style={{ backgroundColor: " #f48a04", color: "White", padding: 20 }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="primary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          // className={cx(styles.card, styles.recovered)}
        >
          <CardContent
            style={{ backgroundColor: " #02ab02", color: "White", padding: 20 }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="primary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          // className={cx(styles.card, styles.deaths)}
        >
          <CardContent
            style={{ backgroundColor: " #bf0325", color: "White", padding: 20 }}
          >
            <Typography variant="h5" color="primary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h4" component="h2">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=","
              />
            </Typography>
            <Typography color="primary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
