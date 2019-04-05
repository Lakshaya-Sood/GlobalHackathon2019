import express from "express";
import compression from "compression";
import bodyparser from "body-parser";
import path from "path";
import helmet from "helmet";
import routes from "./routes";

/*CONSTANTS*/
const DEFAULT_APP_PORT = 7000,
  APP_PROPS = {
    PORT: "port"
  };
/*---------*/

console.info("Initializing express.");
const app = express();
console.info("Express intialized.");

if (process.env.DRP_CF_HTTP_PORT) {
  app.set(APP_PROPS.PORT, process.env.DRP_CF_HTTP_PORT);
} else {
  console.warn(
    `Environment variable PORT is missing. So using DEFAULT port ${DEFAULT_APP_PORT}.`
  );
  app.set(APP_PROPS.PORT, DEFAULT_APP_PORT);
}

//=============================MIDDLEWARE STARTS======================//
/*USING HELMET's MIDDLEWARE*/
//Helmet helps you secure your Express apps by setting various HTTP headers.
//It's best to use Helmet early in your middleware stack so that its headers are sure to be set.
app.use(
  helmet({
    //Config(deafult): TRUE
    dnsPrefetchControl: true, // controls browser DNS prefetching
    frameguard: true, // to prevent clickjacking
    hidePoweredBy: true, // to remove the X-Powered-By header
    hsts: true, // for HTTP Strict Transport Security
    ieNoOpen: true, // sets X-Download-Options for IE8+
    noSniff: true, // to keep clients from sniffing the MIME type
    xssFilter: true, // adds some small XSS protections

    //Config(deafult): FALSE
    contentSecurityPolicy: false, // for setting Content Security Policy
    expectCt: false, // for handling Certificate Transparency
    hpkp: false, // for HTTP Public Key Pinning
    noCache: false, // to disable client-side caching
    referrerPolicy: false // to hide the Referer header
  })
);
/*-------------------------*/

/*USING COMPRESSION MIDDLEWARE*/
// for defalate || gzip compression encodings on response bodies
app.use(compression(/*options*/));
console.info("Compression middleware registered.");
//options[object] => with keys
//'chunkSize',
//'filter' - [when & when not to compress],
//'level' - [range from (-1) to (+9), 9 means highly compressed]
/*----------------------------*/

/*USING BODY PARSER MIDDLEWARE*/
//parses the JSON, buffer, string and URL encoded data submitted using HTTP POST & exposes it on req.body
app.use(bodyparser.json()); // support json encoded bodies
console.info("Bodyparser middleware registered.");
/*----------------------------*/

//=============================MIDDLEWARE ENDS========================//

/*ROUTES*/
console.info("Registering routes.....");
routes(app);
console.info("Route registration complete..");
/*ROUTES*/

/*USING EXPRESS STATIC MIDDLEWARE*/
//serve files from within a given root directory
app.use(express.static(path.join(__dirname, "../")));
console.info("Express Static middleware registered.");
/*-------------------------------*/
export default app;
