package edu.microservice.backend;

import edu.sample.maven_sample_jenkins_commons.JVMHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@RestController
@RequestMapping("/api")
public class DemoApplication {

	@Autowired
	DemoRepository demoRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping
	public ResponseEntity<?> findAll() {
		return ResponseEntity.ok(demoRepository.findAll());
	}

	@PostMapping
	public ResponseEntity<?> save(@RequestBody DemoEntity entity) {
		return ResponseEntity.status(HttpStatus.CREATED).body(demoRepository.save(entity));
	}

	@GetMapping("/jvm-info")
	public ResponseEntity<?> greeting() {
		final Runtime runtime = Runtime.getRuntime();
		final String jvmMetadata = JVMHelper.getJvmInfo(runtime);
		return ResponseEntity.ok().contentType(MediaType.TEXT_HTML).body(jvmMetadata);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/").allowedOrigins("*");
			}
		};
	}

}
