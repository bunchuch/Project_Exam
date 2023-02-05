import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { columnCourse } from "../componet/ColumsItem";
import axios from "axios";

export default function ExamTable ({data}) {
    return <Table  dataSource={data} columns={columnCourse}></Table>
}