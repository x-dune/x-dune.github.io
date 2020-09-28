import { MailIcon, GithubIcon, LinkedInIcon, SwitchIcon } from "./icons"
import ContactButton from "./ContactButton"

const ContactSection = () => (
  <div className="bg-banner bg-cover bg-fixed">
    <div className="flex justify-center bg-transparent-purple-2">
      <div className="py-10 lg:p-10">
        <div className="px-5 lg:px-0">
          <h2 className="text-4xl">Contact</h2>
          <div className="pt-2"></div>
          <h3 className="text-lg inline">Where to find me on the internet</h3>
        </div>
        <div className="pt-2"></div>
        <div className="flex flex-col items-start">
          <ContactButton colorClass="bg-purple-800" cursorClass="cursor-text">
            <MailIcon className="h-8 w-8" />
            <span className="pl-4 text-md">adam.ho.buss@gmail (dot) com</span>
          </ContactButton>
          <ContactButton
            colorClass="bg-blue-700"
            href="https://www.linkedin.com/in/adam-ho/"
          >
            <LinkedInIcon className="h-8 w-8" />
            <span className="pl-4">linkedin.com/in/adam-ho/</span>
          </ContactButton>
          <ContactButton
            colorClass="bg-black"
            href="https://github.com/adamdune"
          >
            <GithubIcon className="h-8 w-8" />
            <div className="pl-4">
              <p>github.com/adamdune</p>
              <p>There's not a lot there...</p>
            </div>
          </ContactButton>
          <ContactButton
            colorClass="bg-red-800"
            cursorClass="cursor-not-allowed"
          >
            <SwitchIcon className="h-8 w-8" />
            <div className="pl-4">
              <p>Add me on Nintendo Switch. </p>
              <p>Let's play a round of Overcooked.</p>
              <p>Friend Code: SW-3785-NOT-REALLY</p>
            </div>
          </ContactButton>
          <p className="px-5 lg:px-0">
            <span>If you need my </span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://google.com"
              className="underline text-blue-300 hover:text-blue-500 hover:no-underline"
            >
              resume
            </a>
            <span> for some reason</span>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default ContactSection
