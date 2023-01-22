import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="index.css"></link>
        <title>Teddy Feldmann</title>
      </Head>
      <main>
        <div>
          <h1>Teddy Feldmann</h1>
          <div>
            <p>
              Student at Georgia Tech studying Computer Science and Materials
              Science.
            </p>
            <p>
              Researching the mining and resource processing technologies
              underpinning our transition to a net zero-carbon economy.
            </p>
            <p>
              Tweeting about mining, America, and my views on the world{" "}
              <a
                href="https://twitter.com/teddyfeld"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              , and writing about them on my newsletter,{" "}
              <a
                href="https://www.itstimetomine.us"
                target="_blank"
                rel="noreferrer"
              >
                It\'s Time to Mine
              </a>
              .
            </p>
            <p>
              Reach out to me on{" "}
              <a
                href="https://twitter.com/teddyfeld"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/teddyfeldmann/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              , or{" "}
              <a
                href="mailto:teddymfeldmann@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                email
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
