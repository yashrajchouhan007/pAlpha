import React, { useState } from "react";
import CheckIcon from "../../Assets/Images/check_plan.png";
import CloseIcon from "../../Assets/Images/x.png";
import UpArrow from "../../Assets/Images/up_arrow.png";

const PlanFeature = ({ features }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="plan_features">
      <div className="feature_detail d-flex justify-content-between align-items-center">
        <div className="feature_label">Featured Details</div>
        <div
          className={`feature_label_arrow ${!toggle ? "collapse_arrow" : ""}`}
          onClick={() => handleToggle()}
        >
          <img src={UpArrow} alt="Icon not found" />
        </div>
      </div>

      {toggle && (
        <div className="feature_detail_item">
          {features.map((feature, index) => {
            return (
              <div
                className="feature_detail_item_row d-flex justify-content-between align-items-center"
                key={`feature_item_${index}`}
              >
                <div className="feature_detail_item_row_content">
                  {feature.feature}
                </div>
                <div className="feature_detail_item_row_icon">
                  <img
                    src={feature.status ? CheckIcon : CloseIcon}
                    alt="Icon not found"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlanFeature;
