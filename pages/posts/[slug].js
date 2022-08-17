import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import Header from '../../components/header';
import PostHeader from '../../components/post-header';
import Comments from '../../components/comments';
import SectionSeparator from '../../components/section-separator';
import Layout from '../../components/layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Form from '../../components/form';
import { imageBuilder } from '../../lib/sanity';
import Head from 'next/head';

function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return '';
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join('');
      })
      // join the paragraphs leaving split by one space
      .join(' ')
  );
}

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(post);
  return (
    <>
      <NextSeo
        title={post.title}
        description={
          post?.description ?? toPlainText(post.body).substring(0, 200)
        }
        canonical={`https://annalisas.site/posts/${post.slug}`}
        additionalMetaTags={[
          { name: 'keywords', content: post.tags },
          { name: 'author', content: post.author.name },
          { name: 'publisher', content: post.author.name },
        ]}
        openGraph={{
          title: post.title,
          description:
            post?.description ?? toPlainText(post.body).substring(0, 150),
          url: `https://annalisas.site/posts/${post.slug}`,
          type: 'article',
          article: {
            publishedTime: post.date,
            // modifiedTime: '2018-01-21T18:04:43Z',
            section: 'Writing',
            authors: [post.author.name],
            tags: post.tags,
          },
          images: [
            {
              url: imageBuilder(post.coverImage).width(850).height(650).url(),
              width: 850,
              height: 650,
              alt: post?.coverImage?.alt ?? post.title,
            },
          ],
        }}
      />
      <Layout preview={preview}>
        <Container>
          <Header />
          {router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                />
                <ArticleJsonLd
                  url={`https://annalisas.site/posts/${post.slug}`}
                  title={post.title}
                  images={[
                    imageBuilder(post.coverImage).width(850).height(650).url(),
                  ]}
                  datePublished={post.date}
                  authorName={[
                    {
                      name: post.author.name,
                      url: 'https://annalisas.site/me',
                    },
                  ]}
                  publisherName="Annalisa Garofalo"
                  description={
                    post?.description ??
                    toPlainText(post.body).substring(0, 150)
                  }
                />
                <PostBody content={post.body} />
              </article>

              <Comments comments={post.comments} />
              <Form _id={post._id} />

              <SectionSeparator />
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}
