package edu.famu.thecoldestmarket.Controller;
import edu.famu.thecoldestmarket.Model.Business;
import edu.famu.thecoldestmarket.Model.User;
import edu.famu.thecoldestmarket.Services.UserService;
import edu.famu.thecoldestmarket.util.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("user")
//hello
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllUsers() {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "Success", userService.getAllUsers(), null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }

    @GetMapping("/{userId}")
    public ResponseEntity<ApiResponse> getUsersById(@PathVariable String userId) {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "Success", userService.getUserById(userId), null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }


    @PostMapping
    public ResponseEntity<ApiResponse> createNewUser(@RequestBody User user)
    {
        try{
            return ResponseEntity.ok(new ApiResponse(true, "Success", userService.createUser(user), null));
        } catch (ExecutionException e) {
            return ResponseEntity.status(401).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        } catch (InterruptedException e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }


    @PutMapping("/{username}/")
    public ResponseEntity<ApiResponse> updateUser(@PathVariable(name="username") String id, @RequestBody Map<String,String> data)
    {
        try{
            userService.updateUser(id, data);
            return ResponseEntity.ok(new ApiResponse(true, "User successfully updated", null, null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }

    @DeleteMapping("/{username}/")
    public ResponseEntity<ApiResponse> deleteUser(@PathVariable(name="username") String id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok(new ApiResponse(true, "User successfully deleted", null, null));
        }
        catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }
}