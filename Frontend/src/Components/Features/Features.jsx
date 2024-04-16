import { FeatureCard } from "./FeatureCard";

const Features = () => {
  return (
    <>
      <div className="container px-4 py-5" id="featured-3">
        <h1 className="pb-2 border-bottom text-center">Services We Provide</h1>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <FeatureCard
            url="http://www.w3.org/2000/svg"
            d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m-3.5 1.5a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m6 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317m.747-8.498a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973"
            title="Weather Forecast"
            desc="Helping farmers intelligently plan their farming activities based on predicted weather conditions."
          />
          <FeatureCard
            url="http://www.w3.org/2000/svg"
            d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
            title="Community Chat"
            desc="A chat feature where farmers can talk to each other, share tips, and ask questions to help each other out"
          />
          <FeatureCard
            url="http://www.w3.org/2000/svg"
            d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z"
            title="Featured title"
            desc="Get timely updates on agricultural news, market trends, and industry insights, empowering informed decision-making."
          />
        </div>
      </div>
    </>
  );
};

export default Features;
