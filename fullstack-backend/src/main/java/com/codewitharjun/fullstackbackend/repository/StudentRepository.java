package com.codewitharjun.fullstackbackend.repository;
import com.codewitharjun.fullstackbackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student,Long> {
}
