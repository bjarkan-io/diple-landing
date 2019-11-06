import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Explore",
              description:
                "Browse a catalog of different instructors with different styles and focus.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/my_universe_lxnl.svg"
            },
            {
              title: "Work out",
              description:
                "Find all your workouts on your phone, available on the go.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/healthy_habit_bh5w.svg"
            },
            {
              title: "Create workouts",
              description:
                "Got what it takes? Create you unique workout scheme with our in-app tools.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/completing_6bhr.svg"
            },
            {
              title: "Earn it",
              description:
                "Sell your workout schemes as one-time purchases or subscriptions.",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/invest_88iw.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
