package edu.microservice.backend;

import edu.sample.maven_sample_jenkins_commons.JVMHelper;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DemoService {

    private DemoRepository demoRepository;

    public DemoService(DemoRepository demoRepository) {
        this.demoRepository = demoRepository;
    }

    public List<DemoEntity> findAll() {
        return demoRepository.findAll();
    }

    public DemoEntity save(DemoEntity entity) {
        return demoRepository.save(entity);
    }

    public String managementInfo() {
        final Runtime runtime = Runtime.getRuntime();
        final String jvmMetadata = JVMHelper.getJvmInfo(runtime);
        return jvmMetadata;
    }
}
