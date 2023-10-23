package edu.famu.thecoldestmarket.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    private String email;
    private String first_name;
    private String last_Name;
    private String password;
    private String phone;
    private String username;


}
