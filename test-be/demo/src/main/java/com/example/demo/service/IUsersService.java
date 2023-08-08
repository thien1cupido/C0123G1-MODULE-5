package com.example.demo.service;

import com.example.demo.model.Users;

public interface IUsersService {
    Users findByUsername(String username);
    Users findByEmail(String email);

    Users findById(Long id);
}
