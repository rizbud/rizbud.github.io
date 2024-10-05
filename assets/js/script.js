/**
 * Delay or sleep for a given time in milliseconds
 * @param {number} ms - time to wait in milliseconds
 * @returns {Promise<any>}
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 *
 * @param {'contact' | 'hire'} event_category
 * @param {'Contact Me' | 'Hire Me on Upwork} event_label
 */
const trackGenerateLead = (event_category, event_label) => {
  // Track lead generation
  gtag("event", "generate_lead", {
    currency: "USD",
    value: 1,
    event_category,
    event_label,
  });
};
