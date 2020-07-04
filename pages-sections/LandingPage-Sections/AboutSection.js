import React from "react";
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Loyalty, Airplay, Face, CastForEducation, ArtTrack, Code, GitHub, LocalLibrary, AssignmentTurnedIn, Timeline, FormatAlignLeft } from "@material-ui/icons";
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
      <div className={classes.container} style={{ color: "black", textAlign: "left" }}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <h3>How does Social Learning Work And Why Does It Make Sense To Adopt It?</h3>
            <h5>
              <p>Social learning as such is not a new concept. It has been part of our learning mechanism all through and there are several theories to support this claim. The 70/20/10 Model for Learning and Development, social learning theory, and Active Learning theory in particular make a great case for social learning.</p>
              <p>You can refer to my article Why You Should Adopt Social Learning to know more about how these theories establish the need to integrate social learning components in corporate training and how social learning can benefit learners and organizations alike.</p>
              <p>But if this doesn’t sound convincing enough to consider social learning as part of your learning strategy, you’d want to take a look at these facts and stats:</p>
              <p>Social learning approaches have a 75:1 ROI ratio over web-based training (Association for Talent Development).</p>
              <p>The course completion rates shot up to 85% on HBX, a Harvard Business School online education initiative with the introduction of social learning, way better than online-only MOOCs (Harvard Business Review).</p>
              <p>Cisco’s use of social learning to support its transition to a global services organization saw a 98% employee adoption rate in the first year with 80% of learning content socially generated (ChiefLearningOfficer).</p>
              <p>According to a Stanford research, 45% of their physicians benefited from social learning in a medical photo-sharing app for doctors as a patient care related study aid (Stanford Medicine).</p>
              <p>73% of the surveyed companies expected to increase their focus on social learning and more than 60% wanted their employees to interact with learning resources on a daily basis (Brandon Hall Group).</p>
              <p>AMD, a semiconductor manufacturing company, says their shift to social learning strategy saves more than USD 250,000 per year in web based training production costs (Kenexa).</p>
              <p>Villeroy & Boch, a large manufacturer of ceramics, deployed a social learning framework for their training courses resulting in a 32% increase on Average Transaction Value with +19% sales in Japan (Curatr).</p>
            </h5>
            <h3>How Can You Use Social Learning?</h3>
            <h5>
              <p>
              You can look at social learning through a larger prism – that of a "Learning and Performance Ecosystem". You can bring in a combination of various kinds of learning, blending formal and informal learning, and supplement your learning with social learning and Performance Support elements. This will provide your learners with more options and ways to learn and experience “learning as a continuum”.
              </p>
              </h5>
            <h5>
              <p>
              Learners like learning in different ways. Their preferences differ from one another. Providing them with a platform such as this with multiple options to learn will increase the likelihood of the learning appealing to the learning style of different learners. Besides, this approach will help you not just achieve the required levels of acquisition and application of knowledge on the job but a positive return on investment on your training.
              </p>
              </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
