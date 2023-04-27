import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
export default function HomeIntegrated() {
  const [students, setStudent] = useState([]);
  let [search, setSearch] = useState('');
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
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              学生管理系统
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}

              />
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="btn btn-outline-light" to="/addstudent">
              添加学生
            </Link>
          </Toolbar>
        </AppBar>
      </div>
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
              {students
                .filter((student) => {

                  if (search.toLowerCase() === '') {
                    return student;
                  }
                  else {
                    return student.name.toLowerCase().includes(search) +
                      student.major.toLowerCase().includes(search)
                      + student.address.toLowerCase().includes(search)
                      + student.gender.toLowerCase().includes(search)
                  }
                })
                .map((student, index) => (
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
    </>
  );
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);