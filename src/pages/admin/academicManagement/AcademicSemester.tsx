import React from "react";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagment.api";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);

  return (
    <div>
      <h2>this is AcademicSemester</h2>
    </div>
  );
};

export default AcademicSemester;
