import type { TableColumnsType, TableProps } from "antd";
import { Button, Space, Table } from "antd";
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagment.api";
import { TQueryParams, TStudent } from "../../../types";

export type TTableData = Pick<TStudent, "name" | "id">;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParams[]>([]);
  const { data: studentData, isFetching } = useGetAllStudentsQuery([
    { name: "limit", value: 10 },
    { name: "page", value: 2 },
    { name: "sort", value: "id" },
    ...params,
  ]);
  console.log(studentData);

  const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
    key: _id,
    fullName,
    id,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "fullName",
    },
    {
      title: "Roll no ",
      key: "id",
      dataIndex: "id",
    },
    {
      title: "Action",
      key: "x",
      render: () => (
        <Space>
          <Button>Details</Button>
          <Button>Update</Button>
          <Button>Block</Button>
        </Space>
      ),
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParams[] = [];

      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
    />
  );
};

export default StudentData;
