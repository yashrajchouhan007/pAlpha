import React, { useEffect } from "react";

const Default = () => {
  useEffect(() => {
    console.log("Check");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
  return (
    <table
      width="100%"
      cellPadding={0}
      cellSpacing={0}
      border={0}
      className="background_main"
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "20px",
        color: "#434245",
        width: "100%",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >
      <tbody>
        <tr>
          <td
            valign="top"
            className="sm_full_width"
            style={{
              margin: "0 auto",
              width: "100%",
              maxWidth: "1074px",
              display: "block",
            }}
          >
            <div
              className="sm_no_padding"
              style={{
                margin: "0 auto",
                padding: "30px 0 40px",
                display: "block",
                boxSizing: "border-box",
              }}
            >
              <table
                style={{ width: "100%", color: "#434245" }}
                border={0}
                cellPadding={0}
                cellSpacing={0}
              >
                <tbody>
                  <tr>
                    <td style={{ boxSizing: "border-box" }}>
                      <table border={0} cellPadding={0} cellSpacing={0}>
                        <tbody>
                          <tr>
                            <td>
                              {/* <h1 style={{fontSize: '30px',marginBottom:"20px"}}>
                                            peacefully</h1> */}
                              {/* <img style={{ width: '40px', height: '40px', margin: '0 0 15px 0', paddingRight: '30px', paddingLeft: '30px' }} alt='logo' width={50} height={50} src="https://s3.amazonaws.com/branding-materials/peacefully-round-logo.png" alt="Peacefully's round logo" /> */}
                              <p
                                style={{
                                  fontSize: "30px",
                                  fontWeight: "lighter",
                                  marginBottom: "3px",
                                }}
                              >
                                Terms of Use
                              </p>
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "3px",
                                }}
                              >
                                Effective Date: June 11, 2020
                              </p>
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "3px",
                                }}
                              >
                                Terms of Use of peacefully.com
                              </p>

                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "20px",
                                  marginTop: "20px",
                                }}
                              >
                                PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE
                                USING THIS SITE.
                              </p>
                              <hr
                                style={{
                                  display: "block",
                                  height: "1px",
                                  border: 0,
                                  borderTop: "1px solid #E1E1E4",
                                }}
                              />
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginBottom: "3px",
                                }}
                              >
                                <b>Agreement to terms:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  These Terms and Conditions constitute a
                                  legally binding agreement made between you,
                                  whether personally or on behalf of an entity
                                  (“you”), and Peacefully, Inc ("Company", “we”,
                                  “us”, or “our”), concerning your access to and
                                  use of the www.peacefully.com website as well
                                  as any other media form, media channel, mobile
                                  website or mobile application related, linked,
                                  or otherwise connected thereto (collectively,
                                  the “Site”).
                                </p>
                                <p style={{ marginBottom: "15px" }}>
                                  You agree that by accessing the Site, you have
                                  read, understood, and agreed to be bound by
                                  all of these Terms and Conditions. IF YOU DO
                                  NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN
                                  YOU ARE EXPRESSLY PROHIBITED FROM USING THE
                                  SITE AND MUST DISCONTINUE USE IMMEDIATELY.
                                </p>

                                <p style={{ marginBottom: "15px" }}>
                                  Supplemental terms and conditions or documents
                                  that may be posted on the Site from time to
                                  time are hereby expressly included by
                                  reference. We reserve the right, in our sole
                                  discretion, to make changes or modifications
                                  to these Terms of Use at any time and for any
                                  reason. We will alert you about any changes by
                                  updating the “Last updated” date of these
                                  Terms of Use, and you waive any right to
                                  receive specific notice of each such change.
                                  It is your responsibility to periodically
                                  review these Terms of Use to stay informed of
                                  updates. You will be subject to, and will be
                                  deemed to have been made aware of and to have
                                  accepted, the changes in any revised Terms of
                                  Use by your continued use of the Site after
                                  the date such revised Terms of Use are posted.
                                </p>
                                <p>
                                  The information provided on the Site is not
                                  intended for distribution to or use by any
                                  person or entity in any jurisdiction or
                                  country where such distribution or use would
                                  be contrary to law or regulation or which
                                  would subject us to any registration
                                  requirement within such jurisdiction or
                                  country. Accordingly, those persons who choose
                                  to access the Site from other locations do so
                                  on their own initiative and are solely
                                  responsible for compliance with local laws, if
                                  and to the extent local laws are applicable.
                                </p>

                                <p style={{ marginTop: "15px" }}>
                                  The Site is intended for users who are at
                                  least 18 years old. Persons under the age of
                                  18 are not permitted to use or register for
                                  the Site.
                                </p>
                              </ul>

                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                  marginBottom: "3px",
                                }}
                              >
                                <b>What is Peacefully, Inc.?</b>
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "15px",
                                }}
                              >
                                Peacefully, Inc is an online tool, referral and
                                concierge service that helps the consumer manage
                                end-of-life themself or with the help of
                                professionals at the consumer’s request. Our
                                referral services, which connect consumers with
                                third party professionals who match the
                                consumer’s needs and compete for the consumer’s
                                business, are provided free of charge to the
                                consumer. When consumers submit a request for
                                professional legal, funeral or real estate help,
                                we use the consumer’s preferences and location
                                to match the consumer with the right
                                professional who will best serve the consumer’s
                                needs in any desired location in the nation.
                                Peacefully, Inc does not broker transactions. We
                                are paid by the third party professionals for
                                matching consumers with them. The terms of any
                                agreement between our participating
                                professionals and the consumer are not endorsed,
                                recommended or otherwise known to or by
                                Peacefully, Inc. We also offer certain concierge
                                services to consumers. Our referral services and
                                concierge services together are the “Services”.
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "15px",
                                }}
                              >
                                The Site includes information on common
                                end-of-life planning and estate settlement
                                issues. We do not provide legal or tax advice,
                                opinions or recommendations, or apply the law to
                                the facts of your particular scenario.
                                Peacefully, Inc is not a law firm and may not
                                perform services performed by an attorney.
                                Peacefully, Inc, the information on the Site or
                                the Services are not a substitute for the advice
                                or services of an attorney, accountant or
                                financial advisor.
                              </p>

                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                  marginBottom: "3px",
                                }}
                              >
                                <b>Intellectual Property Rights:</b>
                              </p>

                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Unless otherwise indicated, the Site is our
                                  proprietary property and all source code,
                                  databases, functionality, software, website
                                  designs, audio, video, text, photographs, and
                                  graphics on the Site (collectively, the
                                  “Content”) and the trademarks, service marks,
                                  and logos contained therein (the “Marks”) are
                                  owned or controlled by us or licensed to us,
                                  and are protected by copyright and trademark
                                  laws and various other intellectual property
                                  rights and unfair competition laws of the
                                  United States, foreign jurisdictions, and
                                  international conventions. The Content and the
                                  Marks are provided on the Site “AS IS” for
                                  your information and personal use only. Except
                                  as expressly provided in these Terms and
                                  Conditions, no part of the Site and no Content
                                  or Marks may be copied, reproduced,
                                  aggregated, republished, uploaded, posted,
                                  publicly displayed, encoded, translated,
                                  transmitted, distributed, sold, licensed, or
                                  otherwise exploited for any commercial purpose
                                  whatsoever, without our express prior written
                                  permission.
                                </p>
                                <p>
                                  Provided that you are eligible to use the
                                  Site, you are granted a limited license to
                                  access and use the Site and to download or
                                  print a copy of any portion of the Content to
                                  which you have properly gained access solely
                                  for your personal, non-commercial use. We
                                  reserve all rights not expressly granted to
                                  you in and to the Site, the Content and the
                                  Marks.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                  marginBottom: "3px",
                                }}
                              >
                                <b>User Representations:</b>
                              </p>

                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  By using the Site, you represent and warrant
                                  that:
                                </p>
                                <ol>
                                  1) all registration information you submit
                                  will be true, accurate, current, and complete
                                </ol>
                                <ol>
                                  2) you will maintain the accuracy of such
                                  information and promptly update such
                                  registration information as necessary
                                </ol>
                                <ol>
                                  3) you are aware you may be referred to a
                                  Peacefully concierge or a third party provider
                                  who will receive your registration information
                                  if you check certain checkboxes to request
                                  services beyond what Peacefully, Inc provides
                                </ol>
                                <ol>
                                  4) You consent to potentially receiving mobile
                                  communications if you request a referral to a
                                  Peacefully concierge or a third party provider
                                </ol>

                                <ol>
                                  5) you have the legal capacity and you agree
                                  to comply with these Terms and Conditions
                                </ol>
                                <ol>
                                  6) you are not a minor in the jurisdiction in
                                  which you reside
                                </ol>
                                <ol>
                                  7) you will not access the Site through
                                  automated or non-human means, whether through
                                  a bot, script, or otherwise
                                </ol>
                                <ol>
                                  8) you will not use the Site for any illegal
                                  or unauthorized purpose
                                </ol>
                                <ol>
                                  9) your use of the Site will not violate any
                                  applicable law or regulation. If you provide
                                  any information that is untrue, inaccurate,
                                  not current, or incomplete, we have the right
                                  to suspend or terminate your account and
                                  refuse any and all current or future use of
                                  the Site (or any portion thereof).
                                </ol>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginBottom: "3px",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Mobile Communications Consent:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  If you indicate interest in a Peacefully
                                  concierge, free consultation, real estate
                                  agent, funeral care provider, estate planning
                                  attorney, or any other third party
                                  professional by selecting the relevant
                                  checkbox during registration, you are signing
                                  up to potentially receive phone, text or email
                                  communication from these parties and these
                                  terms and conditions will become part of a
                                  legally binding agreement between you and
                                  Peacefully, Inc. This is stated clearly during
                                  registration where you make said selection(s).
                                  Please read this document in its entirety
                                  before using our Site. It may significantly
                                  affect your legal rights, including your right
                                  to file a lawsuit in court, to have a jury
                                  hear your claims, or to proceed on behalf of
                                  or as part of a class.
                                </p>

                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Peacefully, Inc. agrees to provide you with
                                  mobile communications ONLY if you agree to the
                                  terms contained herein. If you do not wish to
                                  agree to these terms, but wish to speak with a
                                  Peacefully representative, please call
                                  657-999-6791.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  By signing up to receive mobile
                                  communications, you are providing prior
                                  express written consent for Peacefully to send
                                  you mobile communications at the number you
                                  provide to us. Mobile communications may
                                  contain marketing or advertising material.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Peacefully may send mobile communications to
                                  you directly or through a third party acting
                                  on behalf of Peacefully. In doing so,
                                  Peacefully or a third party acting on its
                                  behalf may use non-automated or automated
                                  means to send mobile communications, including
                                  but not limited to equipment that qualifies as
                                  an automated telephone dialing system.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You agree not to respond to any mobile
                                  communication in any way that is unlawful or
                                  abusive or in any way that disrupts or damages
                                  Peacefully’s property or systems. You
                                  understand that text messages and other
                                  communications you send in response to
                                  Peacefully mobile communications may not be
                                  secure and may be intercepted or accessed by
                                  unauthorized third parties during transit. You
                                  agree to hold Peacefully harmless against any
                                  unauthorized third party access to information
                                  contained in messages you send to us.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You represent and warrant that you are the
                                  authorized mobile telephone subscriber for the
                                  number you provide to Peacefully. You have
                                  confirmed that you have provided us with the
                                  correct number.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Peacefully will not impose any charges on you
                                  associated with its sending of mobile
                                  communications. However, your mobile device
                                  service provider may charge messaging or data
                                  fees or rates associated with mobile
                                  communications you receive from or send to
                                  Peacefully. You are solely responsible for any
                                  such charges.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You may revoke your consent to receive mobile
                                  communications from Peacefully at any time by
                                  texting “STOP” in reply to any mobile
                                  communication or by writing an email to
                                  hello@peacefully.com clearly indicating that
                                  you do not wish to receive additional mobile
                                  communications from us. Peacefully may, in its
                                  sole discretion, choose to honor or disregard
                                  revocation requests made through other means.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You agree to notify Peacefully immediately if
                                  you cancel your subscription to the number you
                                  provided to hear.com at the time of
                                  registration by writing an email to
                                  hello@peacefully.com or change your domicile
                                  to a location outside of the United States.
                                  Peacefully will terminate your subscription to
                                  mobile alerts within a reasonable period of
                                  time upon receipt of such a notice.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Upon its own election, Peacefully may
                                  terminate your participation in its mobile
                                  communications program at any time, in its
                                  sole discretion.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginBottom: "3px",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Prohibited Activities:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You may not access or use the Site for any
                                  purpose other than that for which we make the
                                  Site available. The Site may not be used in
                                  connection with any commercial endeavors
                                  except those that are specifically endorsed or
                                  approved by us.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "3px",
                                  }}
                                >
                                  As a user of the Site, you agree not to:
                                </p>

                                <ol>
                                  1) Systematically retrieve data or other
                                  content from the Site to create or compile,
                                  directly or indirectly, a collection,
                                  compilation, database, or directory without
                                  written permission from us
                                </ol>
                                <ol>
                                  2) Make any unauthorized use of the Site,
                                  including collecting usernames and/or email
                                  addresses of users by electronic or other
                                  means for the purpose of sending unsolicited
                                  email, or creating user accounts by automated
                                  means or under false pretenses
                                </ol>
                                <ol>
                                  3) Use a buying agent or purchasing agent to
                                  make purchases on the Site
                                </ol>
                                <ol>
                                  4) Use the Site to advertise or offer to sell
                                  goods and services
                                </ol>
                                <ol>
                                  5) Circumvent, disable, or otherwise interfere
                                  with security-related features of the Site,
                                  including features that prevent or restrict
                                  the use or copying of any Content or enforce
                                  limitations on the use of the Site and/or the
                                  Content contained therein
                                </ol>
                                <ol>
                                  6) Trick, defraud, or mislead us and other
                                  users, especially in any attempt to learn
                                  sensitive account information such as user
                                  passwords
                                </ol>
                                <ol>
                                  7) Engage in unauthorized framing of or
                                  linking to the Site
                                </ol>
                                <ol>
                                  8) Make improper use of our support services
                                  or submit false reports of abuse or misconduct
                                </ol>
                                <ol>
                                  9) Engage in any automated use of the system,
                                  such as using scripts to send comments or
                                  messages, or using any data mining, robots, or
                                  similar data gathering and extraction tools
                                </ol>
                                <ol>
                                  9) Interfere with, disrupt, or create an undue
                                  burden on the Site or the networks or services
                                  connected to the Site
                                </ol>
                                <ol>
                                  10) Interfere with, disrupt, or create an
                                  undue burden on the Site or the networks or
                                  services connected to the Site
                                </ol>
                                <ol>
                                  11) Attempt to impersonate another user or
                                  person or use the username of another user
                                </ol>
                                <ol>
                                  12) Sell or otherwise transfer your profile
                                </ol>
                                <ol>
                                  13) Use any information obtained from the Site
                                  in order to harass, abuse, or harm another
                                  person
                                </ol>
                                <ol>
                                  14) Use the Site as part of any effort to
                                  compete with us or otherwise use the Site
                                  and/or the Content for any revenue-generating
                                  endeavor or commercial enterprise
                                </ol>
                                <ol>
                                  15) Decipher, decompile, disassemble, or
                                  reverse engineer any of the software
                                  comprising or in any way making up a part of
                                  the Site
                                </ol>
                                <ol>
                                  16) Attempt to bypass any measures of the Site
                                  designed to prevent or restrict access to the
                                  Site, or any portion of the Site
                                </ol>
                                <ol>
                                  17) Harass, annoy, intimidate, or threaten any
                                  of our employees or agents engaged in
                                  providing any portion of the Site to you
                                </ol>
                                <ol>
                                  18) Delete the copyright or other proprietary
                                  rights notice from any Content
                                </ol>
                                <ol>
                                  19) Copy or adapt the Site’s software,
                                  including but not limited to Flash, PHP, HTML,
                                  JavaScript, or other code
                                </ol>
                                <ol>
                                  20) Upload or transmit (or attempt to upload
                                  or to transmit) viruses, Trojan horses, or
                                  other material, including excessive use of
                                  capital letters and spamming (continuous
                                  posting of repetitive text), that interferes
                                  with any party’s uninterrupted use and
                                  enjoyment of the Site or modifies, impairs,
                                  disrupts, alters, or interferes with the use,
                                  features, functions, operation, or maintenance
                                  of the Site
                                </ol>
                                <ol>
                                  21) Upload or transmit (or attempt to upload
                                  or to transmit) any material that acts as a
                                  passive or active information collection or
                                  transmission mechanism, including without
                                  limitation, clear graphics interchange formats
                                  (“gifs”), 1×1 pixels, web bugs, cookies, or
                                  other similar devices (sometimes referred to
                                  as “spyware” or “passive collection
                                  mechanisms” or “pcms”)
                                </ol>
                                <ol>
                                  22) Disparage, tarnish, or otherwise harm, in
                                  our opinion, us and/or the Site
                                </ol>
                                <ol>
                                  23) Use the Site in a manner inconsistent with
                                  any applicable laws or regulations
                                </ol>
                                <ol>
                                  24) Except as may be the result of standard
                                  search engine or Internet browser usage, use,
                                  launch, develop, or distribute any automated
                                  system, including without limitation, any
                                  spider, robot, cheat utility, scraper, or
                                  offline reader that accesses the Site, or
                                  using or launching any unauthorized script or
                                  other software
                                </ol>
                                <ol>
                                  25) Harass or abuse any other users or company
                                  employees
                                </ol>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Submissions:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You acknowledge and agree that any questions,
                                  comments, suggestions, ideas, feedback, or
                                  other information regarding the Site
                                  ("Submissions") provided by you to us are
                                  non-confidential and shall become our sole
                                  property. We shall own exclusive rights,
                                  including all intellectual property rights,
                                  and shall be entitled to the unrestricted use
                                  and dissemination of these Submissions for any
                                  lawful purpose, commercial or otherwise,
                                  without acknowledgment or compensation to you.
                                  You hereby waive all moral rights to any such
                                  Submissions, and you hereby warrant that any
                                  such Submissions are original with you or that
                                  you have the right to submit such Submissions.
                                  You agree there shall be no recourse against
                                  us for any alleged or actual infringement or
                                  misappropriation of any proprietary right in
                                  your Submissions.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Third-party Websites and Content:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  The Site may contain (or you may be sent via
                                  the Site) links to other websites
                                  ("Third-Party Websites") as well as articles,
                                  photographs, text, graphics, pictures,
                                  designs, music, sound, video, information,
                                  applications, software, and other content or
                                  items belonging to or originating from third
                                  parties ("Third-Party Content"). Such
                                  Third-Party Websites and Third-Party Content
                                  are not investigated, monitored, or checked
                                  for accuracy, appropriateness, or completeness
                                  by us, and we are not responsible for any
                                  Third-Party Websites accessed through the Site
                                  or any Third-Party Content posted on,
                                  available through, or installed from the Site,
                                  including the content, accuracy,
                                  offensiveness, opinions, reliability, privacy
                                  practices, or other policies of or contained
                                  in the Third-Party Websites or the Third-Party
                                  Content. Inclusion of, linking to, or
                                  permitting the use or installation of any
                                  Third-Party Websites or any Third-Party
                                  Content does not imply approval or endorsement
                                  thereof by us. If you decide to leave the Site
                                  and access the Third-Party Websites or to use
                                  or install any Third-Party Content, you do so
                                  at your own risk, and you should be aware
                                  these Terms and Conditions no longer govern.
                                  You should review the applicable terms and
                                  policies, including privacy and data gathering
                                  practices, of any website to which you
                                  navigate from the Site or relating to any
                                  applications you use or install from the Site.
                                  Any purchases you make through Third-Party
                                  Websites will be through other websites and
                                  from other companies, and we take no
                                  responsibility whatsoever in relation to such
                                  purchases which are exclusively between you
                                  and the applicable third party. You agree and
                                  acknowledge that we do not endorse the
                                  products or services offered on Third-Party
                                  Websites and you shall hold us harmless from
                                  any harm caused by your purchase of such
                                  products or services. Additionally, you shall
                                  hold us harmless from any losses sustained by
                                  you or harm caused to you relating to or
                                  resulting in any way from any Third-Party
                                  Content or any contact with Third-Party
                                  Websites.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Advertisers:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  We may allow advertisers to display their
                                  advertisements and other information in
                                  certain areas of the Site, such as sidebar
                                  advertisements or banner advertisements. If
                                  you are an advertiser, you shall take full
                                  responsibility for any advertisements you
                                  place on the Site and any services provided on
                                  the Site or products sold through those
                                  advertisements. Further, as an advertiser, you
                                  warrant and represent that you possess all
                                  rights and authority to place advertisements
                                  on the Site, including, but not limited to,
                                  intellectual property rights, publicity
                                  rights, and contractual rights. We simply
                                  provide the space to place such
                                  advertisements, and we have no other
                                  relationship with advertisers.
                                </p>
                              </ul>
                              <ul>
                                <p
                                  style={{
                                    fontSize: "17px",
                                    textDecoration: "underline",
                                    marginTop: "15px",
                                  }}
                                >
                                  <b>Site Management:</b>
                                </p>

                                <p style={{ listStylePosition: "outside" }}>
                                  We reserve the right, but not the obligation,
                                  to:
                                </p>
                                <ol>
                                  1) monitor the Site for violations of these
                                  Terms and Conditions
                                </ol>
                                <ol>
                                  2) take appropriate legal action against
                                  anyone who, in our sole discretion, violates
                                  the law or these Terms and Conditions,
                                  including without limitation, reporting such
                                  user to law enforcement authorities
                                </ol>
                                <ol>
                                  3) in our sole discretion and without
                                  limitation, refuse, restrict access to, limit
                                  the availability of, or disable (to the extent
                                  technologically feasible) any of your
                                  Contributions or any portion thereof
                                </ol>
                                <ol>
                                  4) in our sole discretion and without
                                  limitation, notice, or liability, to remove
                                  from the Site or otherwise disable all files
                                  and content that are excessive in size or are
                                  in any way burdensome to our systems
                                </ol>
                                <ol>
                                  5) otherwise manage the Site in a manner
                                  designed to protect our rights and property
                                  and to facilitate the proper functioning of
                                  the Site
                                </ol>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Privacy Policy:</b>
                              </p>
                              <ul>
                                <p style={{ listStylePosition: "outside" }}>
                                  Peacefully, Inc takes your privacy seriously
                                  and is sensitive to potential concerns about
                                  how we use the personal information we collect
                                  from and about you. We only use your
                                  information as described in the Privacy Policy
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  (https://www.peacefully.com/privacy-policy) By
                                  using the Site, you agree to be bound by our
                                  Privacy Policy, which is incorporated into
                                  these Terms of Use by reference.
                                </p>

                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  When you open an account to use or access
                                  certain portions of the Site or the Services,
                                  you must provide complete and accurate
                                  information as requested on the registration
                                  form. You agree to keep your password
                                  confidential and will be responsible for all
                                  use of your account and password. Peacefully,
                                  Inc is not liable for any losses you incur as
                                  a result of someone else's use of your account
                                  or password, either with or without your
                                  knowledge. You may be held liable for any
                                  losses incurred by Peacefully, Inc, our
                                  affiliates, officers, directors, employees,
                                  consultants, agents and representatives due to
                                  someone else's use of your account or
                                  password. We reserve the right to remove,
                                  reclaim, or change a username you select if we
                                  determine, in our sole discretion, that such
                                  username is inappropriate, obscene, or
                                  otherwise objectionable.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Please be advised the Site is hosted in the
                                  United States. If you access the Site from the
                                  European Union, Asia, or any other region of
                                  the world with laws or other requirements
                                  governing personal data collection, use, or
                                  disclosure that differ from applicable laws in
                                  the United States, then through your continued
                                  use of the Site, you are transferring your
                                  data to the United States, and you expressly
                                  consent to have your data transferred to and
                                  processed in the United States.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Further, we do not knowingly accept, request,
                                  or solicit information from children or
                                  knowingly market to children. Therefore, in
                                  accordance with the U.S. Children’s Online
                                  Privacy Protection Act, if we receive actual
                                  knowledge that anyone under the age of 13 has
                                  provided personal information to us without
                                  the requisite and verifiable parental consent,
                                  we will delete that information from the Site
                                  as quickly as is reasonably practical.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Term and Termination:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  These Terms and Conditions shall remain in
                                  full force and effect while you use the Site.
                                  WITHOUT LIMITING ANY OTHER PROVISION OF THESE
                                  TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR
                                  SOLE DISCRETION AND WITHOUT NOTICE OR
                                  LIABILITY, DENY ACCESS TO AND USE OF THE SITE
                                  (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO
                                  ANY PERSON FOR ANY REASON OR FOR NO REASON,
                                  INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                                  REPRESENTATION, WARRANTY, OR COVENANT
                                  CONTAINED IN THESE TERMS OF USE OR OF ANY
                                  APPLICABLE LAW OR REGULATION. WE MAY TERMINATE
                                  YOUR USE OR PARTICIPATION IN THE SITE OR
                                  DELETE YOUR ACCOUNT AND ANY CONTENT OR
                                  INFORMATION THAT YOU POSTED AT ANY TIME,
                                  WITHOUT WARNING, IN OUR SOLE DISCRETION. If we
                                  terminate or suspend your account for any
                                  reason, you are prohibited from registering
                                  and creating a new account under your name, a
                                  fake or borrowed name, or the name of any
                                  third party, even if you may be acting on
                                  behalf of the third party. In addition to
                                  terminating or suspending your account, we
                                  reserve the right to take appropriate legal
                                  action, including without limitation pursuing
                                  civil, criminal, and injunctive redress.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Modifications and Interruptions::</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  We reserve the right to change, modify, or
                                  remove the contents of the Site at any time or
                                  for any reason at our sole discretion without
                                  notice. However, we have no obligation to
                                  update any information on our Site. We also
                                  reserve the right to modify or discontinue all
                                  or part of the Site without notice at any
                                  time. We will not be liable to you or any
                                  third party for any modification, price
                                  change, suspension, or discontinuance of the
                                  Site. We cannot guarantee the Site will be
                                  available at all times. We may experience
                                  hardware, software, or other problems or need
                                  to perform maintenance related to the Site,
                                  resulting in interruptions, delays, or errors.
                                  We reserve the right to change, revise,
                                  update, suspend, discontinue, or otherwise
                                  modify the Site at any time or for any reason
                                  without notice to you. You agree that we have
                                  no liability whatsoever for any loss, damage,
                                  or inconvenience caused by your inability to
                                  access or use the Site during any downtime or
                                  discontinuance of the Site. Nothing in these
                                  Terms and Conditions will be construed to
                                  obligate us to maintain and support the Site
                                  or to supply any corrections, updates, or
                                  releases in connection therewith.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Governing Law:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  These Terms and Conditions and your use of the
                                  Site are governed by and construed in
                                  accordance with the laws of the State of
                                  Delaware applicable to agreements made and to
                                  be entirely performed within the State of
                                  Delaware, without regard to its conflict of
                                  law principles.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Dispute Resolution:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  To expedite resolution and control the cost of
                                  any dispute, controversy, or claim related to
                                  these Terms and Conditions (each a "Dispute"
                                  and collectively, the “Disputes”) brought by
                                  either you or us (individually, a “Party” and
                                  collectively, the “Parties”), the Parties
                                  agree to first attempt to negotiate any
                                  Dispute (except those Disputes expressly
                                  provided below) informally for at least thirty
                                  (30) days before initiating arbitration. Such
                                  informal negotiations commence upon written
                                  notice from one Party to the other Party.
                                  Binding Arbitration If the Parties are unable
                                  to resolve a Dispute through informal
                                  negotiations, the Dispute (except those
                                  Disputes expressly excluded below) will be
                                  finally and exclusively resolved by binding
                                  arbitration. YOU UNDERSTAND THAT WITHOUT THIS
                                  PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN
                                  COURT AND HAVE A JURY TRIAL.
                                </p>
                                <p>
                                  The arbitration shall be commenced and
                                  conducted under the Commercial Arbitration
                                  Rules of the American Arbitration Association
                                  ("AAA") and, where appropriate, the AAA’s
                                  Supplementary Procedures for Consumer Related
                                  Disputes ("AAA Consumer Rules"), both of which
                                  are available at the AAA website www.adr.org.
                                  Your arbitration fees and your share of
                                  arbitrator compensation shall be governed by
                                  the AAA Consumer Rules and, where appropriate,
                                  limited by the AAA Consumer Rules. The
                                  arbitration may be conducted in person,
                                  through the submission of documents, by phone,
                                  or online. The arbitrator will make a decision
                                  in writing, but need not provide a statement
                                  of reasons unless requested by either Party.
                                  The arbitrator must follow applicable law, and
                                  any award may be challenged if the arbitrator
                                  fails to do so. Except where otherwise
                                  required by the applicable AAA rules or
                                  applicable law, the arbitration will take
                                  place in Los Angeles County, California.
                                  Except as otherwise provided herein, the
                                  Parties may litigate in court to compel
                                  arbitration, stay proceedings pending
                                  arbitration, or to confirm, modify, vacate, or
                                  enter judgment on the award entered by the
                                  arbitrator. If for any reason, a Dispute
                                  proceeds in court rather than arbitration, the
                                  Dispute shall be commenced or prosecuted in
                                  the state and federal courts located in Los
                                  Angeles County, California, and the Parties
                                  hereby consent to, and waive all defenses of
                                  lack of personal jurisdiction, and forum non
                                  conveniens with respect to venue and
                                  jurisdiction in such state and federal courts.
                                  Application of the United Nations Convention
                                  on Contracts for the International Sale of
                                  Goods and the the Uniform Computer Information
                                  Transaction Act (UCITA) are excluded from
                                  these Terms and Conditions. In no event shall
                                  any Dispute brought by either Party related in
                                  any way to the Site be commenced more than 6
                                  months after the cause of action arose. If
                                  this provision is found to be illegal or
                                  unenforceable, then neither Party will elect
                                  to arbitrate any Dispute falling within that
                                  portion of this provision found to be illegal
                                  or unenforceable and such Dispute shall be
                                  decided by a court of competent jurisdiction
                                  within the courts listed for jurisdiction
                                  above, and the Parties agree to submit to the
                                  personal jurisdiction of that court.
                                  Restrictions The Parties agree that any
                                  arbitration shall be limited to the Dispute
                                  between the Parties individually. To the full
                                  extent permitted by law, (a) no arbitration
                                  shall be joined with any other proceeding; (b)
                                  there is no right or authority for any Dispute
                                  to be arbitrated on a class-action basis or to
                                  utilize class action procedures; and (c) there
                                  is no right or authority for any Dispute to be
                                  brought in a purported representative capacity
                                  on behalf of the general public or any other
                                  persons. Exceptions to Informal Negotiations
                                  and Arbitration The Parties agree that the
                                  following Disputes are not subject to the
                                  above provisions concerning informal
                                  negotiations and binding arbitration: (a) any
                                  Disputes seeking to enforce or protect, or
                                  concerning the validity of, any of the
                                  intellectual property rights of a Party; (b)
                                  any Dispute related to, or arising from,
                                  allegations of theft, piracy, invasion of
                                  privacy, or unauthorized use; and (c) any
                                  claim for injunctive relief. If this provision
                                  is found to be illegal or unenforceable, then
                                  neither Party will elect to arbitrate any
                                  Dispute falling within that portion of this
                                  provision found to be illegal or unenforceable
                                  and such Dispute shall be decided by a court
                                  of competent jurisdiction within the courts
                                  listed for jurisdiction above, and the Parties
                                  agree to submit to the personal jurisdiction
                                  of that court.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Corrections:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  There may be information on the Site that
                                  contains typographical errors, inaccuracies,
                                  or omissions, including descriptions, pricing,
                                  availability, and various other information.
                                  We reserve the right to correct any errors,
                                  inaccuracies, or omissions and to change or
                                  update the information on the Site at any
                                  time, without prior notice.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Disclaimer:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  THE SITE IS PROVIDED ON AN AS-IS AND
                                  AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF
                                  THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE
                                  RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
                                  WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                                  IMPLIED, IN CONNECTION WITH THE SITE AND YOUR
                                  USE THEREOF, INCLUDING, WITHOUT LIMITATION,
                                  THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                                  FITNESS FOR A PARTICULAR PURPOSE, AND
                                  NONINFRINGEMENT. WE MAKE NO WARRANTIES OR
                                  REPRESENTATIONS ABOUT THE ACCURACY OR
                                  COMPLETENESS OF THE SITE’S CONTENT OR THE
                                  CONTENT OF ANY WEBSITES LINKED TO THE SITE AND
                                  WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY
                                  FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES
                                  OF CONTENT AND MATERIALS, (2) PERSONAL INJURY
                                  OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
                                  RESULTING FROM YOUR ACCESS TO AND USE OF THE
                                  SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF
                                  OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL
                                  INFORMATION AND/OR FINANCIAL INFORMATION
                                  STORED THEREIN, (4) ANY INTERRUPTION OR
                                  CESSATION OF TRANSMISSION TO OR FROM THE SITE,
                                  (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
                                  LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH
                                  THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY
                                  ERRORS OR OMISSIONS IN ANY CONTENT AND
                                  MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY
                                  KIND INCURRED AS A RESULT OF THE USE OF ANY
                                  CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE
                                  AVAILABLE VIA THE SITE. WE DO NOT WARRANT,
                                  ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
                                  FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                                  OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY
                                  HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
                                  APPLICATION FEATURED IN ANY BANNER OR OTHER
                                  ADVERTISING, AND WE WILL NOT BE A PARTY TO OR
                                  IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
                                  TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY
                                  PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE
                                  PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
                                  MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE
                                  YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
                                  APPROPRIATE. LIMITATIONS OF LIABILITY IN NO
                                  EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR
                                  AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR
                                  ANY DIRECT, INDIRECT, CONSEQUENTIAL,
                                  EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
                                  DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE,
                                  LOSS OF DATA, OR OTHER DAMAGES ARISING FROM
                                  YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN
                                  ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                  NOTWITHSTANDING ANYTHING TO THE CONTRARY
                                  CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY
                                  CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF
                                  THE ACTION, WILL AT ALL TIMES BE LIMITED TO
                                  THE AMOUNT PAID, IF ANY, BY YOU TO US DURING
                                  THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF
                                  ACTION ARISING. CERTAIN STATE LAWS DO NOT
                                  ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
                                  EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF
                                  THESE LAWS APPLY TO YOU, SOME OR ALL OF THE
                                  ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY
                                  TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Indemnification:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  You agree to defend, indemnify, and hold us
                                  harmless, including our subsidiaries,
                                  affiliates, and all of our respective
                                  officers, agents, partners, and employees,
                                  from and against any loss, damage, liability,
                                  claim, or demand, including reasonable
                                  attorneys’ fees and expenses, made by any
                                  third party due to or arising out of: (1) use
                                  of the Site; (2) breach of these Terms and
                                  Conditions; (3) any breach of your
                                  representations and warranties set forth in
                                  these Terms and Conditions; (4) your violation
                                  of the rights of a third party, including but
                                  not limited to intellectual property rights;
                                  or (5) any overt harmful act toward any other
                                  user of the Site with whom you connected via
                                  the Site. Notwithstanding the foregoing, we
                                  reserve the right, at your expense, to assume
                                  the exclusive defense and control of any
                                  matter for which you are required to indemnify
                                  us, and you agree to cooperate, at your
                                  expense, with our defense of such claims. We
                                  will use reasonable efforts to notify you of
                                  any such claim, action, or proceeding which is
                                  subject to this indemnification upon becoming
                                  aware of it.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>User data:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  We will maintain certain data that you
                                  transmit to the Site for the purpose of
                                  managing the performance of the Site, as well
                                  as data relating to your use of the Site.
                                  Although we perform regular routine backups of
                                  data, you are solely responsible for all data
                                  that you transmit or that relates to any
                                  activity you have undertaken using the Site.
                                  You agree that we shall have no liability to
                                  you for any loss or corruption of any such
                                  data, and you hereby waive any right of action
                                  against us arising from any such loss or
                                  corruption of such data.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>
                                  Electronic Communications, Transactions, and
                                  Signatures:
                                </b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Visiting the Site, sending us emails, and
                                  completing online forms constitute electronic
                                  communications. You consent to receive
                                  electronic communications, and you agree that
                                  all agreements, notices, disclosures, and
                                  other communications we provide to you
                                  electronically, via email and on the Site,
                                  satisfy any legal requirement that such
                                  communication be in writing. YOU HEREBY AGREE
                                  TO THE USE OF ELECTRONIC SIGNATURES,
                                  CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO
                                  ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND
                                  RECORDS OF TRANSACTIONS INITIATED OR COMPLETED
                                  BY US OR VIA THE SITE. You hereby waive any
                                  rights or requirements under any statutes,
                                  regulations, rules, ordinances, or other laws
                                  in any jurisdiction which require an original
                                  signature or delivery or retention of
                                  non-electronic records, or to payments or the
                                  granting of credits by any means other than
                                  electronic means.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>California Users and Residents:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  If any complaint with us is not satisfactorily
                                  resolved, you can contact the Complaint
                                  Assistance Unit of the Division of Consumer
                                  Services of the California Department of
                                  Consumer Affairs in writing at 1625 North
                                  Market Blvd., Suite N 112, Sacramento,
                                  California 95834 or by telephone at (800)
                                  952-5210 or (916) 445- 1254.
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Other:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  These Terms and Conditions and any policies or
                                  operating rules posted by us on the Site or in
                                  respect to the Site constitute the entire
                                  agreement and understanding between you and
                                  us. Our failure to exercise or enforce any
                                  right or provision of these Terms and
                                  Conditions shall not operate as a waiver of
                                  such right or provision. These Terms and
                                  Conditions operate to the fullest extent
                                  permissible by law. We may assign any or all
                                  of our rights and obligations to others at any
                                  time. We shall not be responsible or liable
                                  for any loss, damage, delay, or failure to act
                                  caused by any cause beyond our reasonable
                                  control. If any provision or part of a
                                  provision of these Terms and Conditions is
                                  determined to be unlawful, void, or
                                  unenforceable, that provision or part of the
                                  provision is deemed severable from these Terms
                                  and Conditions and does not affect the
                                  validity and enforceability of any remaining
                                  provisions. There is no joint venture,
                                  partnership, employment or agency relationship
                                  created between you and us as a result of
                                  these Terms and Conditions or use of the Site.
                                  You agree that these Terms and Conditions will
                                  not be construed against us by virtue of
                                  having drafted them. You hereby waive any and
                                  all defenses you may have based on the
                                  electronic form of these Terms and Conditions
                                  and the lack of signing by the parties hereto
                                  to execute these Terms and Use.
                                </p>
                              </ul>

                              <p
                                style={{
                                  fontSize: "17px",
                                  textDecoration: "underline",
                                  marginTop: "15px",
                                }}
                              >
                                <b>Contact:</b>
                              </p>
                              <ul>
                                <p style={{ listStylePosition: "outside" }}>
                                  In order to resolve a complaint regarding the
                                  Site, to make a suggestion, or to ask a
                                  question, please contact us at:
                                </p>
                              </ul>
                              <p style={{ fontSize: "17px" }}>
                                <strong>Peacefully, Inc</strong>
                              </p>
                              <p style={{ fontSize: "17px" }}>
                                <strong>hello@peacefully.com</strong>
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Default;
