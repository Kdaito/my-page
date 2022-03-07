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
    title: "高校進学",
    year: "2017-04-01",
    contents:
      "愛知県の県立高校に進学。サッカー部に所属。この頃は特に将来の事を考えることはなく、来たる大学受験と成人に少々怯えながらも、毎日部活、勉強に励んでいた。毎週水曜日にあるランメニューが最高のストレスで、今思い出しても嫌な気持ちになる。",
  },
  {
    id: "3",
    title: "大学進学",
    year: "2020-04-01",
    contents:
      "滋賀大学に進学。入学時には具体的な目標ややりたいことがなく、「俺は一人で静かに過ごしたいぜ」とこじらせてしまい部活にもサークルにも参加しなかった。また、コロナ禍で大学がオンラインになったことも重なり、ぼっち大学生に。一年生の秋頃から約一年間居酒屋のバイトをして人見知りを克服した。",
  },
  {
    id: "2",
    title: "プログラミングスクール入学",
    year: "2020-11-01",
    contents:
      "一年生の夏頃に、学校の授業で触れたことをきっかけにプログラミングの勉強を開始。ぼっち大学生になったことが功を奏し、ほとんどの時間をプログラミングの勉強に費やす。本格的にプログラミングを学びたいと思い、秋頃にスクールに入学する。この頃からwebエンジニアになりたいという目標を持つようになる。",
  },
  {
    id: "1",
    title: "長期インターン開始",
    year: "2021-05-25",
    contents:
      "約四ヶ月の学習期間を終えて、スクールを卒業。実務経験を求めて長期就業型インターンを探し始める。ここでイーストフィールズ株式会社様に拾っていただき、念願のwebエンジニアとしての長期インターン開始。主にフロントエンドを中心に開発に従事。",
  },
];
