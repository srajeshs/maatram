import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Loyalty, Airplay, Face, CastForEducation, ArtTrack, Code, GitHub, LocalLibrary, AssignmentTurnedIn } from "@material-ui/icons";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>What We Do</h2>
          <h5 className={classes.description}></h5>
          <h4>We introducted a new program, specially for IT/CSE/ECE students</h4>
            <h4><b>Social Learning Platform</b></h4>
          Our social learning platform helps students to test their knowledge, share their expertise and take ownership of their training.
          Opportunity to create and contribute is an excellent way to help them better understand the topics.
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
              title="Webniars & Presentations"
              description="Interactive webinars to give an quick glance into emerging technologies and industry trends."
              icon={Airplay}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Career Guidance"
              description="Our guidance can boost the morale and confidence and give new directions to the students."
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
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="On-Demand Traning Courses"
              description="Get an introduction to new technologies, find out how it works, what it can do, and how it can benefit you."
              icon={Code}
              iconColor="danger"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Contribution to Open-Source Softwares"
              description="Community as a whole contribute to open source software projects for a variety of domains"
              icon={GitHub}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Track Progress"
              description="Students able to achieve their goal by their progress, performance, skills and roadmap"
              icon={AssignmentTurnedIn}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Student's Benefits</h2>
          <h5 className={classes.description}>
            Increased engagement across disengaged learners, Students able to develop self organisation skills, encouraged collaboration
            and skills that can be used in the workforce
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Button
            color="danger"
            size="lg"
            href="https://www.linkedin.com/groups/8956139/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started Now &nbsp; &nbsp; <i className="fas fa-play" />
          </Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h5>
            <b>Tell me and I forget. Teach me and I remember. Involve me and I Learn</b>
          </h5>
          <h5>
            <Link href="/about">
              <a>See more about social learning platform</a>
            </Link>
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
