import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../redux/habitSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";

const Navbar = ({ name }) => {
  // call use dispatch hook a variable call dispatch
  const dispatch = useDispatch();

  // change state acording time
  // eslint-disable-next-line no-unused-vars
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  // function for add habit 
  const handleSave = () => {
    const habitName = document.getElementById("habitName").value;
    dispatch(addHabit(habitName));
    toast.success("Your habit added successfully");
    document.getElementById("habitName").value = "";
  }

  return (
    <>
      <div className="navbar">
        <Link to="/"><h3>
          Habit Tracker
        </h3></Link>
        <div className="right-nav">
          <button className="detail">{name}</button>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            + Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Habit Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit..."
                  autoComplete="off"

                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
