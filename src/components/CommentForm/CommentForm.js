import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./style.css";
import { PERSPECTIVE_API_URL, TOXICITY_THRESHOLD } from "../constants";

class CommentForm extends React.Component {
  checkForToxicity = (values, { setErrors, resetForm }) => {
    axios
      .post(PERSPECTIVE_API_URL, {
        comment: {
          text: values.comment
        },
        languages: ["en"],
        requestedAttributes: {
          TOXICITY: {}
        }
      })
      .then(res => {
        const estimatedToxicity =
          res.data.attributeScores.TOXICITY.summaryScore.value;
        if (estimatedToxicity >= TOXICITY_THRESHOLD) {
          // Toxic comment found reject
          return setErrors({
            comment: "Please dial it back, your comment was deemed toxic"
          });
        }
        resetForm();
        return this.props.onSubmit(values);
      })
      .catch(() => {
        // Handlesubmit even if this fails???
      });
  };

  render() {
    return (
      <div className="CommentForm">
        <Formik
          initialValues={{ comment: "" }}
          onSubmit={this.checkForToxicity}
          validationSchema={Yup.object().shape({
            comment: Yup.string().required("Please enter a comment")
          })}
        >
          {props => {
            const {
              values,
              errors,
              touched,
              isSubmitting,
              handleChange,
              handleSubmit
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <textarea
                  className={`CommentForm__Textarea ${errors.comment &&
                    touched.comment &&
                    "CommentForm__Textarea--error"}`}
                  placeholder="Enter your comment..."
                  value={values.comment}
                  onChange={handleChange}
                  name="comment"
                />
                <div className="CommentForm__Actions">
                  <div className="CommentForm__Error">{errors.comment}</div>
                  <button className="CommentForm__Submit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default CommentForm;
