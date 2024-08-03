package SpringBoot.Programs.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import SpringBoot.Programs.Entity.User;
import SpringBoot.Programs.Service.UserService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class UserController {

    @Autowired
    private UserService services;

    @PostMapping("/register")
	public ResponseEntity<User> registerUser(@RequestBody User user)
	{
		return ResponseEntity.ok(services.saveUser(user));
	}
}
