export interface TypewriterConfig {
  texts: string[];
  cursor: string;
  typeSpeed: number;
  deleteSpeed: number;
  pauseBeforeDelete: number;
  pauseBeforeNext: number;
}

const data: Record<string, TypewriterConfig> = {
  zh: {
    texts: [
      "欢迎来到 SiiWay 团队的官方主页！",
      "在 AI 时代中构建开源软件",
      "Ciallo～(∠・ω< )⌒★"
    ],
    cursor: "_",
    typeSpeed: 80,
    deleteSpeed: 40,
    pauseBeforeDelete: 2000,
    pauseBeforeNext: 150,
  },
  en: {
    texts: [
      "Welcome to SiiWay Team's Official Homepage!",
      "Build open-source software in the AI era",
      "Ciallo～(∠・ω< )⌒★"
    ],
    cursor: "_",
    typeSpeed: 60,
    deleteSpeed: 40,
    pauseBeforeDelete: 2000,
    pauseBeforeNext: 150,
  },
};

export default data;
