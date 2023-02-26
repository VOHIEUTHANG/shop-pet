import React from "react";
import { SectionChild, SectionParent } from "../subComponents";

type Props = {};

const TipsPart2 = (props: Props) => {
  return (
    <div>
      <h3 className="mb-6 text-center uppercase text-3xl">
        TOEIC Part 2: Overview, Tips And Tricks
      </h3>
      <SectionParent title="1. Toeic Listening Part 2 Overview">
        <SectionChild title="1.1. Description of the task">
          <p>
            There are 25 questions in the listening part 2. In each question,
            you will listen to a question and then listen to 3 possible
            responses. Choose the correct response.
          </p>
          <img
            src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-2-1.jpg"
            alt=""
          />
        </SectionChild>
        <SectionChild title="1.2. How to allocate time in TOEIC Listening part 2">
          <p>
            You will have 1 minutes and 25 seconds to listen to the instructions
            in Part 1. So, take advantage of this time to take a quick look at
            pictures to imagine possible descriptions.
          </p>
          <p>For each question, you can follow steps below:</p>
          <ul>
            <li>Step 1: Listen to question/ statement</li>
            <li>
              Step 2: Listen to 3 responses of the question (equivalent to 3
              options A, B, C)
            </li>
            <li>Step 3: Choose the best response</li>
            <li>
              Step 4: Take advantage of the 5 second break between two questions
              to look at the next question.
            </li>
          </ul>
        </SectionChild>
        <SectionChild title="1.3. Common types of questions">
          <ul>
            <li>
              <div>
                - <b>Wh-question</b>
              </div>
              <p>
                <i>Example: </i>
                <p>When did Paul take off? – A week ago.</p>
                <p>Who’s going to make the speech? – I will.</p>
              </p>
            </li>
            <li>
              <div>
                - <b>Yes/ No question</b>
              </div>
              <p>
                <i>Example: </i>
                <p>Is there a way to get this done faster? – I’m afraid not.</p>
                <p>Has he been here before? – Yes, several times.</p>
              </p>
              <li>
                <div>
                  - <b>Preference question </b>
                </div>
                <p>
                  <i>Example: </i>
                  <p>
                    Would you like some juice or water? – Either is okay with
                    me.
                  </p>
                  <p>
                    Should we get together now or later? – Let’s meet later.
                  </p>
                </p>
              </li>
              <li>
                <div>
                  - <b>Statement</b>
                </div>
                <p>
                  <i>Example: </i>
                  <p>
                    I wonder if it’s okay to park there – I’m sure it’s okay.
                  </p>
                  <p>
                    The boss is waiting for you. – Oh? I wonder what he wants.
                  </p>
                </p>
              </li>
              <li>
                <div>
                  - <b> Suggestions and Requests </b>
                </div>
                <p>
                  <i>Example: </i>
                  <p>
                    <i>Suggestion</i>: How about watching a movie today? – Sure,
                    what do you want to see?
                  </p>
                  <p>
                    <i>Request</i>: Could you give me a hand with these boxes? –
                    Of course. Give me a second.
                  </p>
                </p>
              </li>
            </li>
          </ul>
        </SectionChild>
      </SectionParent>
      <SectionParent title="2. Tips to get high scores in Toeic Listening Part 2">
        <SectionChild title="2.1. Wh-questions">
          <p className="text-lg font-semibold">a. Question with “When”</p>
          <b>Past</b>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Question Patterns&nbsp;</b>
                </td>
                <td>
                  <b>Answer patterns</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ When did Paul take off?</span>
                </td>
                <td>
                  <span>✓ </span>
                  <span>&nbsp;</span>
                  <span>A week ago.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ When was the form submitted?</span>
                </td>
                <td>
                  <span>✓ Last week.</span>
                  <p></p>
                  <p>
                    <span>✓ Yesterday morning.</span>
                  </p>
                  <p>
                    <span>✓ At 7 o’clock.</span>
                  </p>
                  <p>
                    <span>✓ During</span>
                  </p>
                  <p>
                    <span>✓ While/ While S was</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <b>Future</b>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Question Patterns&nbsp;</b>
                </td>
                <td>
                  <b>Answer patterns</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ When is the meeting?</span>
                </td>
                <td>
                  <span>✓ At 8 o’clock.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ When does John arrive?</span>
                </td>
                <td>
                  <span>✓ By Wednesday.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ Where will the conference end?</span>
                </td>
                <td>
                  <span>✓ In an hour.</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ When are you going to start your project?</span>
                </td>
                <td>
                  <span>✓ Not until&nbsp;</span>
                  <p></p>
                  <p>
                    <span>✓ Sometime tomorrow.</span>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <span>✓ When are we supposed to get together?&nbsp;</span>
                </td>
                <td>
                  <span>✓ Not for another week.&nbsp;</span>
                  <p></p>
                  <p>
                    <span>✓ This evening.&nbsp;</span>
                  </p>
                  <p>
                    <span>✓ As soon as ~.&nbsp;</span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            A response that does not answer the question directly may be given
            as the correct answer.
          </p>
          <p>
            <i>Example</i>: When did you pick up your passport?
          </p>
          <p>A. No, I didn’t drop it </p>
          <p>B. It’s for Tuesday.</p>
          <p>
            <b>C. I had it delivered to my office. </b>
          </p>
          <div>
            <img
              src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-2-tips.jpg"
              alt=""
            />
          </div>
          <p className="text-lg font-semibold">b. Question with “Who’</p>
          <b>Tips:</b>
          <p>– The answer is often the name of the person.</p>
          <i>Example: </i>
          <p>Who will be helping you with the project? </p>
          <p>{"=> Mr. Kevin will give me a hand."} </p>
          <p>– The answer may be an indefinite pronoun.</p>
          <i>Example: </i>
          <p>Who was assigned as the manager of the Mannheim Officers Club? </p>
          <p>{"=>One of our employees. "} </p>
          <p>{"=> A man in our other branch. "} </p>
          <p>
            – The answer may be the name of the company, department or working
            position.
          </p>
          <table>
            <tbody>
              <tr>
                <td>
                  <b>Vocabulary related to jobs and positions&nbsp;</b>
                  <p></p>
                  <p>
                    <span>manager&nbsp;</span>
                  </p>
                  <p>
                    <span>assistant&nbsp;</span>
                  </p>
                  <p>
                    <span>director&nbsp;</span>
                  </p>
                  <p>
                    <span>head of the department</span>
                  </p>
                  <p>
                    <span>president&nbsp;</span>
                  </p>
                  <p>
                    <span>vice president&nbsp;</span>
                  </p>
                  <p>
                    <span>board of director</span>
                  </p>
                  <p>
                    <span>secretary</span>
                  </p>
                  <p>
                    <span>supervisor</span>
                  </p>
                  <p>
                    <span>executive officer</span>
                  </p>
                  <p>
                    <span>chief executive officer (CEO)</span>
                  </p>
                  <p>
                    <span>marketing consultant&nbsp;</span>
                  </p>
                  <p>
                    <span>administrative assistant</span>
                  </p>
                  <p>
                    <span>representative</span>
                  </p>
                  <p>
                    <span>receptionist</span>
                  </p>
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
        <SectionChild title="2.2. Yes/ No questions ">
          <p className="text-lg font-semibold">a. Basic Yes/ No question </p>
          <p>
            <b>Tips:</b>
          </p>
          <p>– Learn different “Yes, No” expressions </p>
          <b>✓ Yes </b>
          <p>{"=> I think so/ I believe so. "}</p>
          <p>{"=> That’s what I heard. "}</p>
          <p>{"=> Sure/ Of course/ Certainly."}</p>
          <b>✓ No </b>
          <p>{"=> I don’t think so."}</p>
          <p>{"=> Not that I know of/ Not that I’m aware of. "}</p>
        </SectionChild>
        <SectionChild title="2.3. Preference Question">
          <p>
            <b>Preferences for items</b>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Question Patterns&nbsp;</b>
                  </td>
                  <td>
                    <b>Answer Patterns</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>✓ Would you like some juice or water?</span>
                  </td>
                  <td>
                    <span>✓ Either is okay with me.</span>
                    <p></p>
                    <p>
                      <span>✓ Neither. I’d like some coffee instead.</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>✓ Will you stay or go?</span>
                  </td>
                  <td>
                    <span>✓ I’m going to stay.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </p>
        </SectionChild>
      </SectionParent>
      <SectionParent title="3. Tricks in Toeic Listening Part 2">
        <p>
          a. Direct questions are not often answered with Yes, or No or I don’t
          know. Look for options that use different words to express their
          meanings.
        </p>
        <p>
          b. The question and answer are often in different tenses. Do not
          expect the tense to be always the same.{" "}
        </p>
        <div>
          <img
            src="https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-2-tricks.jpg"
            alt=""
          />
        </div>
        <i>Example: </i>
        <p>♦ Question: Are you going tonight? </p>
        <p>♦ Answer: I will leave tomorrow.</p>
        <p>c. Watch out for common distractors</p>
        <p>– Same word – unrelated meaning</p>
        <p>
          If you hear the same word in the question and the answer choices, be
          careful! It could be a distractor.
        </p>
        <p>
          <i>Example: </i>
        </p>
        <p>♦ Question: Has the sale improved profits?</p>
        <p>♦ Answer: Yes, it is for sale.</p>
        <p>– Similar sound – different/unrelated word</p>
        <p>
          Sometimes the incorrect choices use words that sound similar to the
          ones in the recording.
        </p>
        <i>Example:</i>
        <p>♦ Question: Have you met the new staff?</p>
        <p>♦ Answer: No, it’s not the same stuff.</p>
      </SectionParent>
    </div>
  );
};

export default TipsPart2;
