import { Layout, Text } from "@vercel/examples-ui"
import { Chat } from "../components/Chat"
import { CodeBlock } from "../components/CodeBlock"
import Link from "next/link"
import Image from "next/image"
import {
  ANNOUNCEMENT_URL,
  DISCORD_URL,
  DOWNLOAD_URL,
} from "../components/common"
import Tooltip from "../components/Tooltip"
import { Button } from "../components/Button"

const windowaiExample = `
// Get the active model from the window.ai API 
await window.ai.getCurrentModel()

// Get completions from the window.ai API
await window.ai.getCompletion(
  {
    messages: [...last10messages],
  },
  {
    onStreamResult: (result: any, error: any) => {
      console.log(result.message.content)
    },
  })
`

const Section = ({ children }: any) => {
  return (
    <section className="flex flex-col gap-3 w-full max-w-5xl mx-auto px-8 pb-20">
      {children}
    </section>
  )
}

function Home() {
  return (
    <div className="flex flex-col gap-3 w-full py-16">
      <section className="flex flex-col gap-6 max-w-5xl mx-auto px-8">
        <Text variant="h1">Window</Text>
        <Text variant="h2">Use your own AI models on the web</Text>

        <Text className="text-zinc-600">
          In this example, a simple chat bot is implemented in one file, with no
          backend. Using the{" "}
          <Link href={DISCORD_URL} className="underline">
            Chrome Extension
          </Link>{" "}
          <Tooltip content="While the extension is being tested and developed, please join the Discord to download the beta build and get notified about updates.">
            ⚠️
          </Tooltip>
          , you can choose which model to use with apps built on window.ai —
          demo below.
        </Text>
      </section>

      <Section>
        <div className="flex justify-between w-full md:space-x-4 md:flex-row flex-col space-y-8 md:space-y-0">
          <CodeBlock language="js" value={windowaiExample} />
          <div className="pt-8 w-full">
            <Chat />
          </div>
        </div>
      </Section>

      <div className="bg-slate-300">
        <Section>
          <div className="w-full flex flex-col sm:flex-row justify-between items-center ">
            <div className="max-w-lg p-10 flex flex-col space-y-4">
              <Text variant="h2">Take control of your AI models</Text>
              <Text className="text-zinc-600">
                The Window extension allows you to configure the models you use
                on the web. You can choose from OpenAI, Together, Cohere, or
                even an AI{" "}
                <Link
                  className="underline"
                  href="https://github.com/alexanderatallah/Alpaca-Turbo#using-the-api"
                  target="_blank"
                >
                  running on your computer
                </Link>{" "}
                if you need privacy.
              </Text>
            </div>
            <Image
              src="/configure.png"
              width={1000}
              height={1000}
              alt="configure"
              className="flex-grow shadow-md m-12"
            />
          </div>
        </Section>
      </div>

      <Section>
        <div className="justify-between w-full flex flex-col sm:flex-row items-center">
          <Image
            src="/history.png"
            width={1000}
            height={1000}
            alt="history"
            className="flex-grow shadow-md m-12"
          />
          <div className="max-w-lg p-10 flex flex-col space-y-4">
            <Text variant="h2">Save your History</Text>
            <Text className="text-zinc-600">
              The Window extension keeps a history of all the messages you send
              and receive. You can use this history to train your own AI models.
            </Text>
          </div>
        </div>
      </Section>

      <div className="bg-slate-300">
        <Section>
          <div className="justify-between w-full flex flex-col sm:flex-row items-center">
            <div className="max-w-lg p-10 flex flex-col space-y-4">
              <Text variant="h2">Learn more</Text>
              <Text className="text-zinc-600">
                Read the{" "}
                <Link
                  className="underline"
                  href={ANNOUNCEMENT_URL}
                  target="_blank"
                >
                  announcement
                </Link>
              </Text>
              <Button onClick={() => window.open(DISCORD_URL, "_blank")}>
                Join the community
              </Button>
            </div>
            <video width="500" controls className="flex-grow shadow-md m-12">
              <source src="demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Section>
      </div>
    </div>
  )
}

Home.Layout = Layout

export default Home