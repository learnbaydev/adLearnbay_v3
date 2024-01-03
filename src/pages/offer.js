import Head from "next/head";
import Navbar from "../components/Global/AdsNavbar/Navbar";
import Scholarship from "../components/Scholarship/scholarship";

function scholarship() {
  return (
    <>
      <div>
        <Head>
          <title>Learnbay Offer</title>
          <meta name="description" content="Learnbay Scholarship" />
          <link
            rel="icon"
            href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
          />
        </Head>
        <Navbar radio={true} />
        <Scholarship Offer={true} />
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function (botId) {
            var s = document.createElement("script");
            s.async = true;
            s.type = 'text/javascript';
            s.src = "https://app.chat360.io/widget/chatbox/common_scripts/script.js";
            s.onload = function () {
              window.loadChat360Bot(botId);
            };
            s.onerror = function (err) {
              console.error(err);
            };
            document.body.appendChild(s);
          })("4f4d2e98-0778-4fb7-a9c3-af6fd1bedad8");
      `,
        }}
      />
    </>
  );
}

export default scholarship;
