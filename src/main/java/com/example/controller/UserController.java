package com.example.controller;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "city") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) String cityFilter,
            @RequestParam(required = false) String stateFilter,
            @RequestParam(required = false) String search
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order.toUpperCase()), sort));
        Page<User> users = userService.getAllUsers(pageable, cityFilter, stateFilter, search);
        return ResponseEntity.ok(users.getContent());
    }

    @GetMapping("/search")
    public ResponseEntity<List<User>> searchUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "city") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) String search
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order.toUpperCase()), sort));
        Page<User> users = userService.searchUsers(pageable, search);
        if (users != null && users.getContent() != null) {
            return ResponseEntity.ok(users.getContent());
        } else {
            return ResponseEntity.notFound().build();
        }
    }


    @GetMapping("/filter")
    public ResponseEntity<List<User>> filterUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "city") String sort,
            @RequestParam(defaultValue = "asc") String order,
            @RequestParam(required = false) String cityFilter,
            @RequestParam(required = false) String stateFilter
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order.toUpperCase()), sort));
        Page<User> users = userService.filterUsers(pageable, cityFilter, stateFilter);
        return ResponseEntity.ok(users.getContent());
    }

    @GetMapping("/sort")
    public ResponseEntity<List<User>> sortUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "city") String sort,
            @RequestParam(defaultValue = "asc") String order
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.fromString(order.toUpperCase()), sort));
        Page<User> users = userService.sortUsers(pageable);
        return ResponseEntity.ok(users.getContent());
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Integer id, @RequestBody User user) {
        User updatedUser = userService.updateUser(id, user);
        if (updatedUser != null) {
            return ResponseEntity.ok(updatedUser);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/verify")
    public ResponseEntity<String> verifyUser(@RequestParam String email, @RequestParam String password) {
        return ResponseEntity.ok(userService.verifyUser(email, password));
    }
}
