package edu.microservice.backend;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DemoController {

    private DemoService demoService;

    public DemoController(DemoService demoService) {
        this.demoService = demoService;
    }

    @GetMapping
    public ResponseEntity<List<DemoEntity>> findAll() {
        return ResponseEntity.ok(demoService.findAll());
    }

    @PostMapping
    public ResponseEntity<DemoEntity> save(@RequestBody DemoEntity entity) {
        return ResponseEntity.status(HttpStatus.CREATED).body(demoService.save(entity));
    }

    @GetMapping("/jvm-info")
    public ResponseEntity<?> managementInfo() {
        return ResponseEntity.ok().contentType(MediaType.TEXT_HTML).body(demoService.managementInfo());
    }
}
