import Head from "next/head"
import TechSection from "../components/TechSection"
import HeroBanner from "../components/HeroBanner"
import WorkSection from "../components/WorkSection"
import ContactSection from "../components/ContactSection"
import SideProjectSection from "../components/SideProjectSection"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adam Ho</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Head>

      <main>
        <HeroBanner />
        <SideProjectSection />
        <WorkSection />
        <TechSection />
        <ContactSection />
      </main>
    </div>
  )
}
