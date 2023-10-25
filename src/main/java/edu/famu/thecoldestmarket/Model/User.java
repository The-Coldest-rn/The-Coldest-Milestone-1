package edu.famu.thecoldestmarket.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @DocumentId
    private String email;
    private String first_name;
    private String last_Name;
    private String password;
    private String phone;
    private String username;


}
