package com.codewitharjun.fullstackbackend.controller;
import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.Student;
import com.codewitharjun.fullstackbackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@CrossOrigin("http://localhost:3001")
public class StudentController {
        @Autowired
        private StudentRepository studentRepository;
        @PostMapping("/student")
        Student newStudent(@RequestBody Student newStudent) {
            return studentRepository.save(newStudent);
        }

        @GetMapping("/students")
        List<Student> getAllStudent() {
            return studentRepository.findAll();
        }

        @GetMapping("/student/{id}")
        Student getStudentById(@PathVariable Long id) {
            return studentRepository.findById(id)
                    .orElseThrow(() -> new UserNotFoundException(id));
        }

        @PutMapping("/student/{id}")
        Student updateStudent(@RequestBody Student newStudent, @PathVariable Long id) {
            return studentRepository.findById(id)
                    .map(student -> {
                        student.setName(newStudent.getName());
                        student.setGender(newStudent.getGender());
                        student.setAddress(newStudent.getAddress());
                        student.setMajor(newStudent.getMajor());
                        return studentRepository.save(student);
                    }).orElseThrow(() -> new UserNotFoundException(id));
        }
        @DeleteMapping("/student/{id}")
        String deleteStudent(@PathVariable Long id) {
            if (!studentRepository.existsById(id)) {
                throw new UserNotFoundException(id);
            }
            studentRepository.deleteById(id);
            return "Student with id " + id + " has been deleted success.";
        }
    }
