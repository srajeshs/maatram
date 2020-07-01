import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Loyalty, Airplay, Face, CastForEducation, ArtTrack, Code, GitHub, LocalLibrary } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What We Do</h2>
          <h5 className={classes.description}>
            <h4>Social Learning Platform</h4>
              Our social learning platform helps students to test their knowledge, share their expertise and take ownership of their training.
              Opportunity to create and contribute is an excellent way to help them better understand the topics.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Programs</h2>
          <h5 className={classes.description}>
            Capturing organisational knowledge, improving communication, guiding students in terms of all technical aspect and 
            providing End2End development skills across all the platforms and verticals
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Webniars"
              description="Interactive webinars to give an quick glance into emerging technologies and industry trends."
              icon={Airplay}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Career Guidance"
              description="It can boost the morale and confidence and give new directions to the students."
              icon={Face}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="IT Experience"
              description="Understanding how organisations works and roles for people and their interest with many levels of expertise."
              icon={Loyalty}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Code knowledge & Understanding"
              description="Get an introduction to code, find out how it works, what it can do, and how it can benefit you."
              icon={Code}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Track your progress"
              description="Students progress tracking through their performace & skills and will be honored with badge"
              icon={ArtTrack}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Contribution to open-source softwares"
              description="Community as a whole contribute to open source software projects for a variety of platforms"
              icon={GitHub}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
