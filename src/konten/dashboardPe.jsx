import React, { useState } from "react";
import HeaderHR from "../components/header";
import Sidebar from "../components/sidebar";
import RealTimeClockWithDay from "../components/time";
import UpdateAttendanceButton from "../components/attendanceB";

function DashboardPe() {
    return (
        <>
            <div className="flex">
            <Sidebar />
            <div className="flex-1 p-6 bg-gray-100">
                <HeaderHR />
                {/* HR Attendance Stats */}
                <section className="p-6 rounded-lg my-6">
                    <div className="flex justify-between items-center mb-4">
                        {/* HR Attendance title */}
                        <h2 className="text-lg font-semibold">HR Attendance</h2>
                        <UpdateAttendanceButton/>

                        {/* Time and Day should be on the same line */}
                        <h3 className="text-lg regular">
                            {/* Displaying both day and time in one line */}
                            <RealTimeClockWithDay />
                        </h3>
                    </div>
                </section>
            </div>
        </div>
        </>
    )
    
}

export default DashboardPe;