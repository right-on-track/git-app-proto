
// let weightdata= [
//   {
//     month: `Oct`,
//     year: `2018`,
//     weight: "154 lbs",
//   }
//   {
//     month: `Nov`,
//     year: `2018`,
//     weight: "150 lbs",
//   }
//   {
//     month: `Dec`,
//     year: `2018`,
//     weight: "156 lbs",
//   }
//   {
//     month: `Jan`,
//     year: `2019`,
//     weight: "150 lbs",
//   }
//   {
//     month: `Feb`,
//     year: `2019`,
//     weight: "148 lbs",
//   }
// ]


// let alldata= [
//   {
//     day: {
//       month:`Jan`,
//       date: `30`,
//     },
//     sleep: 8,
//     water: 26,
//     steps:`7430`,
//     active:`1.5 Hrs`,
//   }
// ]


let weightdata= [
  {
    month: `Oct`,
    year: `2018`,
    weight: `154`
  },
  {
    month: `Nov`,
    year: `2018`,
    weight: `150`
  },
  {
    month: `Dec`,
    year: `2018`,
    weight: `156`
  },
  {
    month: `Jan`,
    year: `2019`,
    weight: `150`
  },
  {
    month: `Feb`,
    year: `2019`,
    weight: `148`
  }
]

weightdata.forEach( rtrack => {


document.getElementById('righttrack').innerHTML +=
    `<li class="user">
      <div>${rtrack.month}-${rtrack.year}</div>
      <div>${rtrack.weight}Lbs</div>
     </li>`;

} );
