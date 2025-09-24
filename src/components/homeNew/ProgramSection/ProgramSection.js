import React, { useState } from "react";
import styles from "./programSection.module.css";
import Image from "next/image";
const Popup = dynamic(() => import("@/components/Global/Popup/Popup"));
const Form = dynamic(() => import("@/components/Global/Form/Form"));
import dynamic from "next/dynamic";
import {
  Award,
  Users,
  Brain,
  Clock,
  BarChart2,
  CheckCircle2,
} from "lucide-react";
import { programCards } from "./programData";
// import ScrollTracker from "./ScrollTracker/ScrollTracker";

const ProgramSection = () => {
  const [popups, setPopups] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [brochureLinks, setBrochureLinks] = useState();
  const [brochurePdfs, setBrochurePdfs] = useState();
  const [selectedCard, setSelectedCard] = useState(null);

  const displayedCards = showAll ? programCards : programCards.slice(0, 3);
  // const displayedCards = programCards;

  return (
    <div className={styles.programSectionWrapper}>
      <section className={`${styles.section} width`}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Project Based Certification Track</h2>
          <p className={styles.subheading}>
            Master in-demand skills through industry certified programs.
          </p>
          <div className={styles.badgesContainer}>
            <div className={`${styles.badge} ${styles.orange}`}>
              <Award className={styles.icon} />
              <span>Top-Rated Program</span>
            </div>
            <div className={`${styles.badge} ${styles.blue}`}>
              <Users className={styles.icon} />
              <span>For Working Professionals</span>
            </div>
            <div className={`${styles.badge} ${styles.purple}`}>
              <Brain className={styles.icon} />
              <span>Domain Specialization</span>
            </div>
          </div>
        </div>

        <div className={styles.mainContent}>
          {/* <ScrollTracker cardCount={displayedCards.length} /> */}
          <div className={styles.cardsContainer} id="program-scroll-section">
            {displayedCards.map((card, i) => (
              <div
                key={card.id}
                className={`${styles.card} ${styles[card.theme]}`}
              >
                <div className={styles.cardInner}>
                  <div className={styles.cardHeader}>
                    <Image
                      src={card.icon}
                      width={60}
                      height={60}
                      alt={`${card.title} icon`}
                      className={styles.cardIcon}
                    />
                    <div className={styles.cardTitleGroup}>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      {/* <p className={styles.cardDescription}>
                        {card.description}
                      </p> */}
                      <div className={styles.skillsTags}>
                        <span className={styles.skillTag}>
                          Integrated with AI Co-Lab Experience
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.leftPanel}>
                      <div className={styles.sectioninner}>
                        <h4 className={styles.sectionTitle1}>
                          Why this program
                        </h4>
                        <ul className={styles.whyList}>
                          {card.why.map((reason, i) => (
                            <li key={i}>
                              <CheckCircle2
                                size={16}
                                className={styles.checkIcon}
                              />
                              {reason}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.textsection}>
                        <h4 className={styles.sectionTitle}>{card.readyfor}</h4>
                        <Image
                          src={card.logo}
                          width={200}
                          height={25}
                          alt="Certification logos"
                          className={styles.certLogos}
                        />
                      </div>

                      <div className={styles.textsection}>
                        <h4 className={styles.sectionTitle2}>
                          Key Skills You'll Master
                        </h4>
                        <div className={styles.skillsTags}>
                          {card.keySkills.map((skill, i) => (
                            <span key={i} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={styles.rightPanel}>
                      <div className={styles.metaInfo}>
                        <div className={styles.metaItem}>
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/alarm_on.webp "
                            alt="Clock Icon"
                            width={20}
                            height={20}
                          />

                          <span>
                            Timeline:
                            {/* <img
                              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Vector+212.webp"
                              alt="Timeline Icon"
                              style={{
                                width: "16px",
                                height: "16px",
                              }} */}
                            {/* /> */}
                            <strong>{card.duration}</strong>
                          </span>
                        </div>
                        <Image
                          src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/Vector+212+(1).webp"
                          alt="Clock Icon"
                          width={300}
                          height={1}
                        />
                        <div className={styles.metaItem}>
                          <Image
                            src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/work.webp "
                            alt="Clock Icon"
                            width={20}
                            height={20}
                          />
                          <span>
                            {card.projects} <strong>{card.level}</strong>
                          </span>
                        </div>
                      </div>
                      <div className={styles.actionButtons}>
                        <Popup
                          trigger={popups}
                          setTrigger={setPopups}
                          className="popupModal"
                          downloadBrochure
                        >
                          <div className="leftPopup">
                            <div
                              className="whiteP"
                              style={{ width: "340px", height: "400px" }}
                            ></div>
                          </div>
                          <div className="RightPopup">
                            <h5>Download Syllabus</h5>
                            <Form
                              titleCourse={displayedCards[selectedCard]?.title}
                              brochureLink={
                                displayedCards[selectedCard]?.brochureUrl
                              }
                              brochurePdf={displayedCards[selectedCard]?.pdfUrl}
                              dataScience={
                                displayedCards[selectedCard]?.dataScience
                              }
                              dataScienceCounselling={
                                displayedCards[selectedCard]
                                  ?.dataScienceCounselling
                              }
                              dataScienceGeneric={
                                displayedCards[selectedCard]
                                  ?.dataScienceCounselling
                              }
                              radio={
                                displayedCards[selectedCard]
                                  ?.dataScienceCounselling
                              }
                              downloadBrochure
                              upSkillingHide={true}
                              interstedInHide={
                                displayedCards[selectedCard]
                                  ?.dataScienceCounselling
                              }
                            />
                          </div>
                        </Popup>
                        <button
                          className={styles.brochureButton}
                          onClick={() => {
                            setSelectedCard(i);
                            setPopups(true);
                          }}
                        >
                          Download Brochure
                        </button>
                        <a
                          onClick={() => {
                            setSelectedCard(i);
                            setPopups(true);
                          }}
                          className={styles.applyButton}
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.eligibility}>
                    <div className={styles.wrapper}>
                      <span className={styles.eligibilityTitle}>
                        {card.eligibilitytitle}
                      </span>{" "}
                      {card.eligibility}
                      <span className={styles.eligibilityTitle}>
                        {card.secondeligibilitytitle}
                      </span>
                    </div>
                    <div className={styles.actionButtonsphone}>
                      <Popup
                        trigger={popups}
                        setTrigger={setPopups}
                        className="popupModal"
                        downloadBrochure
                      >
                        <div className="leftPopup">
                          <div
                            className="whiteP"
                            style={{ width: "340px", height: "400px" }}
                          ></div>
                        </div>
                        <div className="RightPopup">
                          <h5>Download Syllabus</h5>
                          <Form
                            titleCourse={displayedCards[selectedCard]?.title}
                            brochureLink={
                              displayedCards[selectedCard]?.brochureUrl
                            }
                            brochurePdf={displayedCards[selectedCard]?.pdfUrl}
                            dataScience={
                              displayedCards[selectedCard]?.dataScience
                            }
                            dataScienceCounselling={
                              displayedCards[selectedCard]
                                ?.dataScienceCounselling
                            }
                            dataScienceGeneric={
                              displayedCards[selectedCard]
                                ?.dataScienceCounselling
                            }
                            radio={
                              displayedCards[selectedCard]
                                ?.dataScienceCounselling
                            }
                            downloadBrochure
                            upSkillingHide={true}
                            interstedInHide={
                              displayedCards[selectedCard]
                                ?.dataScienceCounselling
                            }
                          />
                        </div>
                      </Popup>
                      <button
                        className={styles.brochureButton}
                        onClick={() => {
                          setSelectedCard(i);
                          setPopups(true);
                        }}
                      >
                        Download Brochure
                      </button>
                      <a
                        onClick={() => {
                          setSelectedCard(i);
                          setPopups(true);
                        }}
                        className={styles.applyButton}
                      >
                        View Details -
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {programCards.length > 3 && (
          <div className={styles.viewMoreContainer}>
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className={styles.viewMoreButton}
            >
              {showAll ? "View Less" : "View More Programs"}
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProgramSection;
