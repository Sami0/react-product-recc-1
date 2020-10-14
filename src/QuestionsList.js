import React from "react";
//import ReactDOM from "react-dom";
import "./styles.css";
import { Formik, Field, Form } from "formik";
import Button from "@material-ui/core/Button";
import LaptopBoxDisplay from "./LaptopBoxDisplay";
// parent component
function SingleQuestion(props) {
  return (
    <div>
      <p className="QuestionTXT">{props.QuestionTXT}</p>
      <p className="OptionTXT">{props.OptionONE}</p>
      <p className="OptionTXT">{props.OptionTWO}</p>
      <p className="OptionTXT">{props.OptionTHREE}</p>
      <p className="OptionTXT">{props.OptionFOUR}</p>
    </div>
  );
}
//childern
function Q1(props) {
  return <SingleQuestion QuestionTXT="Q1 : Which OS do you prefer ? " />;
}

function Q2(props) {
  return (
    <SingleQuestion QuestionTXT="Q2 : do you need more than 1000 GB of storage ?  " />
  );
}
function Q3(props) {
  return (
    <SingleQuestion QuestionTXT="Q3 : What is your RAM Memory / speed preference ?   " />
  );
}
function Q4(props) {
  return (
    <SingleQuestion QuestionTXT="Q4 : What is your Price range for total Value" />
  );
}
function Q5(props) {
  return (
    <SingleQuestion QuestionTXT="Q5 : Which store do you prefer to shop from ?" />
  );
}

const QsContent = () => (
  <div>
    <Formik
      initialValues={{
        picked: " user picked"
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(JSON.stringify(values, null, 5));
      }}
    >
      {({ values }) => (
        <Form>
          <div id="my-laptop-choices"></div>
          <div role="group" aria-labelledby="my-OS-choice">
            {/* 1-Qs  */}
            <Q1 />
            <label>
              <Field type="radio" id="MAC-OS" name="OS-choice" value="MAC" />
              Mac
            </label>
            <br />
            <br />
            <label>
              <Field
                type="radio"
                id="UBUNTU-OS"
                name="OS-choice"
                value="Ubuntu"
              />
              Ubuntu
            </label>
            <br />
            <br />
            <label>
              <Field
                type="radio"
                id="PURE-OS"
                name="OS-choice"
                value="PureOS"
              />
              Pure OS
            </label>
            <br />
            <br />
            <label>
              <Field
                type="radio"
                id="WINDOWS-OS"
                name="OS-choice"
                value="Windows"
              />
              Windows
            </label>
          </div>

          <Q2 />
          <div
            className="testing-green"
            role="group"
            aria-labelledby="my-Storage-choice"
          >
            {/* 2-Qs  */}

            <label>
              <Field
                type="radio"
                id="4000GB"
                name="storage-choice"
                value="4000GB"
              />
              Yes, I need MOST storage 4TB (4000 GB) or more{" "}
            </label>
            <br />
            <br />
            <label>
              <Field
                type="radio"
                id="1000GB"
                name="storage-choice"
                value="1000GB"
              />
              Yes, I need at least 1 TB = 1000 GB
            </label>
            <br />
            <br />
            <label>
              <Field
                type="radio"
                id="500GB"
                name="storage-choice"
                value="500GB"
              />
              No, it is nice to have more but I can work with 500 GB
            </label>
            <br />
            <br />
            <label>
              <Field
                type="radio"
                id="100GB"
                name="storage-choice"
                value="100GB"
              />
              No, even less than 100 GB is fine.
            </label>
          </div>

          <Q3 />
          <div
            className="testing-green"
            role="group"
            aria-labelledby="my-RAM-choice"
          >
            {/* 3-Qs  */}

            <label>
              <Field type="radio" id="64GB" name="RAM-choice" value="64GB" />{" "}
              fastest speed available is top priority (64 GB)
            </label>
            <br />
            <br />

            <Field
              type="radio"
              id="16_32GB"
              name="RAM-choice"
              value="16_32GB"
            />
            <label> it needs to be at least (16GB - 32 GB) </label>
            <br />
            <br />

            <Field type="radio" id="4_8GB" name="RAM-choice" value="4_8GB" />
            <label> Most basic speed is okay (4GB-8GB ) </label>
            <br />
            <br />
          </div>

          {/* 4-Qs */}
          <Q4 />
          <div
            className="testing-green"
            role="group"
            aria-labelledby="my-price-choice"
          >
            <Field type="radio" id="<1000" name="PriceR-choice" value="<1000" />
            <label> less than $1000 </label>
            <br />
            <br />

            <Field
              type="radio"
              id="1000-1500"
              name="PriceR-choice"
              value="app1500"
            />
            <label> $1000 -$1500</label>
            <br />
            <br />

            <Field
              type="radio"
              id="1500-2000"
              name="PriceR-choice"
              value="app2000"
            />
            <label> $1500-$2000 </label>
            <br />
            <br />

            <Field
              type="radio"
              id="2000-3500"
              name="PriceR-choice"
              value="app3500"
            />
            <label> $2000-3500 </label>
            <br />
            <br />

            <Field type="radio" id="3500+" name="PriceR-choice" value="3500+" />
            <label> more than $3500 </label>
            <br />
            <br />
          </div>

          {/* 5-Qs */}
          <Q5 />
          <div
            className="testing-green"
            role="group"
            aria-labelledby="my-store-choice"
          >
            {/* 5-Qs  Original store  */}
            <Field
              type="radio"
              id="original-store"
              name="store-choice"
              value="original-store"
            />
            <label> directly from brand store </label>
            <br /> <br />
            {/* 5-Qs  Affirm affiliated  stores  */}
            <Field
              type="radio"
              id="affirm"
              name="store-choice"
              value="affirm"
            />
            <label> online stores that use affirm </label>
            <br /> <br />
            {/* 5-Qs  Amazon */}
            <Field
              type="radio"
              id="Amazon<"
              name="store-choice"
              value="Amazon<"
            />
            <label> Amazon</label>
          </div>
          <br />
          <br />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

function QuestionsList(props) {
  return (
    <div>
      <p> - </p>

      <div>
        <QsContent />
      </div>

      <div>
        <LaptopBoxDisplay />
      </div>
    </div>
  );
}

export default QuestionsList;
