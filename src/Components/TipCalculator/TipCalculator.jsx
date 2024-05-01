import "./TipCalculator.css";
import dollar from "../../assets/images/icon-dollar.svg";
import person from "../../assets/images/icon-person.svg";
import React, { useEffect, useState } from "react";

function TipCalculator() {
  //active states
  const [inputSelected, setInputSelected] = useState(null);
  const [chosenSelect, setChosenSelect] = useState(null);

  //
  const [bill, setBill] = useState(null);
  const [people, setPeople] = useState(null);
  //
  const [tipAmount, setTipAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(null);
  //results
  const [total, setTotal] = useState(0);
  const [custom, setCustom] = useState(0);
  //reset

  const handleReset = () => {
    setBill("");
    setChosenSelect("");
    setPeople("");
  };

  return (
    <div className="wrapper">
      <div className="desktop-left">
        <div className="bill-div">
          <h4>Bill</h4>
          <div
            className={`bill-box ${
              inputSelected === 0 ? "selected" : "unselected"
            }`}
          >
            <img src={dollar} alt="" />
            <input
              type="number"
              placeholder="0"
              value={bill}
              onChange={(e) => {
                setBill(e.target.value);
                console.log(reset);
              }}
              onClick={() =>
                setInputSelected((prev) => (prev === 0 ? null : 0))
              }
            />
          </div>
        </div>

        <div className="select">
          <h4>Select Tip %</h4>
          <div className="select-tip">
            <div
              className={`tip-selection ${
                chosenSelect === 0 ? "selected" : "unselected"
              }`}
              onClick={() => {
                setTipPercent((prev) => (prev === 0.05 ? null : 0.05));
                setChosenSelect((prev) => (prev === 0 ? null : 0));
              }}
            >
              <h1>5%</h1>
            </div>
            <div
              className={`tip-selection ${
                chosenSelect === 1 ? "selected" : "unselected"
              }`}
              onClick={() => {
                setTipPercent((prev) => (prev === 0.1 ? null : 0.1));
                setChosenSelect((prev) => (prev === 1 ? null : 1));
              }}
            >
              <h1>10%</h1>
            </div>
            <div
              className={`tip-selection ${
                chosenSelect === 2 ? "selected" : "unselected"
              }`}
              onClick={() => {
                setTipPercent((prev) => (prev === 0.15 ? null : 0.15));
                setChosenSelect((prev) => (prev === 2 ? null : 2));
              }}
            >
              <h1>15%</h1>
            </div>
            <div
              className={`tip-selection ${
                chosenSelect === 3 ? "selected" : "unselected"
              }`}
              onClick={() => {
                setTipPercent((prev) => (prev === 0.25 ? null : 0.25));
                setChosenSelect((prev) => (prev === 3 ? null : 3));
              }}
            >
              <h1>25%</h1>
            </div>
            <div
              className={`tip-selection ${
                chosenSelect === 4 ? "selected" : "unselected"
              }`}
              onClick={() => {
                setTipPercent((prev) => (prev === 0.5 ? null : 0.5));
                setChosenSelect((prev) => (prev === 4 ? null : 4));
              }}
            >
              <h1>50%</h1>
            </div>
            <div
              className={`custom ${
                inputSelected === 1 && chosenSelect === 5
                  ? "selected"
                  : "unselected"
              }`}
              onClick={() => {
                setChosenSelect((prev) => (prev === 5 ? null : 5));
                setInputSelected((prev) => (prev === 1 ? null : 1));
                custom ? setTipPercent(custom / 100) : null;
              }}
            >
              <input
                type="number"
                placeholder="Custom"
                onChange={(e) => {
                  setCustom(e.target.value);
                  setTipPercent(Number(e.target.value) / 100);
                }}
              />
            </div>
          </div>
        </div>

        <div className="number-people">
          <h4>Number of people</h4>
          <h4 className={`${people === "0" ? "error-msg show" : "error-msg"}`}>
            Can't be a zero
          </h4>
          <div
            className={`persons-box ${
              people === "0"
                ? "invalid"
                : inputSelected === 2
                ? "selected"
                : "unselected"
            }`}
          >
            <img src={person} alt="" />
            <input
              type="number"
              placeholder="0"
              value={people}
              onChange={(e) => {
                setPeople(e.target.value);
              }}
              onClick={() => setInputSelected(inputSelected === 2 ? null : 2)}
            />
          </div>
        </div>
      </div>

      <div className="desktop-right">
        <div className="result-box">
          <div className="amount">
            <div className="result-left">
              <h4>Tip Amount</h4>
              <p>/ person</p>
            </div>
            <h1 className="result-number">{`$${
              bill
                ? people && people !== "0"
                  ? tipPercent
                    ? Math.round((bill / people) * tipPercent * 100) / 100
                    : "0"
                  : "0"
                : "0"
            }`}</h1>
          </div>
          <div className="total">
            <div className="result-left">
              <h4>Total</h4>
              <p>/ person</p>
            </div>
            <h1 className="result-number">{`$${
              bill
                ? people && people !== "0"
                  ? tipPercent
                    ? Math.round(
                        (bill / people + (bill / people) * tipPercent) * 100
                      ) / 100
                    : "0"
                  : "0"
                : "0"
            }`}</h1>
          </div>
          <button
            className={`reset ${
              bill
                ? people && people !== "0"
                  ? tipPercent
                    ? "active"
                    : "not-active"
                  : "not-active"
                : "not-active"
            }`}
            onClick={() => handleReset()}
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default TipCalculator;
