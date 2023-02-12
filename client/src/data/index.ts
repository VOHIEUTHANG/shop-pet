import { CardListType } from "../components/CardList";
import { TestKitListType } from "../components/TestKitList";
import { TipsCartType } from "../components/TipsCard";
const listeningTestList: CardListType = [
  {
    href: "/training/listening/1",
    part: 1,
    title: "Photographs",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://images.unsplash.com/photo-1548502499-ef49e8cf98d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    href: "/training/listening/part-2",
    part: 2,
    title: "Question - Response",
    content:
      "Three responses to one question or statement will be spoken only one time. Select the best response for the question.",
    imgUrl:
      "https://arrivein.com/wp-content/uploads/2020/07/Blog-Banner-Job-interview-questions.jpg",
  },
  {
    href: "/training/listening/part-3",
    part: 3,
    title: "Short Conversations",
    content:
      "Conversations between two or three people will be spoken only one time. Listen to each conversation and select the best response for the question. There are three questions for each conversation.",
    imgUrl:
      "https://cdn.shrm.org/image/upload/c_crop%2Ch_386%2Cw_686%2Cx_0%2Cy_59/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Competencies/conversation_isrprn?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjU5LCJ4MiI6Njg2LCJ5MiI6NDQ0LCJ3Ijo2ODYsImgiOjM4Nn19",
  },
  {
    href: "/training/listening/part-4",
    part: 4,
    title: "Short Talks",
    content:
      "Short talks such as announcements or narrations will be spoken only one time. Listen to each talk and select the best response for the question There are three questions for each talk.",
    imgUrl:
      "https://teded.tedcdn.com/assets/student-talks/hero-01-021ecabf5ecd8b43ca816a1297bcd3f76cbc512de1689279d5301b01222f0001.jpg",
  },
];
const readingTestList: CardListType = [
  {
    href: "/training/reading/part-5",
    part: 5,
    title: "Incomplete Sentences",
    content:
      "Select the best answer of the four choices to complete the sentence.",
    imgUrl:
      "https://www.masterclass.com/cdn-cgi/image/width=828,quality=75,format=webp/https://images.ctfassets.net/3s5io6mnxfqz/3QSruYage5D2d9ZJ4fg5Ir/b4a3bb428de80f7f404130eb67e789a7/AdobeStock_142817078.jpeg",
  },
  {
    href: "/training/reading/part-6",
    part: 6,
    title: "Text Completion",
    content:
      "Select the best answer of the four choices (words, phrases, or a sentence) to complete the text. There are four questions for each text.",
    imgUrl:
      "https://document360.com/wp-content/uploads/2019/08/blogimage11-e1564751826368.jpg",
  },
  {
    href: "/training/reading/part-7",
    part: 7,
    title: "Reading Comprehension",
    content:
      "Four short statements regarding a photograph will be spoken only one time. Of these four statements, select the one. that best describes the photograph.",
    imgUrl:
      "https://blaze.today/images/posts/please-kindly-sign-and-return.jpeg",
  },
];
const testKitList: TestKitListType = [
  {
    href: "/mock-test/mini",
    name: "mini",
    descriptions:
      "Take mini test with the number of questions and time limit reduced by half",
    backgroundImgUrl:
      "https://toeic-testpro.com/_next/image/?url=%2Fimages%2Fapp%2Ftoeic%2Fmini-test.png&w=1920&q=75",
  },
  {
    href: "/mock-test/full",
    name: "full",
    descriptions:
      "Take full test with the same number of questions and time limit as the actual test",
    backgroundImgUrl:
      "https://toeic-testpro.com/_next/image/?url=%2Fimages%2Fapp%2Ftoeic%2Ffull-test.png&w=1920&q=75",
  },
];

