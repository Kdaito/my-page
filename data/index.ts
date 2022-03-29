type Products = {
  title: string;
  tags: string[];
  discription: string;
  imageSrc: string;
  url: string;
  githubUrl: string;
}[];

export const products: Products = [
  {
    title: "Kobanashi",
    tags: ["Laravel", "Vue.js", "Vuetify", "Heroku"],
    discription:
      "PHPのフレームワークであるLaravelを使用してSNSを作成しました。バックエンドAPIをLaravelで作成し、フロントエンドはVue.jsを使用しました。サインアップ、投稿、いいね、フォロー機能などが利用できます。認証にはJWT認証を導入、UIはVuetifyで整えました。Herokuを使用してデプロイしておりますので、興味がある方は試してみてください。",
    imageSrc: "/products/Kobanashi.png",
    url: "https://hirotolaravelproduct.herokuapp.com/",
    githubUrl: "https://github.com/Kdaito/laravel_portfolio",
  },
  {
    title: "look-for",
    tags: [
      "TypeScript",
      "React.js",
      "MUI",
      "React Hook Form",
      "Yup",
      "Firebase",
    ],
    discription:
      "JavaScriptライブラリであるReact.jsを使用して、募集サイトを作成しました。認証機能やDBなどはFirebaseを使用し、UIはMUIを使用して整えました。また、入力操作の多いアプリになったので、React Hook Form、Yupスキーマを使用して詳細なバリデーションを追加しました。",
    imageSrc: "/products/look-for.png",
    url: "",
    githubUrl: "https://github.com/Kdaito/look-for",
  },
  {
    title: "Hiroto-Blog",
    tags: ["TypeScript", "Next.js", "MDX", "Tailwind.css"],
    discription:
      "JavaScriptのフレームワークであるNext.jsを使用して、自分のテックブログを作成しました。見た目はTailwind.cssを使用してテックブログらしからぬ柔らかい見た目にしてみました。",
    imageSrc: "/products/hiroto-blog.jpeg",
    url: "https://my-blog-rho-blue.vercel.app/",
    githubUrl: "https://github.com/Kdaito/my-page",
  },
];

type Historys = {
  id: string;
  title: string;
  year: string;
  contents: string;
}[];

export const histories: Historys = [
  {
    id: "4",
    title: "Entrance to highschool",
    year: "2017-04-01",
    contents:
      "I entered pubilc highschool in Aichi prefecture in 2017. I joined scoocer club in high school, because I have been playing it since I was a child. During my highschool days, I studied hard and played soccer with so much effort. Meanwhile, my future vision was unclear because I was not sure what I want to do at that time. Although I loved playing soccer, I really hated running training every Wednesday in soccer club. Even now, I'm getting nurvous when I remenber it.",
  },
  {
    id: "3",
    title: "Entrance to University",
    year: "2020-04-01",
    contents:
      "I entered Shiga University in 2020. I didn't join any club acrivities or groups, because, these days, I did'nt have a specific goal, and I wanted to value my alone time to find it. In addition to these, I became completely alone because of COVID-19 pandemic. By the way, I overcomed severe shyness by working Izakaya(Japanese style pub), in those days.",
  },
  {
    id: "2",
    title: "Studying at Programming School",
    year: "2020-11-01",
    contents:
      "I began to studying programming, because I heard Profeccer saying about it at a class in my first year University student. Thanks to my loneliness, I spend most of my time to study programming. I entered an online programming school in the autumn of this year, because I wanted to study it more seriously. From this time, I setted a goal to become a web developer.",
  },
  {
    id: "1",
    title: "Start working as a web developer",
    year: "2021-05-25",
    contents:
      "I graduated programming school after finishing online curriculum for about 4 month. After then, I was looking for some internships which is related to web development, and I start working Eastfields.Co., Ltd. as a web developer in May 2021. I mainly develop front-end at there.",
  },
];
