fetch("../data/confusion.csv")
  .then((res) => res.text())
  .then((text) => {
    let data = []
    var allRows = text.split(/\r?\n|\r/);
    let topline = allRows[0].split(',') 
    for( let r = 1; r< allRows.length; r++){
        let cols = allRows[r].split(',')
        for(let c = 1;c<cols.length;c++){
            let v = (parseInt(cols[c]) | 0 )
            data.push([cols[0],topline[c].replace("%2c",",").replace("\\",""),v])
        }
        console.log(data);
    }
   })
  .catch((e) => console.error(e));