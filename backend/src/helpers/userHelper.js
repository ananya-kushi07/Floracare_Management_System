const newDate = (extendBy) => {
    const date = new Date();
    const d =  date.setDate(date.getDate()+extendBy);
    return new Date(d);
}

const b = new Date();
const c = Date.now();
const a = new Date(Date.now()+ 86400*1000);  //24hr forward

  const checkRole = (roles=[],role) => {
    if (roles.includes(role)) return true;
    else return false;
  }

module.exports = { newDate, checkRole };