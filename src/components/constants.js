export const PERSPECTIVE_API_URL = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${
  process.env.REACT_APP_API_KEY
}`;

export const TOXICITY_THRESHOLD = 0.6;
