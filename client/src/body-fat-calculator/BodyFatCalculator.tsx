import React from 'react';
import { TextField, Typography } from "@mui/material";

//Draft/POC BF Claculator Reference: https://www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
//Male
function MaleBF( totalBodyWeight:number, waistMeasurement:number ){
    const leanBodyMass = (totalBodyWeight*1.082) + 94.42 - waistMeasurement*4.15;
    const bodyFatWeight = totalBodyWeight - leanBodyMass;
    return (bodyFatWeight/totalBodyWeight)*100;
  }
  //Female
  function FemaleBF( totalBodyWeight:number, waistMeasurement:number, wristMeasurement:number, hipMeasurement:number, forearmMeasurement:number ){
    // Deviating a bit form the structure of how the webpage instructs to arrange the varaibles.
    // LeanBodyMass = Factor1 - Factor3 - Factor4 + Factor2 + Factor5
    const leanBodyMass = (totalBodyWeight*0.732) + 8.987 - waistMeasurement*0.157 - hipMeasurement*0.249 + wristMeasurement/3.140 + forearmMeasurement*0.434;
    const bodyFatWeight = totalBodyWeight - leanBodyMass;
    return (bodyFatWeight/totalBodyWeight)*100;
  }

export const BodyFatCalculator = () => {
    return (
        <div className="App">
          <div>
            <form>
              <Typography variant="h2">Body Fat: Male</Typography>
              <TextField id="outlined-basic" label="Total Body Weight" variant="outlined" />
              <TextField id="outlined-basic" label="Waist Measurement" variant="outlined" />
            </form>
          </div>
          <div>
            <form>
              <Typography variant="h2">Body Fat: Female</Typography>
              <TextField id="outlined-basic" label="Total Body Weight" variant="outlined" />
              <TextField id="outlined-basic" label="Waist Measurement" variant="outlined" />
              <TextField id="outlined-basic" label="Wrist Measurement" variant="outlined" />
              <TextField id="outlined-basic" label="Hip Measurement" variant="outlined" />
              <TextField id="outlined-basic" label="Forarm Measurement" variant="outlined" />
            </form>
          </div>
        </div>
      );
}
  
  console.log(MaleBF(234.7,44))
  console.log(FemaleBF(130, 30, 3, 36, 15))