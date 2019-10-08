import React,{useState} from 'react'

function Temperature() {
 
    const [temperature,setTemperature] = useState("")
    
    return (
        <div className="Temperature">
        
            <h1>Temperature</h1>
            <input
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder="Temperature in °C" />
            <div className="Temperature__result">
                {temperature !== "" && temperature < 10 ?
                    <span style={{color:'blue'}}>It's cold <span role="img" aria-label="cold">❄️</span></span>
                    :
                    temperature >= 10 && temperature < 30 ?
                        <span style={{ color: 'black' }}>It's nice <span role="img" aria-label="nice"></span>🌼</span>
                        :
                        temperature > 30 ?
                            <span style={{ color: 'red' }}>It's warm <span role="img" aria-label="hot"></span>☀️</span> :
                            ""
            }
            </div>
        </div>
    )
}

export default Temperature