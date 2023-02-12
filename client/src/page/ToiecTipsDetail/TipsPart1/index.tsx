import React from "react";
import { SectionChild, SectionParent } from "../subComponents";

type Props = {};

const TipsPart1 = (props: Props) => {
  return (
    <div>
      <h3 className="mb-6 text-center uppercase text-3xl">
        TOEIC Part 1: Overview And Tips To Get High Scores
      </h3>
      <SectionParent title="1. Toeic Listening Part 1 Overview">
        <SectionChild title="1.1. Description of the task">
          <p>
            In Toeic Listening Part 1, there will be 6 photographs. You need to
            hear 4 sentences per paragraph and choose the one that best
            describes that photograph. No description will be written. Only
            option A, B, C and D will be indicated.
          </p>
          <img
            src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-1.jpg"
            alt=""
          />
        </SectionChild>
        <SectionChild title="1.2. How to allocate time in TOEIC Listening part 1">
          <p>
            You will have 1 minutes and 25 seconds to listen to the instructions
            in Part 1. So, take advantage of this time to take a quick look at
            pictures to imagine possible descriptions.
          </p>
          <p>For each question, you can follow steps below:</p>
          <ul>
            <li>
              Step 1: Listen to four options A, B, C and D (There will be 5s
              interval between two answers)
            </li>
            <li>
              Step 2: Use the first 3 seconds to fill answer in the answer sheet
            </li>
            <li>
              Step 3: Use the rest of time (2 seconds) to look at the next
              picture.
            </li>
          </ul>
        </SectionChild>
        <SectionChild title="1.3 Types of photographs in TOEIC Listening part 1?">
          <p>In Part 1, there are two types of pictures:</p>
          <ul>
            <li>Picture of people (one or many people)</li>
            <li>Picture of object and landscape</li>
          </ul>
        </SectionChild>
      </SectionParent>
      <SectionParent title="2. Tips to get high scores in toeic listening part 1">
        <SectionChild title="2.1. Picture of people">
          <p className="text-lg font-semibold">a. Descriptive structures:</p>
          <table>
            <tbody>
              <tr>
                <td className="text-center">
                  <b>Structure</b>
                </td>
                <td className="text-center">
                  <b>Example</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span>S + is/ are + Ving + O</span>
                </td>
                <td>
                  <span>She is riding a bike</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>S + is/ are + Ving + </span>
                  <span>prepositional phrase of place</span>
                </td>
                <td>
                  <span>People are going into an amusement park</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>S + is/ are + </span>
                  <span>prepositional phrase of place</span>
                </td>
                <td>
                  <span>The children are at the park</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>S + is/ are + being + </span>
                  <span>VpII</span>
                </td>
                <td>
                  <span>A woman is being photographed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>S + is/ are + VpII + Adv</span>
                </td>
                <td>
                  <span>They are seated side by side</span>
                </td>
              </tr>
            </tbody>
          </table>
          <span>
            <b>NOTE: </b>Verbs are often in Ving
          </span>
          <i>Example: </i>
          <div>
            <img
              src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/example-1-toeic-listening-part-1.jpg"
              alt=""
            />
          </div>
          <ul>
            <li>One of the men is taking off his backpack.</li>
            <li>
              <b>One of the men is reading a brochure.</b>
            </li>
            <li>Some people are assembling a table.</li>
            <li>Some people are rearranging chairs.</li>
          </ul>
          <p className="text-lg font-semibold">b. Tips </p>
          <b>– Analysing pictures before listening:</b>
          <p>
            This step is extremely important in both practicing at home and
            taking the test in the test room. Spend time to look carefully at
            the pictures and pay attention to:
          </p>
          <p>
            + Appearance of character(s): Looking at character(s) in the picture
            to guess their gender, clothes and occupation.
          </p>
          <p>
            + Action of body parts: Eye (what character(s) is/ are looking at),
            hand (hold, etc), leg (run, stand, etc). Besides, think of verbs
            that may appear in the recording such as hold, stare, look at, etc.{" "}
          </p>
          <p>
            + Setting and items: Based on the context of the picture to guess
            place such as conference room, kitchen, park
          </p>
          <b>– Think of different expressions for one action</b>
          <p>
            <i>For examples: </i>
          </p>
          <ul>
            <li>They are shaking hand/ they are greeting each other</li>
            <li>Taking note/ writing something down/ writing in the paper</li>
            <li>Making a call/ hanging up the phone/ talking on the phone</li>
            <li>
              Have a meeting/ sitting opposite each other/ sitting across from
              each other
            </li>
          </ul>
        </SectionChild>
      </SectionParent>
      <SectionParent title="3. Tricks in Toeic Listening Part 1">
        <SectionChild title="3.1. Similar sounding words">
          <p>
            Words that sound similar, but do not sound exactly the same often
            appear in the TOEIC Listening Part 1 to make you confused. One or
            more statements include a word or phrase that may sound like
            something in the photograph.{" "}
          </p>
          <p>
            <i>For instance:</i> Instead of hearing the statement “The woman is
            sitting” (which is correct), you may hear the incorrect statement
            “The woman is knitting“. In this case, the two words “knit” and
            “sit” sound similar. However, the word “knit” is simply used to
            distract you.
          </p>
        </SectionChild>
        <SectionChild title="3.2. Words in a different context">
          <p>
            Things that you can see or words you might expect to hear are often
            included in four statements, but they incorrectly describe the
            context.
          </p>
          <span>Look at the following example:</span>
          <div>
            <img
              className=""
              src="https://toeic-testpro.com/wp-content/uploads/2021/10/example-3-toeic-listening-part-1.png"
              alt=""
            />
          </div>
          <ul>
            <li>A. He is having his hair cut.</li>
            <li>
              <b>B. He is talking on the telephone.</b>
            </li>
            <li>C. He is typing on the keyboard.</li>
            <li>D. He is washing the desk</li>
          </ul>
          <p>
            The statement “He is typing on the keyboard” is incorrect because
            though we can see “a man” and “a keyboard” in the photograph, the
            man is not using the keyboard.
          </p>
        </SectionChild>
        <SectionChild title="3.3. Prepositions">
          <p>
            In the
            <b>TOEIC Listening Part 1</b> , it is essential to pay attention to
            the place of people and objects in the picture as a preposition or
            prepositional phrase may be used wrongly.{" "}
          </p>
          <i>For example: </i>
          <p>
            The statement “<i>There are many cars on the bridge</i>” is false.
            In the photo, we can see cars and a bridge but cars are not on the
            bridge, they are under the bridge.
          </p>
        </SectionChild>
      </SectionParent>
    </div>
  );
};

export default TipsPart1;
