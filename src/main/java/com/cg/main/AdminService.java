package com.cg.main;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdminService {
	@Autowired
	private AdminRepository repository;
	
	public Admin registerAdmin(Admin admin) {
		return repository.save(admin);
	}
    
	public List<Admin> getAdmins(){
		return repository.findAll();
	}
	
	public void deleteAdmin(Integer id) {
		repository.deleteById(id);
	}
	public Admin updateAdmin(Admin admin) {
		Integer id=admin.getId();
		Admin adm = repository.findById(id).get();
		adm.setName(admin.getName());
		adm.setPassword(admin.getPassword());
		return repository.save(adm);
	}
}
