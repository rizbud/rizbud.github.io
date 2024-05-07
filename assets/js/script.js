/**
 * Delay or sleep for a given time in milliseconds
 * @param {number} ms - time to wait in milliseconds
 * @returns {Promise<any>}
 */
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
