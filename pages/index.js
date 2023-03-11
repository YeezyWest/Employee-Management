import Head from "next/head";
import { BiUserPlus } from "react-icons/bi";
import Table from "../components/Table";
import Form from "./../components/Form";
import { useState } from "react";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const handler = () => {
    setVisible(true);
  };

  return (
    <div className="">
      <Head>
        <title>EMPLOYEE RECORD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-5">
        <h1 className="text-xl md:text-5xl text-center font-bold py-10">
          Employee Management
        </h1>

        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button
              onClick={handler}
              className="flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800"
            >
              Add Employee{" "}
              <span className="px-1">
                <BiUserPlus size={23}></BiUserPlus>
              </span>
            </button>
          </div>
        </div>

        {/*coll form*/}
        <div className="container mx-auto py-5">
          {visible ? <Form /> : <></>}
        </div>

        {/*Table*/}
        <div className="container mx-auto">
          <Table />
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default Home;
