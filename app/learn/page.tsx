import PageHeading from "../components/shared/PageHeading";
import { BookOpen } from "lucide-react";

const tutorials = [
  {
    title: "Mint your First CashTokens on Bitcoin Cash",
    subtitle: "Token Pioneers Tutorial 1",
    link: "https://www.bitcoincashsite.com/blog/token-pioneers-cashtokens-tutorial-1",
  },
  {
    title: "Mint your First NFTs on Bitcoin Cash",
    subtitle: "Token Pioneers Tutorial 2",
    link: "https://www.bitcoincashsite.com/blog/token-pioneers-cashtokens-tutorial-2",
  },
  {
    title: "Understanding and Working with BCMR: CashTokens Metadata",
    subtitle: "Token Pioneers Tutorial 3",
    link: "https://www.bitcoincashsite.com/blog/token-pioneers-cashtokens-tutorial-3",
  },
  {
    title:
      "Create an NFT Ticket & Warrant Canary with CashTokens Parsable NFTs",
    subtitle: "Token Pioneers Tutorial 4",
    link: "https://www.bitcoincashsite.com/blog/token-pioneers-cashtokens-tutorial-4",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="bg-gradient-to-r from-background via-secondary to-background p-8 mb-8">
        <PageHeading title="Learn">
          <p className="text-lg max-w-2xl mb-6 text-gray-300">
            To get started, here are two foundational CashTokens tutorials.
            We&apos;ll be adding more resources to this page soon.
          </p>
        </PageHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {tutorials.map((tutorial, index) => (
          <a
            key={index}
            href={tutorial.link}
            target="_blank"
            className="group bg-secondary p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-800 hover:border-accent"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-background rounded-lg">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
              {tutorial.title}
            </h3>

            <p className="text-gray-400 text-sm">{tutorial.subtitle}</p>
          </a>
        ))}
      </div>
    </main>
  );
}
