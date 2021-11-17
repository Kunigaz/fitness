import { TextField, Typography } from "@mui/material";
import { FunctionComponent, useState } from "react";

const useBodyFatForm = () => {
    const [sex, setSex] = useState('female');
    const [weight,      setWeight ] = useState(130);
  const [waist,     setWaist] = useState(30);
  const [wrist,  setWrist  ] = useState(3)
  const [hip,    setHip    ] = useState(36)
  const [forearm, setForearm] = useState(15)

  return [{sex, weight, waist, wrist, hip, forearm}, ()=>{}]
}

export const BodyFatCalcForm:FunctionComponent = props => {
    //@ts-ignore
    const [{sex, weight, waist, wrist, hip, forearm}, setMeasurements] = useBodyFatForm()

    return <div>
       <Typography variant="h2">Body Fat: Female</Typography>
          <TextField onChange={()=> {}} value={weight} label="Total Body Weight" variant="outlined" />
          <TextField onChange={()=> {}} value={waist} id="outlined-basic" label="Waist Measurement" variant="outlined" />
          {sex === 'female' &&
            <>
                <TextField onChange={()=> {}} value={wrist} id="outlined-basic" label="Wrist Measurement" variant="outlined" />
                <TextField onChange={()=> {}} value={hip} id="outlined-basic" label="Hip Measurement"   variant="outlined" />
                <TextField onChange={()=> {}} value={forearm} id="outlined-basic" label="Forarm Measurement" variant="outlined" />
            </>}
          </div>
}

