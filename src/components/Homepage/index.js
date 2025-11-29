import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import HomepageFeatures from '@/components/Homepage/Features'
import LatestNews from '@/components/LatestNews'
import HeroBanner from '@/components/HeroBanner'

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Codelinker Ltd. is a software development powerhouse trusted by leading organizations since 2019 developing custom solutions in web applications, mobile platforms, cloud infrastructure, and enterprise systems.'
    >
      <main className='background-grid background-grid--fade-out'>
        <HeroBanner />
        <HomepageFeatures />
        <LatestNews recentPosts={recentPosts} homePageBlogMetadata={homePageBlogMetadata} />
      </main>
    </Layout>
  )
}
