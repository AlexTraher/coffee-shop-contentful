import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { getContent } from "@/lib/api"
import { GetStaticProps, InferGetStaticPropsType } from "next"

export default function IndexPage({ content, preview }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js</title>
        <meta
          name="description"
          content="Next.js template for building apps with Radix UI and Tailwind CSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section 
      style={{backgroundImage: `url(${content.headerBanner.backgroundImage.url})` }}
      className="container grid min-h-screen items-center gap-6 bg-contain bg-no-repeat pt-6 pb-8 md:py-10">
        <div
          className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl text-white">
            {content.headerBanner.headerText}
            {/* Beautifully designed components <br className="hidden sm:inline" />
            built with Radix UI and Tailwind CSS. */}
          </h1>
        </div>
        <div className="flex gap-4">
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const content = await getContent(preview);

  
  return {
    props: {
      content,
      preview
    }, // will be passed to the page component as props
  }
}
