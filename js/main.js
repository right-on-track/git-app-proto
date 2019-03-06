
let alldata= [
  {
    day: {
      month:`Jan`,
      date: `30`,
    },
    sleep: `8`,
    water: `26`,
    steps:`7430`,
    active:`1.5`,
    weight: `154`
  },
  {
    day: {
      month:`Jan`,
      date: `31`,
    },
    sleep: `6.5`,
    water: `38`,
    steps:`4987`,
    active:`30`,
    weight: `154`
  },
  {
    day: {
      month:`Feb`,
      date: `1`,
    },
    sleep: `7`,
    water: `30`,
    steps:`5003`,
    active:`30`,
    weight: `154`
  },
  {
    day: {
      month:`Feb`,
      date: `2`,
    },
    sleep: `9.5`,
    water: `44`,
    steps:`13884`,
    active:`1.5`,
    weight: `154`
  }
]
let htmlOutput = alldata.map(daySleep =>

  `<p>You got ${daySleep.sleep} Hrs of sleep on ${daySleep.day.month}-${daySleep.day.date}!</p>`).join('');

// Put the paragraphs into the fruits output div
document.getElementById('sleepdays').innerHTML = htmlOutput;

// alldata.forEach( rtrack => {
//
//
// document.getElementById('righttrack').innerHTML +=
//     `<li class="user">
//       <div>${rtrack.day.month}-${rtrack.day.date}</div>
//       <div>${rtrack.sleep} Hrs</div>
//       <div>${rtrack.weight} Hrs</div>
//       <div>${rtrack.water} Ozs</div>
//       <div>${rtrack.steps} Steps</div>
//       <div>${rtrack.active} Hrs</div>
//      </li>`;
//
// } );

// let weightdata= [
//   {
//     month: `Oct`,
//     year: `2018`,
//     weight: `154`
//   },
//   {
//     month: `Nov`,
//     year: `2018`,
//     weight: `150`
//   },
//   {
//     month: `Dec`,
//     year: `2018`,
//     weight: `156`
//   },
//   {
//     month: `Jan`,
//     year: `2019`,
//     weight: `150`
//   },
//   {
//     month: `Feb`,
//     year: `2019`,
//     weight: `148`
//   }
// ]
//
// weightdata.forEach( rtrack => {
//
//
// document.getElementById('pounds').innerHTML +=
//     `<li class="user">
//       <div>${pounds.month}-${pounds.year}</div>
//       <div>${pounds.weight}Lbs</div>
//      </li>`;
//
// } );
