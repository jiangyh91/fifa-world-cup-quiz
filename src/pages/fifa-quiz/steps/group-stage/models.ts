import Argentina from './flags/Argentina.png';
import Australia from './flags/Australia.png';
import Belgium from './flags/Belgium.png';
import Brazil from './flags/Brazil.png';
import Colombia from './flags/Colombia.png';
import CostaRica from './flags/Costa-Rica.png';
import Croatia from './flags/Croatia.png';
import Denmark from './flags/Denmark.png';
import Egypt from './flags/Egypt.png';
import England from './flags/England.png';
import France from './flags/France.png';
import Germany from './flags/Germany.png';
import Iceland from './flags/Iceland.png';
import Iran from './flags/Iran.png';
import Japan from './flags/Japan.png';
import Mexico from './flags/Mexico.png';
import Morocco from './flags/Morocco.png';
import Nigeria from './flags/Nigeria.png';
import Panama from './flags/Panama.png';
import Peru from './flags/Peru.png';
import Poland from './flags/Poland.png';
import Portugal from './flags/Portugal.png';
import Russia from './flags/Russia.png';
import SaudiArabia from './flags/Saudi-Arabia.png';
import Senegal from './flags/Senegal.png';
import Serbia from './flags/Serbia.png';
import SouthKorea from './flags/South-Korea.png';
import Spain from './flags/Spain.png';
import Sweden from './flags/Sweden.png';
import Switzerland from './flags/Switzerland.png';
import Tunisia from './flags/Tunisia.png';
import Uruguay from './flags/Uruguay.png';

export interface Group {
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
  俄罗斯: Russia,
  埃及: Egypt,
  沙特阿拉伯: SaudiArabia,
  乌拉圭: Uruguay,
  伊朗: Iran,
  摩洛哥: Morocco,
  葡萄牙: Portugal,
  西班牙: Spain,
  澳大利亚: Australia,
  丹麦: Denmark,
  法国: France,
  秘鲁: Peru,
  阿根廷: Argentina,
  克罗地亚: Croatia,
  冰岛: Iceland,
  尼日利亚: Nigeria,
  巴西: Brazil,
  哥斯达黎加: CostaRica,
  瑞士: Switzerland,
  塞尔维亚: Serbia,
  德国: Germany,
  韩国: SouthKorea,
  墨西哥: Mexico,
  瑞典: Sweden,
  比利时: Belgium,
  英格兰: England,
  巴拿马: Panama,
  突尼斯: Tunisia,
  哥伦比亚: Colombia,
  日本: Japan,
  波兰: Poland,
  塞内加尔: Senegal
};

export function getInitialGroupStageValues() {
  return teamGroups.map(() => ["", ""]);
}
