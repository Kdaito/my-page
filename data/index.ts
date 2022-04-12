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
      "I entered public highschool in Aichi prefecture in 2017. My high school days were one of the most wonderful moments I ever had in my life. During my highschool days, I studied hard everyday, and played soccer with so much effort. Meanwhile, my future vision was unclear because I was not sure what I want to do at that time. Although I loved playing soccer, I really hated running training every Wednesday in soccer club. Even now, I'm getting nervous when I remenber it.",
  },
  {
    id: "3",
    title: "Entrance to University",
    year: "2020-04-01",
    contents:
      "I entered Shiga University in 2020. I haven't joined any club acrivities or associations because my priority was to find out what I want to do in the future. In addition to this, COVID-19 made me completely alone. In my first year of university, I started working part-time at Izakaya (Japanese style pub) which helped me overcome my shyness",
  },
  {
    id: "2",
    title: "Studying at Programming School",
    year: "2020-11-01",
    contents:
      "I began to study programming because I heard professor saying about the potential of programming. Thanks to my loneliness (due to the pandemic), I spent most of my time to study programming. Also, I entered an online programming school in autumn of this year because I wanted to study it more seriously. Since then, I set a goal to become a web developer.",
  },
  {
    id: "1",
    title: "Start working as a web developer",
    year: "2021-05-25",
    contents:
      "I graduated from the programming school after finishing 4 months of online curriculum. After that, I was looking for some internships which is related to web development, and I started working at Eastfields.Co., Ltd. as a web developer in May 2021. I mainly develop front-end at there.",
  },
];
