import Raven from "raven-js"


function init(){
  Raven.config(
    "https://0b1e5d6cfa2e462fa0c4a21f82dc34eb@sentry.io/1304725"
  ).install()
}

function log(error){
  Raven.captureException(error)
}

// interpreter of logger service
export default {
  init,
  log
}
