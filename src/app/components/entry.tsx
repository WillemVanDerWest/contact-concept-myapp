import EntryForContact from "../api/classes/Entry"

interface EntryData {
    entryData : EntryForContact
    componentKey : number
  }
export default function EntryComponent( { entryData, componentKey } : EntryData){
    const theKey = componentKey
    return(
        <div key={theKey+10} className='hover:bg-gray-100 mt-auto mb-auto font-semibold text-gray-700 w-auto'>
            <ul className="flex list-none border-b-gray-100 border-b-2 pb-3  pt-3">
                <li key={theKey+11} className='mr-5 w-10 mt-auto mb-auto'>{`0${theKey}`}</li>
                <li key={theKey+12} className='mr-5 w-36 mt-auto mb-auto'>{entryData.name}</li>
                <li key={theKey+13} className='mr-5 w-36 mt-auto mb-auto'>{entryData.phone}</li>
                <li key={theKey+14} className="mr-5 w-52 mt-auto mb-auto max-w-52 overflow-auto">{entryData.email}</li>
                <li key={theKey+15} className="mr-5 w-60 mt-auto mb-auto max-h-6 overflow-auto">{entryData.details}</li>
            </ul>
        </div>
    )   
}