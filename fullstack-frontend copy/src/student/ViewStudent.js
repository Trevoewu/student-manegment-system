import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewStudent() {
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    major: "",
    address:""
  });

  const { id } = useParams();

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">学生详细信息</h2>

          <div className="card">
            <div className="card-header">
              学号 : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>姓名:</b>
                  {student.name}
                </li>
                <li className="list-group-item">
                  <b>性别:</b>
                  {student.gender}
                </li>
                <li className="list-group-item">
                  <b>专业:</b>
                  {student.major}
                </li>
                <li className="list-group-item">
                  <b>地址:</b>
                  {student.address}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            返回主页
          </Link>
        </div>
      </div>
    </div>
  );
}
