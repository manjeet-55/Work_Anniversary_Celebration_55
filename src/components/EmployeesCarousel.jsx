import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EmployeeAnniversaryCard } from "./EmployeeAnniversaryCard";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";
const EmployeeAnniversaryCarousel = ({}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await supabase.from("Users").select("*");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    }
    fetchData();
  }, []);
  const currentDate = new Date();
  const currentYear = new Date().getFullYear().toString();
  const currentMonth = currentDate.getMonth() + 1;

  const employeesAnniversaryThisMonth = users?.filter((employee) => {
    const anniversaryMonth = employee.joiningDate.split("-")[1];
    return anniversaryMonth == currentMonth;
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };
  return (
    <div style={{ width: "50%" , background:'pink'}}>
      <Slider {...settings}>
        {employeesAnniversaryThisMonth?.map((employee, index) => (
          <div key={index}>
            <EmployeeAnniversaryCard {...employee} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EmployeeAnniversaryCarousel;
