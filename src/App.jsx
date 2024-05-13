import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { db, storage } from "./firebaseconfig";
import { getDocs, collection } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { saveAs } from "file-saver";

const myCollection = collection(db, "testcollection");

function App() {
  const [testData, setTestData] = useState([]);
  const [testURL, setTestURL] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const rawData = await getDocs(myCollection);
        const filteredData = rawData.docs.map((doc) => ({
          firstName: doc.data().fname,
          lastName: doc.data().lname,
          age: doc.data().age,
          id: doc.id,
        }));
        setTestData(filteredData);
      } catch (err) {
        console.log(err);
      }
    }

    async function getStorageUrl() {
      try {
        const reference = ref(storage, "app-debug.zip");
        const downloadURL = await getDownloadURL(reference);
        setTestURL(downloadURL);
      } catch (err) {
        console.log(err);
      }
    }

    getData();
    getStorageUrl();
  }, []);

  function handleDownloadFile() {
    saveAs(testURL, "dodik.zip");
  }

  return (
    <div className="h-full w-full bg-slate-900">
      <h1 className="text-slate-100">saranin 2040</h1>
      <Button onClick={handleDownloadFile}>DOWNLOAD TEXT FILE</Button>
      {testData.map((data) => {
        return (
          <ul key={data.id}>
            <li className="text-slate-100">{data.id}</li>
            <li className="text-slate-100">
              {data.firstName} {data.lastName}
            </li>
            <li className="text-slate-100">{data.age}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
