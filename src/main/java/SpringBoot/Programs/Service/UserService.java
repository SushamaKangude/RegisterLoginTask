package SpringBoot.Programs.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import SpringBoot.Programs.Entity.User;
import SpringBoot.Programs.Repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo repo;
	
	public User saveUser( User user)
	{
		return repo.save(user);
	}

}
