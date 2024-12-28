import React from 'react'
import Link from 'next/link'
import NewsletterSection from '@/components/NewsletterSection'
import ProjectSection from '@/components/ProjectSection'

export default function page() {
  return (
    <>
    <section className="page__title p_relative">
      <div className="bg-layer parallax-bg" data-parallax='{"y": 20}' style={{ backgroundImage: "url(images/resource/page-title.png)" }}></div>
      <div className="auto_container">
        <div className="content-box p_relative">
          <h1 className="title">Projects</h1>
          <ul className="bread-crumb">
            <li><Link href="/" passHref>Home</Link></li>
            <li><span> - </span>Projects{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <ProjectSection/>
    <NewsletterSection/>
    </>
  )
}
