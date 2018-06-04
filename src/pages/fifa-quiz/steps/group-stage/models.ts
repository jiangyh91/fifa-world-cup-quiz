interface Group {
  name: string;
  teams: Array<string>;
}
export const teamGroups: Array<Group> = [
  {
    name: "A",
    teams: ["俄罗斯", "埃及", "沙特阿拉伯", "乌拉圭"]
  },
  {
    name: "B",
    teams: ["伊朗", "摩洛哥", "葡萄牙", "西班牙"]
  },
  {
    name: "C",
    teams: ["澳大利亚", "丹麦", "法国", "秘鲁"]
  },
  {
    name: "D",
    teams: ["阿根廷", "克罗地亚", "冰岛", "尼日利亚"]
  },
  {
    name: "E",
    teams: ["巴西", "哥斯达黎加", "瑞士", "塞尔维亚"]
  },
  {
    name: "F",
    teams: ["德国", "韩国", "墨西哥", "瑞典"]
  },
  {
    name: "G",
    teams: ["比利时", "英格兰", "巴拿马", "突尼斯"]
  },
  {
    name: "H",
    teams: ["哥伦比亚", "日本", "波兰", "塞内加尔"]
  }
];

export const flagMapping: { [key: string]: string } = {
  俄罗斯: "https://lipis.github.io/flag-icon-css/flags/4x3/ru.svg",
  埃及: "https://lipis.github.io/flag-icon-css/flags/4x3/eg.svg",
  沙特阿拉伯: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  乌拉圭: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  伊朗: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  摩洛哥: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  葡萄牙: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  西班牙: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  澳大利亚: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  丹麦: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  法国: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  秘鲁: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  阿根廷: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  克罗地亚: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  冰岛: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  尼日利亚: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  巴西: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  哥斯达黎加: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  瑞士: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  塞尔维亚: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  德国: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  韩国: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  墨西哥: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  瑞典: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  比利时: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  英格兰: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  巴拿马: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  突尼斯: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  哥伦比亚: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  日本: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  波兰: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg",
  塞内加尔: "https://lipis.github.io/flag-icon-css/flags/4x3/sa.svg"
};
