import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { EmployeeAnniversaryCard } from "./EmployeeAnniversaryCard";
import { useEffect, useState } from "react";
import supabase from "../utils/SupabaseClient";
import { Box } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { palette } from "../styles/theme";

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
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box style={{ width: "75%", background: "", padding: "0 2rem" }}>
      <Slider
        {...settings}
        style={{
          padding: "0 0.5rem",
          border: 0,
          borderRadius: "0.5rem",
        }}
        prevArrow={<></>}
        nextArrow={<></>}
        swipeToSlide={true}
      >
        {employeesAnniversaryThisMonth?.map((employee, index) => (
          <Box key={index}>
            <EmployeeAnniversaryCard {...employee} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default EmployeeAnniversaryCarousel;
