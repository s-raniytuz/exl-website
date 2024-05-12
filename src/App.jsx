import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { db } from "./firebaseconfig";
import { getDocs, collection } from "firebase/firestore";

const myCollection = collection(db, "testcollection");

function App() {
  const [testData, setTestData] = useState([]);

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

    getData();
  }, []);

  return (
    <div className="h-full w-full bg-slate-900">
      <h1 className="text-slate-100">saranin 2040</h1>
      <Button className="bg-slate-100 text-slate-900 hover:bg-slate-400">
        Download
      </Button>
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
