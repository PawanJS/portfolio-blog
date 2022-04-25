import Container from '@/components/container';
import MoreStories from '@/components/more-stories';
import HeroPost from '@/components/hero-post';
import Intro from '@/components/intro';
import Layout from '@/components/layout';
import { getAllPostsForHome } from '@/lib/api';
import Head from 'next/head';
import { HOME_OG_IMAGE_URL } from '@/lib/constants';

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <meta property="og:image" content={HOME_OG_IMAGE_URL}></meta>
          <meta
            property="og:description"
            content="Selected Work and Writings by Pawan JS"
          ></meta>
          <meta
            name="description"
            content="Selected Work and Writings by Pawan JS"
          ></meta>
          <title>Pawan JS</title>
          <meta property="og:title" content="Pawan JS"></meta>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.metadata.cover_image}
              date={heroPost.created_at}
              author={heroPost.metadata.author}
              slug={heroPost.slug}
              excerpt={heroPost.metadata.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
