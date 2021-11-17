import './App.css'; 
import { Button, TextField, Typography } from '@mui/material';
import { FormEvent, useState } from 'react';
import { BodyFatCalcForm } from './body-fat-calculator/components/BodyFatCalcForm';

//Draft/POC BF Claculator Reference: https://www.bmi-calculator.net/body-fat-calculator/body-fat-formula.php
function MaleBF( totalBodyWeight:number, waistMeasurement:number ){
  const leanBodyMass = (totalBodyWeight*1.082) + 94.42 - waistMeasurement*4.15;
  const bodyFatWeight = totalBodyWeight - leanBodyMass;
  return (bodyFatWeight/totalBodyWeight)*100;
}

function FemaleBF( totalBodyWeight:number, waistMeasurement:number, wristMeasurement:number, hipMeasurement:number, forearmMeasurement:number ){
  // Deviating a bit form the structure of how the webpage instructs to arrange the varaibles.
  // LeanBodyMass = Factor1 - Factor3 - Factor4 + Factor2 + Factor5
  const leanBodyMass = (totalBodyWeight*0.732) + 8.987 - waistMeasurement*0.157 - hipMeasurement*0.249 + wristMeasurement/3.140 + forearmMeasurement*0.434;
  const bodyFatWeight = totalBodyWeight - leanBodyMass;
  return (bodyFatWeight/totalBodyWeight)*100;
}

function clicky(){
  console.log(MaleBF(234.7,44));
  console.log(FemaleBF(130, 30, 3, 36, 15));
}

function App() {
  const [maleBodyWeight,      setMaleBodyWeight ] = useState('')
  const [maleWaistMeasue,     setMaleWaistMeasue] = useState('')

  const [femaleBodyWeight,    setFemaleBodyWeight    ] = useState('')
  const [femaleWaistMeasue,   setFemaleWaistMeasure  ] = useState('')
  const [femalewristMeasure,  setFemaleWristMeasure  ] = useState('')
  const [femaleHipMeasure,    setFemaleHipMeasure    ] = useState('')
  const [femaleForearmMeasue, setFemaleForearmMeasure] = useState('')

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault() //Before refreshing lets do some checks first
    if(maleBodyWeight && maleWaistMeasue) {
      console.log( `Male Body Fat Percentage:${ MaleBF( Number(maleBodyWeight), Number(maleWaistMeasue) ) }`)
    }
    else if( femaleBodyWeight && femaleWaistMeasue && femalewristMeasure && femaleHipMeasure && femaleHipMeasure && femaleForearmMeasue){
      console.log( `Female Body Fat Percentage:${ FemaleBF( Number(femaleBodyWeight), Number(femaleWaistMeasue), Number(femalewristMeasure), Number(femaleHipMeasure), Number(femaleForearmMeasue) ) }`)
    }
  }

  return (
    <div className="App">
      <BodyFatCalcForm />
      {/* <form onSubmit = {handleSubmit}>
        <div>
          <Typography variant="h2">Body Fat: Male</Typography>
          >
        </div>
        <div>
          <Typography variant="h2">Body Fat: Female</Typography>
          <TextField onChange={(e)=>setFemaleBodyWeight(e.target.value)} id="outlined-basic" label="Total Body Weight" variant="outlined" />
          <TextField onChange={(e)=>setFemaleWaistMeasure(e.target.value)} id="outlined-basic" label="Waist Measurement" variant="outlined" />
          <TextField onChange={(e)=>setFemaleWristMeasure(e.target.value)} id="outlined-basic" label="Wrist Measurement" variant="outlined" />
          <TextField onChange={(e)=>setFemaleHipMeasure(e.target.value)} id="outlined-basic" label="Hip Measurement"   variant="outlined" />
          <TextField onChange={(e)=>setFemaleForearmMeasure(e.target.value)} id="outlined-basic" label="Forarm Measurement" variant="outlined" />
        </div>
        <div>
          <Button variant="contained" type='submit'>Calculate Body Fat</Button>
        </div>
      </form> */}
    </div>
  );
}


export default App;