const tipsCardList: TipsCartType[] = [
  {
    href: "/toiec-tips/part-key/1",
    part: 1,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-1.jpg",
    name: "Overview And Tips To Get High Scores",
    desc: "Toeic Listening Part 1 (Photographs) is considered an easy part in the TOEIC exam. However, not everyone knows techniques and strategies to get a maximum score in this part. Scroll down this article to know more information",
  },
  {
    href: "/toiec-tips/part-key/2",
    part: 2,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-2-1.jpg",
    name: "Overview, Tips And Tricks",
    desc: "Toeic Listening Part 2 (Question – Response) is not the most difficult section of the TOEIC test, however, it sometimes makes candidates confused. In this article, I will give you a close insight into the format of TOEIC Listening part 2 as well as tips and tricks in this part. ",
  },
  {
    href: "/toiec-tips/part-key/3",
    part: 3,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/10/toeic-listening-part-3.jpg",
    name: "Overview, Tips And Tricks",
    desc: "Toeic Listening Part 3 (Conversations) is one of the most challenging parts in the Toeic exam because audioes are quite long with two or three people participating in the conversation",
  },
];

const vocabularyCardList: TipsCartType[] = [
  {
    href: "/vocabulary/part-key/1",
    part: 1,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/12/vocabulary-toeic-part-1.jpg",
    name: "Common Vocabulary For TOEIC",
    desc: "Although Part 1 is considered the least challenging part in the Toeic exam, it’s necessary to prepare knowledge as well as strategies to get a high score. Apart from having a thorough understanding of the test format, you also need to boost your vocabulary. Here are common vocabulary in Toeic part 1 that you can refer to.",
  },
  {
    href: "/vocabulary/part-key/2",
    part: 2,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/12/vocabulary-part-2.jpg",
    name: "Common Vocabulary For TOEIC",
    desc: "For people who want to master English in general and achieve the Toeic target score in particular, boosting vocabulary is really important.This article will introduce common vocabulary for Toeic part 2. Hopefully, it will help you enhance your score in this part.",
  },
  {
    href: "/vocabulary/part-key/3",
    part: 3,
    imgUrl:
      "https://blog.toeic-testpro.com/wp-content/uploads/2021/12/vocabulary-part-3.png",
    name: "Common Vocabulary For TOEIC",
    desc: "Part 3 is one of the most challenging parts in the Toeic exam since answers are often paraphrased. To gain a high score in Part 3, cultivating vocabulary is really essential. This article will give common vocabulary for Toeic part 3.",
  },
];

const vocabularyPart1People: { word: string; meaning: string; type: string }[] =
  [
    {
      word: "nod",
      meaning: "gật đầu",
      type: "Nound",
    },
    {
      word: "shake",
      meaning: "rung",
      type: "Verb",
    },
    {
      word: "tilt",
      meaning: "nghiên",
      type: "Verb",
    },
    {
      word: "cry",
      meaning: "khóc",
      type: "Verb",
    },
    {
      word: "look at",
      meaning: "nhìn vào",
      type: "Verb",
    },
    {
      word: "observe",
      meaning: "quan sát",
      type: "Verb",
    },
    {
      word: "smell",
      meaning: "mùi",
      type: "Nound",
    },
    {
      word: "sneeze",
      meaning: "hắc hơi",
      type: "Verb",
    },
    {
      word: "clap",
      meaning: "vỗ tay",
      type: "Verb",
    },
    {
      word: "grab",
      meaning: "vồ lấy",
      type: "Verb",
    },
    {
      word: "hold",
      meaning: "giữ",
      type: "Verb",
    },
    {
      word: "lift",
      meaning: "nâng lên",
      type: "Verb",
    },
    {
      word: "press",
      meaning: "nhấn",
      type: "Verb",
    },
    {
      word: "throw",
      meaning: "ném",
      type: "Verb",
    },
    {
      word: "throw",
      meaning: "ném",
      type: "Verb",
    },
    {
      word: "wink",
      meaning: "nháy mắt",
      type: "Nound",
    },
    {
      word: "laungh",
      meaning: "cười",
      type: "Verb",
    },
  ];

