import { Table, TableColumnsType } from "antd";
import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagment.api";
import { TAcademicFaculty } from "../../../types/academicManagement.type";

export type TTableData = Pick<TAcademicFaculty, "name" | "_id">;

const AcademicFaculty = () => {
  const { data, isFetching } = useGetAllAcademicFacultiesQuery(undefined);

  console.log(data);

  const tableData = data?.data?.map(({ _id, name }: TAcademicFaculty) => ({
    key: _id,
    name,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
  ];

  return (
    <Table loading={isFetching} columns={columns} dataSource={tableData} />
  );
};

export default AcademicFaculty;
