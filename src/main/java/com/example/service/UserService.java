package com.example.service;

import com.example.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface UserService {
    User saveUser(User user);
    User getUserById(Integer id);
    Page<User> getAllUsers(Pageable pageable, String cityFilter, String stateFilter, String search);
    User updateUser(Integer id, User user);
    void deleteUser(Integer id);
    String verifyUser(String email, String password);
	Page<User> searchUsers(Pageable pageable, String search);
	Page<User> filterUsers(Pageable pageable, String cityFilter, String stateFilter);
	Page<User> sortUsers(Pageable pageable);
}
