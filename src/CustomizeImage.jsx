import React,{useState} from 'react'

function CustomizeImage() {
    
    const [size, setSize] = useState(100)
    const [url, setUrl] = useState('https://images-na.ssl-images-amazon.com/images/I/A1zjmDJu5AL._SX522_.jpg')

    
    return (


        <>
            <h1>Customize Image</h1>
            <div>
            <input
                value={url}
                placeholder="paste a url"
                onChange={(e)=> setUrl(e.target.value)}
                />
            </div>
            <div>
            <input
                min="0"
                max="200"
                value={size}
                type="range"
                onChange={(e) => setSize(e.target.value)}
                />
            </div>
            <div>{size} x {size} px</div>
            <img style={{ width: Number(size), height:Number(size)}} src={url} alt="your choice"/>
        </>

)

}

export default CustomizeImage