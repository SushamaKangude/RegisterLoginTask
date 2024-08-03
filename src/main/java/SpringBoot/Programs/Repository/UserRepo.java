package SpringBoot.Programs.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import SpringBoot.Programs.Entity.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long>{

	
}
