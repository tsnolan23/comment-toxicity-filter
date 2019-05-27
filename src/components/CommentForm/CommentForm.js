import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import "./style.css";
import Card from "../Card";
import { PERSPECTIVE_API_URL } from "../constants";

class CommentForm extends React.Component {
  checkForToxicity = (values, { setErrors, resetForm }) => {
    axios
      .post(PERSPECTIVE_API_URL, {
        comment: {
          text: values.comment
        },
        languages: ["en"],
        requestedAttributes: {
          TOXICITY: {},
          INSULT: {},
          FLIRTATION: {},
          THREAT: {}
        }
      })
      .then(res => {
        return this.props.onSubmit(values, res.data.attributeScores);
      })
      .catch(() => {
        // Handlesubmit even if this fails???
      });
  };

  render() {
    return (
      <Card>
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
      </Card>
    );
  }
}

export default CommentForm;
