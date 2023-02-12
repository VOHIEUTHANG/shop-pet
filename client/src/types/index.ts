type Package = {
  _id: string;
  packageNumber: Number;
  partKey: Number;
};

type PackageType = Package & {
  questions: string[];
};

type AnswerType = {
  key: string;
  result: Boolean;
  value: string;
  _id: string;
};

type PartType = {
  name: string;
  partSection: string;
  partKey: string;
  packages: PackageType[];
};

type PackageDetailsType = Package & {
  questions: {
    audio: string;
    photo: string;
    _id: string;
    answerSheetList: {
      question: string;
      _id: string;
      answerList: AnswerType[];
    }[];
  }[];
};

export type { PackageType, PackageDetailsType, PartType };
