import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [students, setStudent] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get("http://localhost:8080/students");
    setStudent(result.data);
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/student/${id}`);
    loadStudent();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">学号</th>
              <th scope="col">姓名</th>
              <th scope="col">性别</th>
              <th scope="col">专业</th>
              <th scope="col">地址</th>
              <th scope="col">动作</th>
            </tr>
          </thead>
          <tbody>

            {students.map((student, index) => (
              <tr key={index}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{student.name}</td>
                <td>{student.gender}</td>
                <td>{student.major}</td>
                <td>{student.address}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewstudent/${student.id}`}
                  >
                    查看
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editstudent/${student.id}`}
                  >
                    编辑
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteStudent(student.id)}
                  >
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
