import { Entry } from "../admin/page"
import getNewKey from "../api/services/generateKey"
interface EntryData {
    entryData : Entry
    componentKey : number
  }


export default function EntryComponent( { entryData, componentKey } : EntryData){
    const theKey = componentKey
    return(
        <div key={theKey} className='max-w-screen-md min-w-60 hover:bg-gray-600'>
            <ul className="flex list-none border-2 rounded-2xl p-5 ">
                <li className="mr-5">{`0${theKey}`}</li>
                <li className="mr-5">
                    <div className='flex flex-col'>
                        <div>
                            {entryData.name}
                        </div>
                        <div>
                            {entryData.phone}
                        </div>
                    </div>
                </li>
                <li className="mr-5">{entryData.email}</li>
                
                <li className="mr-5">{entryData.details}</li>
            </ul>
        </div>
    )
}