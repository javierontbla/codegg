import React, { useEffect } from "react";

import Title from "../../components/title_component/Title";
import {
  Container,
  HyperLink,
  Contact,
  Bold,
  QuestionContainer,
  Question,
  Answer,
} from "./FaqPage_styles";

const FaqPage = () => {
  useEffect(() => {
    document.title = `Codegg - FAQ`;
  }, []);

  return (
    <>
      <Container className="container">
        <Title title="FAQ" />
        <Contact>
          Do you have some questions or just want to report a bug? <br />
          Send me an email to: <Bold>codegg.tech@gmail.com</Bold>
        </Contact>
        <QuestionContainer>
          <Question>What is Codegg?</Question>
          <Answer>
            Codegg is a platform to: <Bold>create</Bold> and <Bold>read</Bold>{" "}
            music reviews without the need of submitting them for inspection
            before hand. Just write and publish. Oh, you can also create music
            recommendations and posts. Everything for free.
          </Answer>
        </QuestionContainer>
        <QuestionContainer>
          <Question>How much do I have pay to use Codegg?</Question>
          <Answer>
            Absolutely nothing. Every single feature in Codegg is completely{" "}
            <Bold>free</Bold>. For everyone. You only need a Google account to
            log in.
          </Answer>
        </QuestionContainer>
        <QuestionContainer>
          <Question>How can I write a review?</Question>
          <Answer>
            Log in with your Google account and click the{" "}
            <HyperLink to="/reviews">
              <Bold>Write a Review</Bold>
            </HyperLink>{" "}
            button on the{" "}
            <HyperLink to="/reviews">
              <Bold>Reviews</Bold>
            </HyperLink>{" "}
            page and start writing.
          </Answer>
        </QuestionContainer>
      </Container>
    </>
  );
};

export default FaqPage;
