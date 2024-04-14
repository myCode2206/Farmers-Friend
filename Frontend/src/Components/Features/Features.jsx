import React from "react";
import { FeatureCard } from "./FeatureCard";

const Features = () => {
  return (
    <>
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom text-center">Services We Provide</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <FeatureCard
            title="Featured title"
            desc="Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words."
          />
          <FeatureCard
            title="Featured title"
            desc="Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words."
          />
          <FeatureCard
            title="Featured title"
            desc="Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
