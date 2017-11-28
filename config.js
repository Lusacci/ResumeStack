const env = process.env;

export const nodeEnv = env.NODE_ENV || "developmentByJamesTam";

export const jtLog = function(message) {
    console.info("******");
    console.info(message);
    console.info("******");
;}

export default {
  
    port: env.PORT || 1337 

};
