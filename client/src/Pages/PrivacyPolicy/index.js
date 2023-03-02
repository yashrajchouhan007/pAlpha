import React, { useEffect } from "react";

const Default = () => {
  useEffect(() => {
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
                              <img
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  margin: "0 0 15px 0",
                                }}
                                width="50"
                                height="50"
                                src="https://s3.amazonaws.com/branding-materials/peacefully-round-logo.png"
                                alt="Peacefully's round icon"
                              />
                              <h1 style={{ fontSize: "30px" }}>
                                Privacy Policy
                              </h1>
                              <p style={{ fontSize: "17px" }}>
                                Effective Date: June 11, 2020
                              </p>
                              <p style={{ fontSize: "17px" }}>
                                Peacefully is committed to helping you with all
                                of the loose ends of life, a large part of which
                                is keeping your data safe. When you use one of
                                our offerings, you trust us with your personal
                                information and sometimes that of a loved one.
                                We help safeguard that data and protect your
                                privacy by using industry-leading technology and
                                practices, detailed in our Privacy Policy below.
                                .
                              </p>
                              <hr
                                style={{
                                  display: "block",
                                  height: "1px",
                                  border: 0,
                                  borderTop: "1px solid #E1E1E4",
                                  margin: "30px",
                                }}
                              />
                              <p style={{ fontSize: "17px" }}>
                                <b>Here is what is included in the policy:</b>
                              </p>
                              <ul
                                style={{
                                  paddingLeft: "25px",
                                  marginTop: "15px",
                                }}
                              >
                                <ol style={{ listStyleType: "upper-roman" }}>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    Introduction
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    Information We Collect
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    How We Use Information We Collect
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    How We Share Information and Who We Share It
                                    With
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    How We Protect Your Information
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    Information for California Residents
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    Changes To This Policy
                                  </li>
                                  <li
                                    style={{
                                      listStylePosition: "outside",
                                      marginBottom: "5px",
                                    }}
                                  >
                                    Contacting Us
                                  </li>
                                </ol>
                              </ul>
                              <hr
                                style={{
                                  display: "block",
                                  height: "1px",
                                  border: 0,
                                  borderTop: "1px solid #E1E1E4",
                                  margin: "30px",
                                }}
                              />
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginTop: "10px",
                                }}
                              >
                                <b> I. Introduction:</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Peacefully, Inc. ("us", "we", or "our")
                                  operates and provides services through the
                                  www.peacefully.com website (the “Site” or
                                  "Service"). This Privacy Policy applies to all
                                  users of our sites and services and covers
                                  what information we collect and why we collect
                                  it, how we use the information we collect, and
                                  the choices you have to access and update that
                                  information. .
                                </p>
                              </ul>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  The scope of this Privacy Policy covers both
                                  your use of the peacefully.com website and any
                                  other ways in which you may interact with us,
                                  such as when you speak to us on the phone.
                                  This privacy policy does not apply to any
                                  sites and services that do not display or link
                                  to this privacy policy, or that have their own
                                  privacy policies. .
                                </p>
                              </ul>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  This Privacy Policy is incorporated into our
                                  Terms of Use, and therefore governs your use
                                  of the Service. By using the Service, you
                                  agree to the collection, use, disclosure, and
                                  retention of your personal information as
                                  described in this privacy policy. Each time
                                  you use our sites and services, the current
                                  version of this privacy policy will apply. If
                                  you do not agree to this privacy policy,
                                  please do not use our sites or services. .
                                </p>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <b> II. Information We Collect</b>
                              </p>

                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Personal Information</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  While using our Service, we may ask you to
                                  provide us with certain personally
                                  identifiable information that can be used to
                                  contact or identify you or a deceased loved
                                  one, to deliver the Service ("Personal Data"
                                  or “Personal Information”). The Personal
                                  Information collected depends on the type of
                                  interaction we have with a consumer (such as
                                  calling, visiting our website, registering for
                                  an account, the types of Service a consumer
                                  considers or purchases, and what information
                                  customers choose to share with us). This
                                  section includes all of the information that
                                  we may collect but we will rarely collect all
                                  of these types of information about any single
                                  person. In each of the below instances, you
                                  will know what personal information we collect
                                  through our sites and services because you
                                  voluntarily and directly provide it to us:
                                </p>
                                <ul
                                  style={{
                                    paddingRight: "30px",
                                    paddingLeft: "30px",
                                  }}
                                >
                                  <ol>1) Email address</ol>
                                  <ol>2) First name and last name</ol>
                                  <ol>3) Phone number</ol>
                                  <ol>
                                    4) Address, State, Province, ZIP/Postal
                                    code, City
                                  </ol>
                                  <ol>5) Date of birth/death</ol>
                                  <ol>6) Social Security Number</ol>
                                  <ol>7) Cookies and Usage Data</ol>
                                </ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginTop: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Usage Data</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  We may also collect information on how the
                                  Service is accessed and used ("Usage Data").
                                  This Usage Data may include information such
                                  as your computer's Internet Protocol address
                                  (e.g. IP address), browser type, browser
                                  version, the pages of our Service that you
                                  visit, the time and date of your visit, the
                                  time spent on those pages, unique device
                                  identifiers and other diagnostic data.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginTop: "15px",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Tracking &amp; Cookies Data</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  We use cookies and similar tracking
                                  technologies to track the activity on our
                                  Service and hold certain information. Cookies
                                  are files with a small amount of data which
                                  may include an anonymous unique identifier.
                                  Cookies are sent to your browser from a
                                  website and stored on your device. Tracking
                                  technologies also used are beacons, tags, and
                                  scripts to collect and track information and
                                  to improve and analyze our Service. You can
                                  instruct your browser to refuse all cookies or
                                  to indicate when a cookie is being sent.
                                  However, if you do not accept cookies, you may
                                  not be able to use some portions of our
                                  Service
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  Below are examples of Cookies we use:
                                </p>
                                <ul
                                  style={{
                                    paddingRight: "30px",
                                    paddingLeft: "30px",
                                  }}
                                >
                                  <ol>
                                    1) Session Cookies. We use Session Cookies
                                    to operate our Service
                                  </ol>
                                  <ol>
                                    2) Preference Cookies. We use Preference
                                    Cookies to remember your preferences and
                                    various settings
                                  </ol>
                                  <ol>
                                    3) Security Cookies. We use Security Cookies
                                    for security purposes
                                  </ol>
                                </ul>
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginTop: "15px",
                                }}
                              >
                                <b>III. How We Use Collected Information</b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                    marginTop: "10px",
                                  }}
                                >
                                  Peacefully, Inc. uses the collected data for
                                  various purposes, including:
                                </p>
                                <ul
                                  style={{
                                    paddingRight: "30px",
                                    paddingLeft: "30px",
                                  }}
                                >
                                  <ol>
                                    1) To provide and maintain the Services
                                  </ol>
                                  <ol>
                                    2) To notify you about changes to our
                                    Service
                                  </ol>
                                  <ol>
                                    3) To allow you to participate in
                                    interactive features of our Service when you
                                    choose to do so
                                  </ol>
                                  <ol>
                                    4) To provide customer care and support
                                  </ol>
                                  <ol>
                                    5) To provide analysis or valuable
                                    information so that we can improve the
                                    Service
                                  </ol>
                                  <ol>
                                    6) To monitor the usage of the Service
                                  </ol>
                                  <ol>
                                    7) To detect, prevent and address technical
                                    issues
                                  </ol>
                                  <ol>8) To improve our products</ol>
                                  <ol>
                                    9) To provide business partners information
                                    in connection with consumers who have
                                    expressed interest in hearing from the
                                    business partner
                                  </ol>
                                </ul>
                              </ul>
                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginTop: "15px",
                                  marginBottom: "5px",
                                }}
                              >
                                <u>Personal Information</u>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  Except as otherwise stated in this Privacy
                                  Policy, we do not sell, trade, rent or
                                  otherwise share for marketing purposes your
                                  Personal Information with third parties
                                  without your consent. We do share Personal
                                  Information with vendors who are performing
                                  services for the Company, such as the servers
                                  for our email communications who are provided
                                  access to users’ email address for purposes of
                                  sending emails from us. Those vendors use your
                                  Personal Information only at our direction. In
                                  general, the Personal Information you provide
                                  to us is used to help us communicate with you.
                                  For example, we use Personal Information to
                                  contact users in response to questions,
                                  solicit feedback from users, and provide
                                  assistance.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  We may share Personal Information with outside
                                  parties if we have a good-faith belief that
                                  access, use, preservation or disclosure of the
                                  information is reasonably necessary to meet
                                  any applicable legal process or enforceable
                                  governmental request; to enforce applicable
                                  Terms of Service, including investigation of
                                  potential violations; address fraud, security
                                  or technical concerns; or to protect against
                                  harm to the rights, property, or safety of our
                                  users or the public as required or permitted
                                  by law.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  In the event we undergo a business transaction
                                  such as a merger, acquisition by another
                                  company, or sale of all or a portion of our
                                  assets, your Personal Information may be among
                                  the assets transferred. You acknowledge and
                                  consent that such transfers may occur and are
                                  permitted by this Privacy Policy, and that any
                                  acquirer of our assets may continue to process
                                  your Personal Information as set forth in this
                                  Privacy Policy. If our information practices
                                  change at any time in the future, we will post
                                  the policy changes to the Site so that you may
                                  opt out of the new information practices. We
                                  suggest that you check the Site periodically
                                  if you are concerned about how your
                                  information is used.
                                </p>
                              </ul>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginTop: "15px",
                                  marginBottom: "5px",
                                }}
                              >
                                <u>Non-Personal Usage Information:</u>
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                In general, we use Non-Personal Information to
                                help us improve the Service and customize the
                                user experience. We also aggregate Non-Personal
                                Information in order to track trends and analyze
                                use patterns on the Site. This Privacy Policy
                                does not limit in any way our use or disclosure
                                of Non-Personal Information and we reserve the
                                right to use and disclose such Non-Personal
                                Information to our partners, advertisers and
                                other third parties at our discretion.
                              </p>

                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "10px",
                                  marginTop: "10px",
                                }}
                              >
                                <b>
                                  IV. How We Share Information and Who We Share
                                  It With
                                </b>
                              </p>
                              <ul>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  In this section of the Privacy Policy, we
                                  explain who we share consumer information with
                                  and under which circumstances we may do so.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Service Providers</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  We may employ third party companies and
                                  individuals to facilitate our Service
                                  ("Service Providers"), to provide the Service
                                  on our behalf, to perform Service-related
                                  services or to assist us in analyzing how our
                                  Service is used. These third parties have
                                  access to your Personal Data only to perform
                                  these tasks on our behalf and are obligated
                                  not to disclose or use it for any other
                                  purpose.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Analytics</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  We may use third-party Service Providers to
                                  monitor and analyze the use of our Service,
                                  such as Google Analytics. Google Analytics is
                                  a web analytics service offered by Google that
                                  tracks and reports website traffic. Google
                                  uses the data collected to track and monitor
                                  the use of our Service. This data is shared
                                  with other Google services. Google may use the
                                  collected data to contextualize and
                                  personalize the ads of its own advertising
                                  network. You can opt-out of having made your
                                  activity on the Service available to Google
                                  Analytics by installing the Google Analytics
                                  opt-out browser add-on. The add-on prevents
                                  the Google Analytics JavaScript (ga.js,
                                  analytics.js, and dc.js) from sharing
                                  information with Google Analytics about visits
                                  activity. For more information on the privacy
                                  practices of Google, please visit the Google
                                  Privacy & Terms web page
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Linked Websites and Services</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Our sites and services may link to other sites
                                  or services operated by third parties, and may
                                  carry advertisements or offer content,
                                  functionality, newsletters, contests or
                                  sweepstakes, or applications developed and
                                  maintained by third parties. We do not
                                  exercise control over third party sites or
                                  services. We are not responsible for the
                                  privacy practices of any such third parties.
                                  Once you leave our sites or services via a
                                  link, enable a third-party service, or click
                                  an advertisement, you should check the
                                  applicable privacy policy of the third-party's
                                  site or service. The fact that we link to a
                                  website or present a banner ad or other type
                                  of advertisement is not an endorsement,
                                  authorization, or representation of our
                                  affiliation with that third party nor is it an
                                  endorsement of their privacy or information
                                  security policies or practices. We have no
                                  control over and assume no responsibility for
                                  the content, privacy policies or practices of
                                  any third party sites or services. We may also
                                  provide social media features on our sites and
                                  services that enable you to share personal
                                  information with your social network(s) and to
                                  interact with our sites and services.
                                  Depending on the features, your use of these
                                  features may result in the collection or
                                  sharing of personal information about you. We
                                  encourage you to review the privacy policies
                                  and settings on the social media site(s) with
                                  which you interact.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Legal Requirements</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "15px",
                                  }}
                                >
                                  Peacefully, Inc. may disclose your Personal
                                  Data in the good faith belief that such action
                                  is necessary to:
                                </p>
                                <ul
                                  style={{
                                    paddingRight: "30px",
                                    paddingLeft: "30px",
                                    marginBottom: "15px",
                                  }}
                                >
                                  <ol>1) To comply with a legal obligation</ol>
                                  <ol>
                                    2) To protect and defend the rights or
                                    property of Peacefully, Inc.
                                  </ol>
                                  <ol>
                                    3) To prevent or investigate possible
                                    wrongdoing in connection with the Service
                                  </ol>
                                  <ol>
                                    4) To protect the personal safety of users
                                    of the Service or the public
                                  </ol>
                                  <ol>5) Cookies and Usage Data</ol>
                                </ul>
                                <p
                                  style={{
                                    fontSize: "17px",
                                    marginBottom: "10px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <b>V. How We Protect Information</b>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Security of Data</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  The security of your data is important to us,
                                  but remember that no method of transmission
                                  over the Internet, or method of electronic
                                  storage is 100% secure. While we strive to use
                                  commercially acceptable means to protect your
                                  Personal Data, we cannot guarantee its
                                  absolute security. We implement security
                                  measures designed to protect your information
                                  from unauthorized access. Your account is
                                  protected by your account password and we urge
                                  you to take steps to keep your personal
                                  information safe by not disclosing your
                                  password and by logging out of your account
                                  after each use. We further protect your
                                  information from potential security breaches
                                  by implementing certain technological security
                                  measures including encryption, firewalls and
                                  secure socket layer technology. However, these
                                  measures do not guarantee that your
                                  information will not be accessed, disclosed,
                                  altered or destroyed by breach of such
                                  firewalls and secure server software. By using
                                  our Service, you acknowledge that you
                                  understand and agree to assume these risks.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Transfer Of Data</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  Your information, including Personal Data, may
                                  be transferred to — and maintained on —
                                  computers located outside of your state,
                                  province, country or other governmental
                                  jurisdiction where the data protection laws
                                  may differ than those from your
                                  jurisdiction.If you are located outside of the
                                  United States and choose to provide
                                  information to us, please note that we
                                  transfer the data, including Personal Data, to
                                  the United States and process it there. Your
                                  consent to this Privacy Policy followed by
                                  your submission of such information represents
                                  your agreement to that transfer. Peacefully,
                                  Inc. will take all steps reasonably necessary
                                  to ensure that your data is treated securely
                                  and in accordance with this Privacy Policy and
                                  no transfer of your Personal Data will take
                                  place to an organization or a country unless
                                  there are adequate controls in place including
                                  the security of your data and other personal
                                  information.
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <u>Children's Privacy</u>
                                </p>
                                <p
                                  style={{
                                    listStylePosition: "outside",
                                    marginBottom: "10px",
                                  }}
                                >
                                  The Site and the Service does not address
                                  anyone under the age of 18. The Site does not
                                  knowingly collect or solicit information from
                                  anyone under the age of 18, or allow anyone
                                  under the age of 18 to sign up for the
                                  Service. In the event that we learn that we
                                  have gathered personal information from anyone
                                  under the age of 18 without the consent of a
                                  parent or guardian, we will delete that
                                  information as soon as possible. If you
                                  believe we have collected such information,
                                  please contact us at hello@peacefully.com.
                                </p>{" "}
                              </ul>
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "10px",
                                  marginTop: "20px",
                                }}
                              >
                                <b>VI. Information for California Residents</b>
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                If you are a resident of California, this
                                section provides information regarding your
                                rights and Peacefully’s responsibilities
                                regarding your Personal Information.
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "5px",
                                }}
                              >
                                <u>California Resident Rights</u>
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                California law allows California residents, upon
                                a verifiable consumer request, to request that a
                                business that collects consumers’ Personal
                                Information give consumers access to certain
                                information. This includes the specific pieces
                                and categories of Personal Information that the
                                business has collected about the consumer, the
                                categories of sources for that information, the
                                business or commercial purposes for collecting
                                the information, and the categories of third
                                parties with which the information was shared.
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                California residents also have the right to
                                submit a request for deletion of information
                                under certain circumstances. This is not an
                                absolute right and, in some circumstances,
                                Peacefully may decline to delete the
                                information, such as when we have an on-going
                                business relationship with you, when we have a
                                continued need to use the information for
                                purposes outlined in this Privacy Policy, or
                                when we are legally required to retain the
                                information.
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                Consistent with California law, if you choose to
                                exercise your rights, we will not charge you
                                different prices or provide different quality of
                                services unless those differences are related to
                                your information.
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "5px",
                                }}
                              >
                                <u>
                                  How to Submit a Request for Access to
                                  Information or Deletion of Information
                                </u>
                              </p>
                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                If you would like to submit a request about your
                                data, you can do so by emailing
                                hello@peacefully.com or by calling our toll-free
                                number at (657) 999-0791.
                              </p>
                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                After you submit the request you will be asked
                                to verify your email address and may also be
                                asked to provide additional information in order
                                to verify your identity, including potentially
                                providing a declaration under penalty of
                                perjury. Peacefully will attempt to verify your
                                identity by asking for information that
                                correlates with the information that we have
                                previously collected about you. Where this is
                                not possible, Peacefully may request you submit
                                additional information for verification, such as
                                proof of residency or redacted government-issued
                                identification. Please note that consistent with
                                California law, we will be unable to satisfy
                                your request until we have verified your
                                identity.
                              </p>
                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "10px",
                                }}
                              >
                                You may also designate an authorized agent to
                                make a request on your behalf. In order to
                                designate an authorized agent to make a request
                                on your behalf, you must provide Peacefully with
                                written permission for the agent to make the
                                request on your behalf or provide us with an
                                executed power of attorney. You will also be
                                required to submit your valid government
                                issued-identification, and the authorized
                                agent’s valid government-issued identification.
                              </p>
                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "10px",
                                  marginTop: "20px",
                                }}
                              >
                                <b>VII. Changes To This Policy</b>
                              </p>

                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "15px",
                                }}
                              >
                                We may update our Privacy Policy from time to
                                time. We will notify you of any changes by
                                posting the new Privacy Policy on this page. We
                                will let you know via email and/or a prominent
                                notice on our Service, prior to the change
                                becoming effective and update the "effective
                                date" at the top of this Privacy Policy. You are
                                advised to review this Privacy Policy
                                periodically for any changes. Changes to this
                                Privacy Policy are effective when they are
                                posted on this page.
                              </p>

                              <p
                                style={{
                                  fontSize: "17px",
                                  marginBottom: "10px",
                                  marginTop: "20px",
                                }}
                              >
                                <b>VIII. Contacting Us</b>
                              </p>
                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "25px",
                                }}
                              >
                                Need assistance? Want to file a complaint about
                                the site, make a suggestion, or ask a question?
                                Send us a message at hello@peacefully.com.
                              </p>
                              <p
                                style={{
                                  listStylePosition: "outside",
                                  marginBottom: "15px",
                                }}
                              >
                                And as always, thank you for allowing us to help
                                you.
                              </p>

                              <p style={{ fontSize: "17px" }}>
                                <strong>The Peacefully team</strong>
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
