import React, { useEffect, useMemo, useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { useSelector } from "react-redux";

import PlanFeature from "./PlanFeature";
import PlanDialog from "./Dialogs/PlanDialog";
import { getUserPlan } from "../../Services/User";

import "./plan.css";

const getDiscountPrice = (price) => {
  let prices = price
    .split('or')
    .map(item => item.replace(/\D/g, ''))
    .map(item => {
      const discounted = Number(item) * 0.8;
      if (discounted % 1 === 0) return discounted;
      return discounted.toFixed(1);
    });

  return `$${prices[0]}/mo or $${prices[1]}/yr`;
}

const Default = () => {
  const account = useSelector((state) => state.account);
  const { sessionInfo } = useSelector((state) => state.account);
  const { currentUser: { trailPeriod } = {} } = sessionInfo;

  const [planList, setPlanList] = useState([]);
  const [plan, setPlan] = useState();
  
  const isIn24Hr = useMemo(() => {
    if (!account?.user?.created_at) return false;
    const createdDate = new Date(account?.user?.created_at || null).getTime();
    const currentDate = new Date().getTime();
    return (currentDate - createdDate) < (3600 * 1000 * 24)
  }, [account?.user?.created_at]);

  useEffect(
    () => getPlanList(),
    // eslint-disable-next-line
    []
  );

  const getPlanList = () => {
    getUserPlan(account.token)
      .then((res) => {
        console.log("API response", res.data.data);
        setPlanList(res?.data?.data || []);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChoosePlan = (e, id, name) => {
    setPlan({
      id,
      name,
      e,
      trailPeriod,
    });
  };

  return (
    <div className="container-fluid p-4 plan-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center module_heading">Select your plan</h1>
          </div>
        </div>

        <div className="row">
          {planList.map((plan, index) => {
            return (
              <div className="col-md-4" key={`planlist${index}`}>
                <div className="plan_grid">
                  <div className="plan_tile">
                    <div className="plan_heading text-uppercase">
                      {plan.name}
                    </div>

                    {isIn24Hr ? (
                      <>
                        <div className="plan_discount_price">
                          {plan.price}
                        </div>

                        <div className="plan_price">
                          {getDiscountPrice(plan.price)}
                        </div>
                      </>
                    ) : (
                      <div className="plan_price">
                        {plan.price}
                      </div>
                    )}

                    <div className="plan_description">
                      {plan.description}
                    </div>

                    <div className="plan_action">
                      <DropdownButton
                        title="Select Plan"
                        className="plan_button_dropdown"
                        onSelect={(e) =>
                          handleChoosePlan(e, plan.id, plan.price)
                        }
                      >
                        <Dropdown.Item eventKey="month">
                          Monthly
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="year">
                          Yearly
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <PlanFeature features={plan.features} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!!plan && (
        <PlanDialog
          choosePlan={plan}
          handleClose={() => setPlan(null)}
        />
      )}
    </div>
  );
};

export default Default;
