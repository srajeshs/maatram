import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="Maatram"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/maatram_header.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Together we can make a difference.</h1>
                <h3>
                  An initiative social learning community for students
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                Real time IT experience
              </Button>
            </a>
          </Link>
        </GridItem>
        <GridItem md={6} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                collobrative webinar sessions
              </Button>
            </a>
          </Link>
        </GridItem>
        <GridItem md={6} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                open source contributions
              </Button>
            </a>
          </Link>
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}