const vocabularyPart1Objects: {
  word: string;
  meaning: string;
  type: string;
}[] = [
  {
    word: "computer",
    meaning: "máy tính",
    type: "Nound",
  },
  {
    word: "monitor",
    meaning: "màn hình",
    type: "Nound",
  },
  {
    word: "fountain",
    meaning: "đài phun nước",
    type: "Nound",
  },
  {
    word: "couch",
    meaning: "đi văng",
    type: "Nuond",
  },
  {
    word: "furniture",
    meaning: "đồ nội thất",
    type: "Nound",
  },
  {
    word: "observe",
    meaning: "quan sát",
    type: "Verb",
  },
  {
    word: "traffic jam",
    meaning: "tắc đường",
    type: "Nound",
  },
  {
    word: "be lined up in rows",
    meaning: "được xếp thành hàng",
    type: "pharve",
  },
  {
    word: "be unoccupied",
    meaning: "không có người ở",
    type: "pharve",
  },
  {
    word: "construction site",
    meaning: "công trường",
    type: "Nound",
  },
  {
    word: "ladder",
    meaning: "thang",
    type: "Nound",
  },
  {
    word: "dig",
    meaning: "đào đất",
    type: "Verb",
  },
  {
    word: "shovel",
    meaning: "xẻng",
    type: "Nound",
  },
  {
    word: "pave the road",
    meaning: "mở đường",
    type: "pharve",
  },
  {
    word: "push the wheelbarrow",
    meaning: "đẩy xe cút kít",
    type: "pharve",
  },
];

const vocabularyPart2: {
  word: string;
  meaning: string;
  type: string;
}[] = [
  {
    word: "proposal",
    meaning: "đề nghị",
    type: "Nound",
  },
  {
    word: "go over",
    meaning: "đi qua",
    type: "Verb",
  },
  {
    word: "laboratory",
    meaning: "phòng thí nghiệm",
    type: "Verb",
  },
  {
    word: "expert",
    meaning: "chuyên gia",
    type: "Verb",
  },
  {
    word: "consult",
    meaning: "than khảo",
    type: "Verb",
  },
  {
    word: "come by",
    meaning: "ghé qua",
    type: "Verb",
  },
  {
    word: "emergency exit",
    meaning: "cửa thoát hiểm",
    type: "Nound",
  },
  {
    word: "out of stock",
    meaning: "hết hàng",
    type: "Nound",
  },
  {
    word: "merger",
    meaning: "sáp nhập",
    type: "Nound",
  },
  {
    word: "dozen",
    meaning: "một tá",
    type: "Nound",
  },
  {
    word: "real estate agent",
    meaning: "đại lý bất động sản",
    type: "Nound",
  },
  {
    word: "manuscript",
    meaning: "bản thảo",
    type: "Nound",
  },
  { word: "press release", meaning: "thông cáo báo chí", type: "Nound" },
  { word: "crew", meaning: "phi hành đoàn", type: "Nound" },
  { word: "renovation", meaning: "cải tạo", type: "Verb" },
  { word: "downstairs", meaning: "tầng dưới", type: "Nound" },
  { word: "bulletin board", meaning: "bảng tin", type: "Nound" },
  { word: "receptionist", meaning: "lễ tân", type: "Nound" },
  { word: "general director", meaning: "tổng giám đốc", type: "Nound" },
  { word: "secretary", meaning: "thư ký", type: "Nound" },
  { word: "maintenance department", meaning: "bộ phận bảo trì", type: "Nound" },
  { word: "bankrupt", meaning: "phá sản", type: "Nound" },
  { word: "deposit", meaning: "đặt cọc", type: "Nound" },
  { word: "shareholder", meaning: "cổ đông", type: "Nound" },
  { word: "dividend", meaning: "cổ tức", type: "Nound" },
  { word: "liquidity", meaning: "thanh khoản", type: "Nound" },
];

