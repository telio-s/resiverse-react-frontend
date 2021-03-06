import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccountLeftBox = (props) => {
  const { setRightBox } = props;
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.authStore
  );

  return (
    <div className="mx-4 my-4 text-gray-600">
      <div className="flex items-center">
        {user.user.u_profileImg ? (
          <img
            className="mr-4 h-14 w-14 object-cover rounded-full overflow-hidden"
            src={user.user.u_profileImg}
          />
        ) : (
          <FontAwesomeIcon
            className="h-14 mr-4 "
            icon="fa-solid fa-circle-user"
          />
        )}

        <h1 className="text-2xl font-bold">{user.user.u_username}</h1>
      </div>

      <div className="mt-6 flex flex-col">
        <button
          onClick={() => {
            setRightBox("Account");
          }}
          className="hover:-translate-y-1 transition ease-in-out hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white rounded-lg py-1"
        >
          <label className="text-xl flex justify-start cursor-pointer">
            <FontAwesomeIcon
              className="ml-2 mr-4 self-center"
              icon="fa-regular fa-user"
            />
            Account
          </label>
        </button>
        <button
          onClick={() => {
            setRightBox("Notification");
          }}
          className="hover:-translate-y-1 transition ease-in-out hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white rounded-lg py-1"
        >
          <label className="text-xl flex justify-start cursor-pointer">
            <FontAwesomeIcon
              className="ml-2 mr-4 self-center"
              icon="fa-solid fa-bell"
            />
            Notification
          </label>
        </button>
        <button
          onClick={() => {
            setRightBox("MyResidence");
          }}
          className="hover:-translate-y-1 transition ease-in-out hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white rounded-lg py-1"
        >
          <label className="text-xl flex justify-start cursor-pointer">
            <FontAwesomeIcon
              className="ml-2 mr-4 self-center"
              icon="fa-solid fa-house"
            />
            My Residence
          </label>
        </button>
        <button
          onClick={() => {
            setRightBox("TransactionList");
          }}
          className="hover:-translate-y-1 transition ease-in-out hover:bg-pink-500 hover:text-white focus:bg-pink-500 focus:text-white rounded-lg py-1"
        >
          <label className="text-xl flex justify-start cursor-pointer">
            <FontAwesomeIcon
              className="ml-2 mr-4 self-center"
              icon="fa-regular fa-file-lines"
            />
            Transaction List
          </label>
        </button>
      </div>
    </div>
  );
};

export default AccountLeftBox;
