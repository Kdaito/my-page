import NextHead from 'next/head';

type Props = {
  title: string;
};

const Head: React.VFC<Props> = ({ title }) => (
  <NextHead>
    <title>K.Hiroto | {title}</title>
    <meta property="description" content="小林大斗のホームページです。" />
    <meta property="og:title" content={`K.Hiroto | ${title}`} />
    <meta property="og:description" content="小林大斗のホームページです。" />
    {/* <meta property="og:image" content={data.thumbnailUrl} /> */}
  </NextHead>
);

export default Head;
