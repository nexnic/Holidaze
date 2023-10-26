
import imageBG from '../../../assets/holidaze-bg-1.jpg'
interface Idata {
    data: string[];
    
} 




export default function Header({data}: Idata) {
    const InputData = data.map((item) => {return item})
    
    function handlerSearchInput (event:React.ChangeEvent<HTMLInputElement>  ) {
        
        const inputSearch = event.target.value 
        // @ts-expect-error: TODO
        const filtered = InputData.filter(entry => Object.values(entry.location).some(val => typeof val === "string" && val.includes(inputSearch)));
        console.log(filtered)
        
        
    }


    return (
        <header className="container" style={{backgroundImage: `url(${imageBG})`, backgroundPosition:'bottom', backgroundSize:'cover' ,height: '250px'}}>
            <div className="">
                <form >
                    <div className='input-group'>
                        <input type="text" className="form-control" placeholder='City, Zip Code' onChange={(event) => handlerSearchInput(event)}/>
                        <button className='btn btn-primary'>Search</button>
                    </div>
                </form>
            </div>
        </header>
    )
}   