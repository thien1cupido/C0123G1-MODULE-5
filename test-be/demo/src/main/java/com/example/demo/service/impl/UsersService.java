package com.example.demo.service.impl;

import com.example.demo.config.JwtUserDetails;
import com.example.demo.model.Users;
import com.example.demo.repository.IUserRepository;
import com.example.demo.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.List;

@Service
public class UsersService implements UserDetailsService, IUsersService {
    @Autowired
    private IUserRepository iUserRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = iUserRepository.findByUsername(username);
        if (users == null) {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
        List<GrantedAuthority> authorities = new ArrayList<>();
        String role = users.getRoles().getRoleName();
        authorities.add(new SimpleGrantedAuthority(role));

        return new JwtUserDetails(users.getId(), users.getUsername(), users.getPassword(), authorities);
    }

    @Override
    public Users findByUsername(String username) {
        return iUserRepository.findByUsername(username);
    }

    @Override
    public Users findByEmail(String email) {
        return iUserRepository.findByEmail(email);
    }


    @Override
    public Users findById(Long id) {
        return iUserRepository.findById(id).get();
    }

}
