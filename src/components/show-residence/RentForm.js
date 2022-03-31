import React, { useState } from "react";
import { createTranslist } from "../../api/Post";
import { store } from "../../components/app/store";
import { toast } from "react-toastify";
import Input from "../add-residence/Input";

const RentForm = (props) => {
  const { setRentForm, widgetinfo } = props;
  const onClickConfirm = () => {};
  const [startDate, setStartDate] = useState(null);

  return (
    <div>
      <div className="justify-center items-center flex fixed inset-0 z-50">
        <div className="w-[40%] bg-white rounded-xl flex flex-col justify-items-center items-center content-center p-5">
          <h1 className="text-2xl">ยืนยันการจองหรือไม่?</h1>
          <p className="mt-2">
            หากทำการกดปุ่ม "Confirm" แล้ว
            จะมีการแจ้งเตือนไปยังเจ้าของที่พักอาศัยเพื่อดำเนินการต่อไป
            หากต้องการจะจองที่พักอาศัย
            โปรดเลือกวันที่ต้องการจะเข้าพักอาศัยและกดปุ่ม "ตกลง"
            เพื่อยืนยันการจอง
          </p>
          <input
            className="mt-3 p-2 outline-0 border-0 ring-2 ring-pink-500 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-3xl focus:shadow-pink-500 rounded-lg placeholder-gray-400/75"
            type="date"
            placeholder="dd/MM/yyyy"
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
          />
          <div className="flex flex-row w-[100%] mt-3 justify-evenly">
            <button
              className="text-white p-2 w-1/4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl"
              onClick={async () => {
                const user = await store.getState().authStore.user;
                const formTrans = {
                  tr_state: "Waiting for respond",
                  tr_start_date: startDate,
                  u_id1: user._id,
                  u_id2: widgetinfo.ownerId,
                  bd_id: widgetinfo.buildingId,
                };
                createTranslist(formTrans)
                  .then((res) => {
                    toast.success("Successfully rented!");
                  })
                  .catch((err) => console.log("err", err));
              }}>
              Confirm
            </button>
            <button
              className="text-white p-2 w-1/4 bg-blue-800 rounded-xl"
              onClick={() => setRentForm(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-75 fixed inset-0 z-39 bg-blue-200"></div>
    </div>
  );
};

export default RentForm;
