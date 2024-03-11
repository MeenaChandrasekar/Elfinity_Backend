package com.example.service;

import com.example.model.User;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public Page<User> getAllUsers(Pageable pageable, String cityFilter, String stateFilter, String search) {
        Specification<User> specification = Specification.where(null);
        if (cityFilter != null) {
            specification = specification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("city"), cityFilter));
        }
        if (stateFilter != null) {
            specification = specification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("state"), stateFilter));
        }
        if (search != null) {
            specification = specification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.or(
                            criteriaBuilder.like(root.get("fullname"), "%" + search + "%"),
                            criteriaBuilder.like(root.get("email"), "%" + search + "%")
                    ));
        }
        return userRepository.findAll(specification, pageable);
    }

    @Override
    public User updateUser(Integer id, User user) {
        User existingUser = userRepository.findById(id).orElse(null);
        if (existingUser != null) {
            existingUser.setFullname(user.getFullname());
            existingUser.setEmail(user.getEmail());
            existingUser.setPhonenumber(user.getPhonenumber());
            existingUser.setCity(user.getCity());
            existingUser.setState(user.getState());
            existingUser.setAddress(user.getAddress());
            existingUser.setPassword(user.getPassword());
            return userRepository.save(existingUser);
        }
        return null;
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    @Override
    public String verifyUser(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);
        if (user != null) {
            return "User Exists";
        }
        return "Email and Password Doesn't Match";
    }

    @Override
    public Page<User> sortUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public Page<User> filterUsers(Pageable pageable, String cityFilter, String stateFilter) {
        Specification<User> specification = Specification.where(null);
        if (cityFilter != null) {
            specification = specification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("city"), cityFilter));
        }
        if (stateFilter != null) {
            specification = specification.and((root, query, criteriaBuilder) ->
                    criteriaBuilder.equal(root.get("state"), stateFilter));
        }
        return userRepository.findAll(specification, pageable);
    }

    @Override
    public Page<User> searchUsers(Pageable pageable, String search) {
        Specification<User> specification = Specification.where(
            (root, query, criteriaBuilder) -> criteriaBuilder.or(
                criteriaBuilder.like(root.get("fullname"), "%" + search + "%"),
                criteriaBuilder.like(root.get("email"), "%" + search + "%")
            )
        );
        return userRepository.findAll(specification, pageable);
    }
}
