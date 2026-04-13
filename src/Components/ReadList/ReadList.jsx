import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDb';
import Book from '../../Pages/Book/Book';
import ReadListShow from '../ReadListShow/ReadListShow';

const ReadList = () => {
   const [readList,setReadList]=useState([])
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


  return (
    <div>
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