const vocabularyPart3: {
  word: string;
  meaning: string;
  type: string;
}[] = [
  {
    word: "junior",
    meaning: "trẻ con",
    type: "Nound",
  },
  {
    word: "transfer",
    meaning: "chuyển giao",
    type: "Nound",
  },
  {
    word: "short-staffed",
    meaning: "biên chế ngắn",
    type: "Nound",
  },
  {
    word: "supervisor",
    meaning: "người quan sát",
    type: "Nound",
  },
  {
    word: "boss",
    meaning: "xếp",
    type: "Nound",
  },
  {
    word: "sales representative ",
    meaning: "người đại diện bán hàng",
    type: "Nound",
  },
  {
    word: "security officer",
    meaning: "nhân viên an ninh",
    type: "Nound",
  },
  {
    word: "administrative assistant",
    meaning: "trợ lý hành chính",
    type: "Nound",
  },
  {
    word: "store clerk",
    meaning: "nhân viên bán hàng",
    type: "Nound",
  },
  {
    word: "personnel",
    meaning: "nhân viên",
    type: "Nound",
  },
  {
    word: "salesperson ",
    meaning: "nhân viên bán hàng",
    type: "Nound",
  },
  {
    word: "crew",
    meaning: "phi hành đoàn",
    type: "Nound",
  },
  {
    word: "coworker",
    meaning: "đồng nghiệp",
    type: "Nound",
  },
  {
    word: "colleague",
    meaning: "đồng nghiệp",
    type: "Nound",
  },
  {
    word: "plumber",
    meaning: "thợ sửa ống nước",
    type: "Nound",
  },
  {
    word: "receptionist",
    meaning: "lễ tân",
    type: "Nound",
  },
  {
    word: "automatic mechanic",
    meaning: "thợ máy tự động",
    type: "Nound",
  },
  {
    word: "fill out an application",
    meaning: "điền vào đơn xin việc",
    type: "Nound",
  },
  {
    word: "cover letter",
    meaning: "thư xin việc",
    type: "Nound",
  },
  {
    word: "candidate",
    meaning: "ứng viên",
    type: "Nound",
  },
  {
    word: "qualifications",
    meaning: "trình độ chuyên môn",
    type: "Nound",
  },
  {
    word: "certificate",
    meaning: "chứng chỉ",
    type: "Nound",
  },
  {
    word: "company poilcy",
    meaning: "chính sách của công ty",
    type: "Nound",
  },
  {
    word: "be entitled to V",
    meaning: "được quyền làm gi đó",
    type: "Nound",
  },
  {
    word: "replacement",
    meaning: "sự thay thế",
    type: "Nound",
  },
  {
    word: "annual salary ",
    meaning: "mức lương hàng năm",
    type: "Nound",
  },
  {
    word: "vacancy",
    meaning: "vị trí còn trống",
    type: "Nound",
  },
  {
    word: "workplace",
    meaning: "nơi làm việc",
    type: "Nound",
  },
  {
    word: "working conditions",
    meaning: "điều kiện làm việc",
    type: "Nound",
  },
  {
    word: "reception desk ",
    meaning: "bàn lễ tân",
    type: "Nound",
  },
  {
    word: "minimum requirements",
    meaning: "yêu cần tối thiểu",
    type: "Nound",
  },
  {
    word: "inventory",
    meaning: "hàng tồn kho",
    type: "Nound",
  },
  {
    word: "refund",
    meaning: "hoàn tiền",
    type: "Nound",
  },
  {
    word: "manufacturer",
    meaning: "nhà chế tạo",
    type: "Nound",
  },
  {
    word: "warehouse",
    meaning: "kho",
    type: "Nound",
  },
  {
    word: "stockroom",
    meaning: "kho chứa hàng",
    type: "Nound",
  },
  {
    word: "expedite",
    meaning: "thúc giục",
    type: "Nound",
  },
  {
    word: "defects",
    meaning: "khuyết tật",
    type: "Nound",
  },
  {
    word: "warranty",
    meaning: "sự đảm bảo",
    type: "Nound",
  },
  {
    word: "rebate",
    meaning: "hạ giá",
    type: "Nound",
  },
  {
    word: "registration",
    meaning: "sự đăng ký",
    type: "Nound",
  },
];
export {
  listeningTestList,
  readingTestList,
  testKitList,
  tipsCardList,
  vocabularyCardList,
  vocabularyPart1People,
  vocabularyPart1Objects,
  vocabularyPart2,
  vocabularyPart3,
};
