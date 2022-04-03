import { useState, useEffect } from "react";
import {
  getMyTransList,
  getMyResidenceById,
  getOtherUserById,
} from "../../api/Get";
import FormWaitForContract from "./FormWaitForContract";
import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const showContract = {};

const TransactionList = () => {
  const [select, setSelect] = useState(false);
  const [translists, setTranslist] = useState([]);
  const { user } = useSelector((state) => state.authStore);
  const [itemContract, setItemContract] = useState(showContract);

  useEffect(() => {
    getMyTransList()
      .then((res) => {
        setTranslist(res);
      })
      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <>
      <div className="h-full overflow-auto scrollbar-style-w scrollbar-style-tr scrollbar-style-th mr-4">
        {translists.length !== 0 &&
          translists.map((item, i) => {
            return (
              <Transaction
                key={i}
                setSelect={setSelect}
                translist={item}
                setItemContract={setItemContract}
              />
            );
          })}
      </div>
      {/* <button
        className="bg-pink-300"
        onClick={() => {
          setSelect(true);
        }}
      >
        click
      </button> */}
      <div className="">
        {select && (
          <FormWaitForContract
            setSelect={setSelect}
            itemContract={itemContract}
            landlord={user}
          />
        )}
      </div>
    </>
  );
};

export default TransactionList;
