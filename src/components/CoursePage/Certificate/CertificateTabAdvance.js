import React, { useState } from "react";
import { useRouter } from 'next/router';
import styles from "./Certificate.module.css";
import Image from "next/image";
import { BsCheckCircle } from "react-icons/bs";
function CertificateTab({
  data,
  singlecertificate,
  doubleCertificate,
  projectWithCertificate,
  FreshersDoubleCertificate,
  OnlyDS,
  noTabs,
  cyber,
  ecMicro,
}) {
  const [MActive, setMActive] = useState(false);
  const [IActive, setIActive] = useState(true);
  const [IBCActive, setIBCActive] = useState(false);
  const [DegreeCActive, setDegreeActive] = useState(false);
  const router = useRouter();
const currentPath = router.pathname;
  return (
    <section className={styles.CertificateTab}>
      <div className={styles.header}>
       {ecMicro ? (  <div className={`${styles.pWrapN} ${styles.cyberwrap}`}>
            <p
              onClick={() => {
                setIActive(true);
                setMActive(false);
                setIBCActive(false);
                setDegreeActive(false);
              }}
              className={IActive ? styles.activeP : styles.inactiveP}
            >
    Microsoft
            </p>
            
            

            <p
              onClick={() => {
                setIActive(false);
                setMActive(true);
                setIBCActive(false);
                setDegreeActive(false);
              }}
              className={MActive ? styles.activeP : styles.inactiveP}
            >
  Certified Ethical Hacker
            </p>
          </div>):(<> {cyber ? (
          <div className={`${styles.pWrapN} ${styles.cyberwrap}`}>
            <p
              onClick={() => {
                setIActive(true);
                setMActive(false);
                setIBCActive(false);
                setDegreeActive(false);
              }}
              className={IActive ? styles.activeP : styles.inactiveP}
            >
              iHUB IIT Roorkee
            </p>
            
            

            <p
              onClick={() => {
                setIActive(false);
                setMActive(true);
                setIBCActive(false);
                setDegreeActive(false);
              }}
              className={MActive ? styles.activeP : styles.inactiveP}
            >
  Certified Ethical Hacker
            </p>
          </div>
        ) : (
          <>
            {" "}
            {noTabs ? (
              ""
            ) : (
              <div className={styles.pWrap}>
                <p
                  onClick={() => {
                    setIActive(true);
                    setMActive(false);
                    setIBCActive(false);
                    setDegreeActive(false);
                  }}
                  className={IActive ? styles.activeP : styles.inactiveP}
                >
                  IBM
                </p>
                {singlecertificate ? (
                  ""
                ) : (
                  <>
                    {" "}
                    <p
                      onClick={() => {
                        setIActive(false);
                        setMActive(true);
                        setIBCActive(false);
                        setDegreeActive(false);
                      }}
                      className={MActive ? styles.activeP : styles.inactiveP}
                    >
                      Microsoft
                    </p>
                    <p
                      onClick={() => {
                        setIActive(false);
                        setMActive(false);
                        setIBCActive(true);
                        setDegreeActive(false);
                      }}
                      className={IBCActive ? styles.activeP : styles.inactiveP}
                    >
                      Project Certificate
                    </p>
                  </>
                )}
                {doubleCertificate ? (
                  <>
                    <p
                      onClick={() => {
                        setIActive(false);
                        setMActive(true);
                        setIBCActive(false);
                        setDegreeActive(false);
                      }}
                      className={MActive ? styles.activeP : styles.inactiveP}
                    >
                      Microsoft
                    </p>
                  </>
                ) : (
                  ""
                )}
                {FreshersDoubleCertificate ? (
                  <>
                    <p
                      onClick={() => {
                        setIActive(false);
                        setMActive(true);
                        setIBCActive(false);
                        setDegreeActive(false);
                      }}
                      className={MActive ? styles.activeP : styles.inactiveP}
                    >
                      Internship Certificate
                    </p>
                  </>
                ) : (
                  ""
                )}
                {projectWithCertificate ? (
                  <>
                    <p
                      onClick={() => {
                        setIActive(false);
                        setMActive(false);
                        setIBCActive(true);
                        setDegreeActive(false);
                      }}
                      className={
                        DegreeCActive ? styles.activeP : styles.inactiveP
                      }
                    >
                      Project Certificate
                    </p>
                  </>
                ) : (
                  ""
                )}
                {OnlyDS ? (
                  <>
                    {" "}
                    <p
                      onClick={() => {
                        setIActive(false);
                        setMActive(false);
                        setIBCActive(false);
                        setDegreeActive(true);
                      }}
                      className={
                        DegreeCActive ? styles.activeP : styles.inactiveP
                      }
                    >
                      Degree Certificate
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </>
        )}</>)}
      </div>

      {IActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.degreeCertificate.title}</h6>
            {data.degreeCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
            

          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.webp"
              alt="arrow"
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
              loading="lazy"
              quality={40}
            />
     
            <div
              className={`${styles.CertificateDiv} ${styles.IItImag} imgWrapper`}
            >
           {cyber ? ( <Image
                  src={data.degreeCertificate.img}
                  alt="Certificate"
                  loading="lazy"
                  quality={100}
                  width={200}
                  height={800}
                  className={styles.iitImage}
                />):(<>   {noTabs ? (
                <Image
                  src={data.degreeCertificate.img}
                  alt="Certificate"
                  loading="lazy"
                  quality={100}
                  width={200}
                  height={800}
                  className={styles.iitImage}
                />
                
              ) : (
                <Image
                  src={data.degreeCertificate.img}
                  alt="Certificate"
                  loading="lazy"
                  quality={100}
                  width={1150}
                  height={800}
                />

                
              )}</>)}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {MActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.microCertificate.title}</h6>
            {data.microCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
{(currentPath === '/s2-advanced-cyber-security-course-training' && ecMicro) || 
 (currentPath === '/s2-executive-program-in-cyber-security-and-ethical-hacking-by-iit-roorkee' && cyber) ? (
  <div className={styles.noteIt}>
    <span>
      {currentPath === '/s2-advanced-cyber-security-course-training' ? (
        <i>* Exam voucher included in this program</i>
      ) : (
        <i>*Exam voucher for EC council sold separately</i>
      )}
    </span>
  </div>
) : null}


          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.png"
              alt="arrow"
              quality={100}
              width={100}
              height={50}
              loading="lazy"
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
            />
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.microCertificate.img}
                alt="Certificate"
                width={1150}
                height={800}
                loading="lazy"
                quality={100}
              />
            </div>
            
          </div>
        </div>
      ) : (
        ""
      )}

      {IBCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.projectCertificate.title}</h6>
            {data.projectCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
            
          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.webp"
              alt="arrow"
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
              loading="lazy"
              quality={60}
            />
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.projectCertificate.img}
                alt="Certificate"
                width={1150}
                height={800}
                loading="lazy"
                quality={100}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {DegreeCActive ? (
        <div className={styles.MicroCert}>
          <div className={styles.rightSide}>
            <h6>{data.DSDegreeCertificate.title}</h6>
            {data.DSDegreeCertificate.para.map((data, i) => {
              return (
                <p key={i}>
                  <BsCheckCircle className={styles.checkCircle} />
                  {data}
                </p>
              );
            })}
            
          </div>
          <div className={styles.leftSide}>
            <Image
              src="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/cert-arrow.webp"
              alt="arrow"
              width={100}
              height={50}
              className={styles.arrowImg}
              style={{ position: "relative", top: "160px" }}
              loading="lazy"
              quality={60}
            />
            
            <div className={`${styles.CertificateDiv} imgWrapper`}>
              <Image
                src={data.DSDegreeCertificate.img}
                alt="Certificate"
                width={1150}
                height={800}
                loading="lazy"
                quality={100}
              />
            </div>
            
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}
export default CertificateTab;
