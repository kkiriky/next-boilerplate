import { GetServerSideProps } from 'next';
import { getServerSideSitemapLegacy, ISitemapField } from 'next-sitemap';
// import dayjs from 'dayjs';

interface PostListItem {
  id: string;
  updatedAt: Date;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // 상세 페이지의 목록을 가져옴 (상세페이지의 정보는 id, updatedAt 2가지면 충분)
  const response = await fetch(`https://백엔드 API 주소/posts`);
  const postList: PostListItem[] = await response.json();

  const portfolioPages: ISitemapField[] = postList.map((post) => {
    return {
      loc: `https://백엔드 도메인/portfolio/${post.id}`, // Absolute url
      // lastmod: dayjs(post.updatedAt).format('YYYY-MM-DDTHH:mm:ss'),
      changefreq: 'daily',
    };
  });

  return getServerSideSitemapLegacy(ctx, portfolioPages);
};

export default function Sitemap() {}
