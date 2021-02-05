import React from "react";
import AnimationRevealPage from "main/components/helpers/AnimationRevealPage.js";
import Header from "main/components/THeader.js";
import Pricing from "main/components/Pricing.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
