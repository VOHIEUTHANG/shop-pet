import React from "react";
import { SectionChild, SectionParent } from "../subComponents";

type Props = {};

const TipsPart3 = (props: Props) => {
  return (
    <div>
      <h3 className="mb-6 text-center uppercase text-3xl">
        TOEIC Part 3: Overview, Tips And Tricks
      </h3>
      <SectionParent title="1. Toeic Listening Part 3 Overview">
        <SectionChild title="1.1. Description of the task">
          <p>
            You are going to listen to 13 short conversations, each with 3
            questions. For each question, choose the best answer which you think
            fits best according to what you hear.
          </p>
          <img
            src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-3.jpg"
            alt=""
          />
        </SectionChild>
        <SectionChild title="1.2. Common topics in Part 3">
          <ul>
            <li>
              – Information in the office (time, meeting, material, equipment
              and appointment)
            </li>
            <li>
              – Information about one employee (salary increase, promotion,
              working position)
            </li>
            <li>– Travel (business trip, price, time)</li>
            <li>– Restaurants, real estate and retail</li>
            <li>– Free-time activities</li>
          </ul>
        </SectionChild>
        <SectionChild title="1.3. Common types of questions in Part 3 ">
          <p>
            <b>a. Question asking for main idea </b>
          </p>
          <p>
            <i>Example: </i>
          </p>
          <p>What is the conversation about?</p>
          <p>What is the topic of the conversation?</p>
          <p>What are the speakers talking about? </p>
          <p>Who are the speakers talking about?</p>
          <p>
            <b>b. Question asking for details</b>
          </p>
          <p>
            <i>Example: </i>
          </p>
          <p>What problem does the woman have?</p>
          <p>What does the man suggest? </p>
          <p>What is John’s job? </p>
          <p>
            <b>c. Inference question </b>
          </p>
          <p>
            <i>Example: </i>
          </p>
          <p>What is the relationship between 2 speakers?</p>
          <p>What will the woman probably do next? </p>
          <p>Where is the conversation likely taking place?</p>
        </SectionChild>
      </SectionParent>
      <SectionParent title="2. Tips to gain a high score in toeic listening part 3">
        <SectionChild title="2.1. Read question – Identify content">
          <p>
            Reading questions carefully and guessing answers is an essential
            step before listening to the Toeic part 3.
          </p>
          <p>You can follow the steps below:</p>
          <p>
            <i>- Step 1</i>: Before the audio is played, there is always
            instruction. You should take advantage of this time to read the
            question and four answers. By this way, you can guess what the
            conversation is about.
          </p>
          <p>
            <i>– Step 2</i>: While the audio is playing, you need to focus on
            listening to choose the best answer and fill in the answer sheet.
          </p>
          <p>
            <i>– Step 3</i>: While the audio is reading the question and four
            answers, you need to take advantage of this period of time to look
            at ques tions and answers of the next conversation.
          </p>
        </SectionChild>
        <SectionChild title="2.2. Identify the role of each character">
          <p>
            In the Toeic listening part 3, there are 2 or 3 people taking part
            in one conversation. If you don’t identify the role of each
            character, you will be confused and find it difficult to keep track
            of the conversation. Therefore, it’s necessary for you to identify
            the voice and role of each person.{" "}
          </p>
          <p>
            For instance, with the question “What does John advise? If you know
            John’s voice, you will find it easier to choose the best answer.
          </p>
          <div>
            <img
              src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-3-tips.jpg"
              alt=""
            />
          </div>
        </SectionChild>
        <SectionChild title="2.3. Making inference from the available information">
          <p>
            Conversations in part 3 are often requirements or questions. Hence,
            you can get the correct answer for the first question if you listen
            carefully to the first part of the conversation.
          </p>
          <p>
            For inference questions, you also need to listen to the conversation
            carefully and gradually get rid of wrong answers. Answers may be
            expressed by synonyms instead of words taken from the conversation.
            This is the reason why you need to constantly boost your vocabulary.
          </p>
        </SectionChild>
      </SectionParent>
      <SectionParent title="3. Tricks in toeic listening part 3">
        <SectionChild title="3.1. Trick concerning contradictory information">
          <p>
            In the Toeic part 3, you will often listen to conversation related
            to negativity and level.
          </p>
          <p>
            <i>For example: </i>
          </p>
          <p>What kind of fruit do the man like most?</p>
          <p>A. Apple </p>
          <p>B. Pineapple</p>
          <p>C. Watermelon</p>
          <p>D. Coconut </p>
          <p>
            All four types of fruit may be mentioned in the conversation but
            with different levels of liking. Concerning this trap, you may hear
            some structures such as “I like it but …”, “I used to, but…”, “I’d
            love but…”.
          </p>
        </SectionChild>
        <SectionChild title="3.2. Information making confused">
          <p>
            Things that you can see or words you might expect to hear are often
            included in four statements, but they incorrectly describe the
            context.
          </p>
          <p>
            <i>For example:</i>
          </p>
          <p>When does the man have to complete an assignment?</p>
          <ol>
            <li>On Thursday</li>
            <li>On Friday</li>
            <li>On Saturday</li>
            <li>On Sunday</li>
          </ol>
          <p>
            In the conversation, there is a sentence “In order to make the
            Sunday edition, you’ll give me your final draft on Friday
            afternoon”. You hear both option B and D, but B is the correct
            answer.
          </p>
        </SectionChild>
        <SectionChild title="3.3. Mistaking information between voices of man and woman">
          <p>
            There will be a woman and a man talking with each other in
            conversations in toeic listening part 3. However, the rapid speaking
            speed of characters sometimes makes you difficult to distinguish
            information, thereby making it hard to choose the best answer.
          </p>
          <p>To avoid this trick, you need to pay attention to these things:</p>
          <p>– Who is asking? answering? (man or woman)</p>
          <p>– Repeated words</p>
        </SectionChild>
      </SectionParent>
    </div>
  );
};

export default TipsPart3;
