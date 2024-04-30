'use client'

import Image from "next/image";
import PageLayout from "@/components/pagelayout";

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen justify-start p-24">
    <PageLayout target="/contact" currPage=">">

      <div className="slide-in flex mb-16 flex-col">
          <h3 className="text-xl font-bold mb-2">Game Recommendation Engine</h3>
          <a className="text-base custom-link" href="https://github.com/WaseeA/GameRecommenderEngine">Github Link ↪️</a>
          <p className="text-lg max-w-4xl">
            Developed a Game Recommendation Engine for AMD RSX 
            using machine learning algorithms (SVD) in Python, NumPy, 
            scikit-learn. Currently in progress.
          </p>
          <div className="mr-8">
            <Image src="/RSX Game Recommendations.png" alt="Project Image" width={896} height={600} />
          </div>
      </div>

      <div className="slide-in flex mb-16 flex-col">
          <div >
            <h3 className="text-xl font-bold mb-2">Langchain AI Contributions</h3>
            <a className="text-base custom-link" href="https://github.com/langchain-ai/langchain/pull/13257">Github Link ↪️</a>
            <p className="text-lg max-w-4xl">
            Built a Pandas DataFrame output parser, boosting LangChain’s compatibility with one
            of Python’s most popular data analytics libraries for enhanced data manipulation and
            analysis.
            </p>
            <p className="text-lg max-w-4xl">Demonstrated technical proficiency by successfully integrating and merging the Pandas
            DataFrame output parser into LangChain.</p>
          </div>
          <div className="mr-8">
            <Image src="/langchain.jpg" alt="Project Image" width={896} height={600} />
          </div>
        </div>

        <div className="slide-in flex mb-16 flex-col">
          <div >
            <h3 className="text-xl font-bold mb-2">Medical Supply Chains</h3>
            <a className="text-base custom-link" href="https://github.com/WaseeA/medical-supply-chains">Github Link ↪️</a>
            <p className="text-lg max-w-4xl">
              Developed a vaccine distribution App using Python, Object Oriented Principles, Webscraping, and visual plotting libraries.
            </p>
            <p className="text-lg max-w-4xl">
              Ranked 3rd out of 100 teams
            </p>
          </div>
          <div className="mr-8">
            <Image src="/medical-supply-chains.png" alt="Project Image" width={896} height={600} />
          </div>
        </div>
    </PageLayout>
  </main>
  );
}
