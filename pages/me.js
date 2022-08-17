import Container from '../components/container';
import MoreStories from '../components/more-stories';
import Header from '../components/header';
import SectionSeparator from '../components/section-separator';
import { getAllPostsForHome, getAuthorDetails } from '../lib/api';
import { imageBuilder } from '../lib/sanity';

import Layout from '../components/layout';
import Head from 'next/head';
import PostBody from '../components/post-body';

const me = ({ allPosts, preview, authorDetails }) => {
  return (
    <Layout preview={preview}>
      <Container>
        <Header />

        <article>
          <Head>
            <title>About the Author</title>
          </Head>
          <div className="flex flex-col justify-start items-center">
            <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
              <img
                width={1080}
                height={540}
                alt={`Cover Image for About the Author`}
                className={
                  'shadow-small hover:shadow-medium transition-shadow duration-200'
                }
                src={imageBuilder(authorDetails[0].image)
                  .height(540)
                  .width(1080)
                  .url()}
              />
            </div>
            <PostBody content={authorDetails[0].bio} />
          </div>
        </article>

        <SectionSeparator />
        {allPosts?.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </Layout>
  );
};
export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const authorDetails = await getAuthorDetails();
  return {
    props: { allPosts, preview, authorDetails },
    revalidate: 1,
  };
}

export default me;
