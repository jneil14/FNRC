import React from 'react';


function Services() {
    return (
      <>
        <div className="services" id="services">
          <h2 className="services__title">OUR SERVICES</h2>

          <div className="services__info-odd" id="celban">
            <h3 className="services__info-odd-name">CELBAN</h3>
            <p className="services__info-odd-description">
              The{" "}
              <span className="services__info-odd-description--bold">
                Canadian English Language Benchmark Assessment for Nurses
                (CELBAN)
              </span>{" "}
              is designed to assess the English language proficiency of
              internationally educated nurses (IENs) who are applying for
              licensure in the nursing profession in Canada. CELBAN is
              recognized by nursing licensing bodies across Canada.
            </p>
          </div>
          {/* end of CELBAN section */}

          <div className="services__info-even" id="ncas">
            <h3 className="services__info-even-name">NCAS-RN and LPN</h3>
            <p className="services__info-even-description">
              <span className="services__info-even-description--bold">
                Nursing Community Assessment for Nurses (NCAS)
              </span>{" "}
              uses a Computer-based Assessment (CBA), a Simulation Lab
              Assessment (SLA), and an Oral Assessment to assess the extent to
              which applicants demonstrate the skills and competencies required
              for practice.
            </p>
          </div>
          {/* end of NCAS-RN and LPN section */}

          <div className="services__info-odd" id="nclex">
            <h3 className="services__info-odd-name">NCLEX-RN</h3>
            <p className="services__info-odd-description">
              All applicants seeking BCCNP registration must write and pass the{" "}
              <span className="services__info-odd-description--bold">
                National Council Licensure Examination
              </span>{" "}
              for RNs (NCLEX). This exam measures the competencies required of
              entry-level registered nurses for safe and effective practice. The
              exam is made up of multiple choice and alternate format questions.
            </p>
          </div>
          {/* end of NCLEX-RN*/}

          <div className="services__info-even" id="cpnre">
            <h3 className="services__info-even-name">CPNRE</h3>
            <p className="services__info-even-description">
              All applicants seeking BCCNP registration must write and pass the{" "}
              <span className="services__info-even-description--bold">
                Canadian Practical Nurse Registration Examination for LPNs
                (CPNRE)
              </span>
              . This exam measures the competencies required of entry-level
              licensed practical nurses for safe and effective practice. CPNRE
              is a computer-based test (answer questions on a computer screen
              instead of paper).
            </p>
          </div>
          {/* end of CPNRE*/}
        </div>
      </>
    );
}

export default Services;
