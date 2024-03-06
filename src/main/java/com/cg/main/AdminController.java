package com.cg.main;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(allowedHeaders= "*",origins= "*")
public class AdminController {
	@Autowired
	private AdminService service;
	
	@PostMapping("/registerAdmin")
	public Admin registerAdmin(@RequestBody Admin admin) {
		return service.registerAdmin(admin);
	}
	
	@GetMapping("/getAdmins")
	public List<Admin> getAdmins() {
		return service.getAdmins();
		
	}
	
	@DeleteMapping("/deleteAdmin")
	public void deleteAdmin(@RequestParam Integer id) {
		service.deleteAdmin(id);
	}
	
	@PutMapping("/updateAdmins")
	public Admin updateAdmin(@RequestBody Admin admin) {
		return service.updateAdmin(admin);
	}
    
}


