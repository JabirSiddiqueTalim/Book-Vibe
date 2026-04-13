import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';
import Book from '../../Pages/Book/Book';
import ReadListShow from '../ReadListShow/ReadListShow';

const ReadList = () => {
   const [readList,setReadList]=useState([])
   const [sort,setSort]=useState("")
  const data = useLoaderData();
  console.log(data);
  
  useEffect(()=>{
    const readData=getStoredBook();
  console.log(readData);
  const convertReadData=readData.map(id=>parseInt(id));
  console.log(convertReadData);
  const myReadData=data.filter(data=>convertReadData.includes(data.bookId));
   setReadList(myReadData);
  console.log(readList)

   },[])
   const sortHandle=(e)=>
   {
    setSort(e);
    if(e=="Pages")
    {
      const newreadList=[...readList].sort((a,b)=>a.totalPages-b.totalPages);
      setReadList(newreadList)

    }else
    {
      const newreadList=[...readList].sort((a,b)=>a.rating-b.rating);
      setReadList(newreadList)

    }

   }


  return (
    <div>
      <details className="dropdown">
  <summary className="btn m-1">Sort : {sort}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>sortHandle("Pages")}>Pages</a></li>
    <li><a onClick={()=>sortHandle("Rating")}>Rating</a></li>
  </ul>
</details>
      <Tabs>
        <TabList>
          <Tab>ReadList</Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>My Read List : {readList.length}</h2>
          {
            readList.map(read=><ReadListShow read={read}></ReadListShow>)

          }
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default ReadList;