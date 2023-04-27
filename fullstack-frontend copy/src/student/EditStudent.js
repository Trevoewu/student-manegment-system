import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [student, setStudent] = useState({
    name: "",
    gender: "",
    major: "",
    address:""
  });

  const { name, gender, major,address } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/student/${id}`, student);
    navigate("/");
  };

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8080/student/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">编辑学生信息</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                姓名
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="输入你的姓名"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">
                性别
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="输入你的性别"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="major" className="form-label">
                专业
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="输入你的专业"
                name="major"
                value={major}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                地址
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="输入你的地"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              提交
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              取消
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
