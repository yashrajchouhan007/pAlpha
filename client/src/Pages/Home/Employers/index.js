import React, { useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import RequestDialog from "../dialog/RequestDialog";
import "./employer.scss";

export default function EmployersPage(props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="employer_page">
      <div className="employer_page-request">
        <h6 className="employer_page-request-title">
          Show your employees you care when it matters most
        </h6>
        <p className="employer_page-request-desc">
          Unlike other end-of-life care companies, we aren't just resource
          providers or navigators, we are doers. From guiding employees through
          personalized planning to helping get affairs in order after a death in
          the family, Peacefully takes the work off of your employees and allows
          them to focus on what matters.
        </p>
        <Button className="custom_btn" onClick={(e) => setDialogOpen(true)}>
          Request a Demo
        </Button>
        {/* <button className="employer_page-request-btn">Request a Demo</button> */}
      </div>
      <div className="employer_page-benefit">
        <div className="employer_page-benefit-title">
          Why provide Peacefully as a benefit
        </div>
        <div className="employer_page-benefit-wrapper">
          <div className="employer_page-benefit-wrapper-item">
            <p className="employer_page-benefit-wrapper-item-title">
              Increase employee productivity:
            </p>
            <p className="employer_page-benefit-wrapper-item-desc">
              The average person spends 500 hours settling an estate, and most
              of these tasks have to be done Monday - Friday during business
              hours. On top of this, the average employee experiencing grief
              takes off 30 work days the first year, and 20% continue to lose
              days of work the following year. The overall financial loss in
              productivity to business is estimated to be $75B per year.
            </p>
          </div>
          <div className="employer_page-benefit-wrapper-item">
            <p className="employer_page-benefit-wrapper-item-title">
              Differentiate your benefits package with a value-added offering,
              applicable to all employees:
            </p>
            <p className="employer_page-benefit-wrapper-item-desc">
              37% of Americans dealt with the death of their spouse/partner,
              child, or another close family member or friend in the past year,
              and 38% dealt with the diagnosis of their or a family member’s
              serious illness. On top of that, more than 56% of Americans think
              having a will is important.
            </p>
          </div>
          <div className="employer_page-benefit-wrapper-item">
            <p className="employer_page-benefit-wrapper-item-title">
              Show your employees you care:
            </p>
            <p className="employer_page-benefit-wrapper-item-desc">
              56% of employees would consider leaving a job if their employer
              failed to provide proper support if someone close to them died.
            </p>
          </div>
        </div>
      </div>
      <div className="employer_page-feature">
        <div className="employer_page-feature-title">Features</div>
        <div className="employer_page-feature-wrapper">
          <div className="employer_page-feature-wrapper-item">
            <p className="employer_page-feature-wrapper-item-title">
              Secure Digital Lockbox:
            </p>
            <p className="employer_page-feature-wrapper-item-desc">
              Security is the most critical component of providing peace of
              mind. Peacefully uses SOC 2, HIPAA, and PCI DSS certified systems
              to ensure that your employee, customer, clients or member’s
              sensitive information, wishes, and files are safe.
            </p>
          </div>
          <div className="employer_page-feature-wrapper-item">
            <p className="employer_page-feature-wrapper-item-title">
              Personalized Guidance:
            </p>
            <p className="employer_page-feature-wrapper-item-desc">
              A dedicated expert is ready to support your employees with the
              answers they need, local referrals, and even taking tasks off
              their hands - so your employees aren't spending their days
              searching for information on antiquated websites or on hold with
              bureaucratic agencies.
            </p>
          </div>
        </div>
      </div>

      <div className="employer_page-partner">
        <div className="employer_page-partner-title">
          How can I partner with Peacefully?
        </div>
        <div className="employer_page-partner-wrapper">
          <div className="employer_page-partner-wrapper-item">
            <p className="employer_page-partner-wrapper-item-title">Sponsor:</p>
            <p className="employer_page-partner-wrapper-item-desc">
              Organizations can cover the costs of a Peacefully subscription on
              behalf of their employees, clients, or customers.
            </p>
          </div>
          <div className="employer_page-partner-wrapper-item">
            <p className="employer_page-partner-wrapper-item-title">
              Discount:
            </p>
            <p className="employer_page-partner-wrapper-item-desc">
              Organizations can co-market Peacefully, and receive a discount on
              behalf of their employees, clients, or customers.
            </p>
          </div>
        </div>
      </div>
      <div className="employer_page-feature"></div>

      {dialogOpen && <RequestDialog dialogClose={() => setDialogOpen(false)} />}
    </div>
  );
}
