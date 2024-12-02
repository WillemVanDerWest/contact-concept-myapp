import EntryForContact from "../api/classes/Entry"

interface EntryData {
    entryData : EntryForContact
    componentKey : number
  }
export default function EntryComponent( { entryData, componentKey } : EntryData){
    const theKey = componentKey
    return(
        <div key={theKey+10} className='max-w-screen-md min-w-60 hover:bg-gray-600'>
            <ul className="flex list-none border-2 rounded-2xl p-5 ">
                <li key={theKey+11} className="mr-5">{`0${theKey}`}</li>
                <li key={theKey+12}className="mr-5">
                    <div className='flex flex-col'>
                        <div>
                            {entryData.name}
                        </div>
                        <div>
                            {entryData.phone}
                        </div>
                    </div>
                </li>
                <li key={theKey+13} className="mr-5">{entryData.email}</li>
                <li key={theKey+14} className="mr-5">{entryData.details}</li>
            </ul>
        </div>
    )
}