package com.kocaeli.bel;

import com.kocaeli.bel.entity.YourEntity;
import com.kocaeli.bel.service.YourEntityService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest(classes = {YourEntityService.class})
class BelApplicationTests {

	@Autowired
	private YourEntityService yourEntityService;

	@Test
	void printRowFromDatabase() {
		Long id = 1L; // Replace with the ID of the row you want to fetch
		Optional<YourEntity> entity = yourEntityService.getEntityById(id);

		if (entity.isPresent()) {
			System.out.println("Row fetched: " + entity.get());
		} else {
			System.out.println("No row found with ID: " + id);
		}
	}
}