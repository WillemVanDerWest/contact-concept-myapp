import { getAllData } from "@/app/firebase/firebase";
import { Entry } from "@/app/admin/page";

export default async function handleGetData() {
    const allEntries = await getAllData();
    const newEntries=[];
    for (let i = 0; i < allEntries.length; i++) {
      const getOneData = allEntries[i].data();
      const currentEntry = new Entry(getOneData.name,getOneData.email,getOneData.phone,getOneData.date,getOneData.details);
      newEntries.push(currentEntry)
    }
    return newEntries;
  }