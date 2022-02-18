type Detail = {
  title: string;
  description: Array<string>;
  descriptionOption: Array<any>;
};

export const details: Array<Detail> = [
  {
    title: "CV",
    description: ["달소(Dalso, ダルソ)"],
    descriptionOption: [],
  },
  {
    title: "성별",
    description: ["남자"],
    descriptionOption: [],
  },
  {
    title: "나이",
    description: ["n살"],
    descriptionOption: [{n: 20}],
  },
  {
    title: "키",
    description: ["ncm"],
    descriptionOption: [{n: 185}],
  },
  {
    title: "체중",
    description: ["nkg"],
    descriptionOption: [{n: 72}],
  },
  {
    title: "생일",
    description: ["n월 m일"],
    descriptionOption: [{n: 12, m: 1}],
  },
  {
    title: "좋아하는 것",
    description: ["달콤한 것(디저트 류)"],
    descriptionOption: [],
  },
  {
    title: "싫어하는 것",
    description: ["불필요한 것(하단 스토리에서 언급)"],
    descriptionOption: [],
  },
  {
    title: "음원 가공 가능 여부",
    description: [
      "가능(라이브에 한해서 조절만을 허가)",
      "음원의 음을 조절하거나 피치를 올리거나 내리는 것을 허가",
    ],
    descriptionOption: [],
  },
  {
    title: "파생 캐릭터 생성 가능 여부",
    description: ["NO"],
    descriptionOption: [],
  },
  {
    title: "상업적 이용",
    description: ["CV에게 연락을 부탁드립니다."],
    descriptionOption: [],
  },
  {
    title: "2차 창작의 허용 가능 범위",
    description: [
      "성적 표현 가능 (BL: R-18+, N/HL: R-15)",
      "유혈 가능, 내장 또는 신체 절단 등의 묘화 불가",
    ],
    descriptionOption: [],
  },
  {
    title: "일러스트",
    description: ["DANG님 + TOK님(Dominant)"],
    descriptionOption: [],
  },
];
